import styled from 'styled-components';
import { useState } from 'react'

const StyledWrapper = styled.div`
    max-width:600px;
    border-radius: 8px;
    

    box-shadow:0 0 6px 0 rgba(0,0,0,.25);
    p{
        font-size:30px;
    }
    h1{
        font-size:50px;
    }
    .content{
        padding:0px 0px 10px 20px;
    }
`
const Addtransfer = (props) => {
    
    const [fromAddress,setFromAddress]= useState('');
    const [toAddress,setToAddress]= useState('');
    const [amount,setAmount]= useState('');

    const handelCreate = () => {
        props.onCreate({ fromAddress, toAddress, amount})
    }

    return (
        <div>
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
        </div>
    )
}

export default Addtransfer;