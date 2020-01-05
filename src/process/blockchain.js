const SHA256=require('crypto-js/sha256');

export class Transaction{
    constructor(fromAddress,toAddress,amount){
        this.fromAddress=fromAddress;
        this.toAddress=toAddress;
        this.amount=amount;
        this.timestamp = Date.now();
    }
}

export class Block{
    constructor(timestamp,transactions,previousHash=''){
        this.timestamp=timestamp;
        this.transactions=transactions;
        this.previousHash=previousHash;
        this.nonce=0;
        this.hash=this.calculateHash();
        


    }
    // สร้าง Hash  ให้แต่ละ Block
    calculateHash(){
        return SHA256(this.previousHash+this.timestamp+JSON.stringify(this.transactions)+this.nonce).toString();
        
    }


    // เป็นการเพิ่มรหัสทำให้ ยากขึ้น
    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++;
            this.hash=this.calculateHash();
        }
        //console.log("Block mines -- > " + this.hash);
    }
}

export class Blockchain{
    constructor(){
        this.chain=[this.createGenesisBlock()];// เป็นเหมือน โซ่ ที่เอาใว้ต่อ Block
        this.difficulty=2;
        this.pending=[]; // ที่อยู่ในการดำเนินการอยู่
        this.miningReward=100*this.difficulty;
        this.order=[];
    }

    //Block เริ่มต้น และให้ Hash ก่อนหน้าเป็น 0 
    createGenesisBlock(){
        return new Block(0,"01/01/2017","Genesis block","0")
    }

    //Function Block ล่าสุดจะทำการคืนค่า Block ก่อนหน้าเรามา
    getLatesBlock(){
        return this.chain[this.chain.length-1];
    }

    minePendingTransactions(miningRewardAddress){
        let block = new Block(Date.now(),this.pending);
        block.mineBlock(this.difficulty);

        //console.log('Block successfully mined');
        this.chain.push(block);

        this.pending=[
            new Transaction(null,miningRewardAddress,this.miningReward)
        ];
    }

    createTransaction(transaction){
        this.pending.push(transaction);
    }

    getMoneyOfAddress(address) {
        let balance = 0;
    
        for (const block of this.chain) {
          for (const trans of block.transactions) {
            if (trans.fromAddress === address) { // ถ้าเราส่งเงินจาก Address นี้ เราจะเสียเงิน -
              balance -= trans.amount;
            }
    
            if (trans.toAddress === address) { // ถ้าเราได้เงินมาเข้า Address นี้ จะได้เงิน +
              balance += trans.amount;
            }
          }
        }
        return balance;
      }
    addBlock(newBlock){
        newBlock.previousHash=this.getLatesBlock().hash; // เราจะให้ Block ใหม่มีค่า previousHash เป็นค่า Hash ของ Block ก่อนนหน้านี้
        // newBlock.hash=newBlock.calculateHash(); // และให่ Block ใหม่มีค่า Hash ใหม่ โดยการคำนวณจาก Function calculateHash
        newBlock.mineBlock(this.difficulty);// เพิ่มความยากในการถอดรหัส กลับไปดูที่ function  mineBlock
        this.chain.push(newBlock);//  push Block ใหม่ลงไปใน this chain ที่เป็น array
    }

    // Check ว่า block ก่อนหน้านี้เชื่อมต่อกันจริงไหม
    isChainValid(){
        for(let i=1; i<this.chain.length;i++){
            const currentBlock = this.chain[i]; 
            const previousBlock = this.chain[i-1];
            
        
            // Block ปัจจุบัน มีค่า Hash  ไม่เท่ากับ  ค่าHash ที่ไปคำนวณมาแสดงว่าผิดพลาด
            if(currentBlock.hash != currentBlock.calculateHash()){
                return false;
            }

            //ถ้า Block ปัจจุบันมีค่า Hash ก่อนหน้า ไม่เท่ากับค่า Hash ของ Block ก่อนหน้า แสดงว่าผิดพลาด
            if(currentBlock.previousHash != previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

let psucoin = new Blockchain();

// console.log('Mining block 1 ...');
// psucoin.addBlock(new Block("10/07/2017",{amount:4,description:"สวัสดีครับ"}));


// console.log('Mining block 2 ...');
// psucoin.addBlock(new Block("10/07/2017",{amount:10}));

// console.log('Transaction '+psucoin.chain[2].transac.amount);
//  console.log('........ '+ psucoin.getMoneyOfAddress("5555"));
psucoin.createTransaction(new Transaction('Admin','prawe',1000));
psucoin.createTransaction(new Transaction('prawe','Teeraphat',1000));
console.log('\n//////////////////////////////////////////////////////////////////////////////////');
console.log('\n\n <---- Prawe transfer 1000 coin to Teeraphat ---->');
console.log(' <---- Cheer is Miner  ---->');
psucoin.minePendingTransactions('CHEER');
console.log('Date is ',psucoin.chain[0].transactions);
console.log('\n Balance of Teeraphat == > ',psucoin.getMoneyOfAddress('Teeraphat'));
console.log('\n Balance of Cheer for mining == > ',psucoin.getMoneyOfAddress('CHEER'));
console.log('\n//////////////////////////////////////////////////////////////////////////////////');



console.log('\n//////////////////////////////////////////////////////////////////////////////////');
psucoin.createTransaction(new Transaction('Teeraphat','prawe',50));
console.log('\n\n <---- Teeraphat transfer 50 coin to prawe ---->');
console.log(' <---- Cheer is Miner  ---->');
psucoin.minePendingTransactions('CHEER');
console.log('\n Balance of Teeraphat == > ',psucoin.getMoneyOfAddress('Teeraphat'));
console.log('\n Balance of Cheer for mining == > ',psucoin.getMoneyOfAddress('CHEER'));
console.log('\n//////////////////////////////////////////////////////////////////////////////////');



// console.log('\n  Starting the miner round 2');
// psucoin.minePendingTransactions('Teeraphat');

// console.log('\n Balance of Teeraphat == > ',psucoin.getMoneyOfAddress('Teeraphat'));
