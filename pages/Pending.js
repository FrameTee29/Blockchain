import Menubar from '../layouts/menubar'
import CreateBlock from '../layouts/createBlock'
import { useState } from 'react'
import styled from 'styled-components';
const SHA256 = require('crypto-js/sha256');

const Content = styled.div`
    width:100%;
    .pfont{
        font-size:40px;
    }
    .contentRow{
        display:flex;
        flex-direction:row;
        
    }
    button{
        margin-bottom:20px;
    }
`
const Allblock = [
    // {
    //     Indexs: 0,
    //     Data: "Hello",
    //     Amount: 10,
    //     hash:"Block Genesis",
    //     previousHash:0,
    // },
    
]
const Pending = props => {
    const [newBlock,setNewBlock]=useState(Allblock);
    const [Indexs,setIndexs]=useState(0);
    const [Data,setData]=useState('Start');
    const [Amount,setAmount]=useState(10);
    const [hash,setHash]=useState("Block Genesis");
    const [previousHash,setpreviousHash]=useState(0);

    const haddleCrate=()=>{
        newBlock.push({Indexs,Data,Amount,hash,previousHash});
        setNewBlock([...newBlock]);
        generateBlock();

    }

    const generateBlock=()=>{
        if(Indexs >= 1){
            setHash([...SHA256(Indexs+Data+Amount).toString()]);
            newBlock[Indexs].previousHash=newBlock[Indexs-1].hash;
        }
        setIndexs(Indexs+1);
        setData("Hello"+Indexs);
        setAmount(10+Indexs)
        setHash(SHA256(Indexs+Data+Amount).toString());
        
    }
    
    return (

        <Content>
            <Menubar />
            <p className="pfont">BLOCK ON CHAIN</p>
            <button onClick={haddleCrate}>Create Block</button>
            {
               newBlock.map((item,index)=>{
                    return(
                        <CreateBlock key={index} box={item}/>
                    )
                })
            }
        </Content>
    )
}

export default Pending;