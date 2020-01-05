import styled from 'styled-components';
import { useState } from 'react'

const StyledWrapper = styled.div`
    border-radius: 8px;
    box-shadow:0 0 6px 0 rgba(0,0,0,.25);
    width:500px;
    margin-top:20px;

    p{
        font-size:30px;
    }
    h1{
        font-size:50px;
    }
    .content{
        padding: 0px 0px 10px 20px;
    }
    input{
        border-radius: 5px;
        width:90%;
        height:35px;
        font-size:25px;
    }
    button{
        margin-top:30px;
        width:20%;
        font-family:ConcertOne;
        font-size:20px;
        border-radius: 5px;
        background-image: linear-gradient(-90deg, yellow, orange );
    }
`

const Outside = styled.div`
   display:flex;
   justify-content:center;
   
`

const Addtransfer = (props) => {

    const [fromAddress, setFromAddress] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [amount, setAmount] = useState('');

    const handelCreate = () => {
        props.onCreate({ fromAddress, toAddress, amount })
    }

    return (
        <Outside>
            <StyledWrapper>
                <div className="content">
                    <h1>Transfer</h1>
                    <label>
                        <p>From Address</p>
                        <input type='text' onChange={(e) => setFromAddress(e.target.value)} />
                    </label>
                    <label>
                        <p>To Address</p>
                        <input type='text' onChange={(e) => setToAddress(e.target.value)} />
                    </label>
                    <label>
                        <p>Amount</p>
                        <input type='number' onChange={(e) => setAmount(e.target.value)} />
                    </label>
                    <div>
                        <button onClick={handelCreate}>Transfer</button>
                    </div>
                </div>
            </StyledWrapper>
        </Outside>
    )
}

export default Addtransfer;