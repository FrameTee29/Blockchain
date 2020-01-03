import React from 'react'
import styled from 'styled-components';
import { useState } from 'react'
const StyledWrapper = styled.div`
    max-width:600px;
    border-radius: 8px;
    box-shadow:0 0 6px 0 rgba(0,0,0,.25);
    background:yellow;
    p{
        font-size:30px;
    }
    .content{
        padding:0px 0px 10px 20px;
    }
`
const DetailTransaction = props => {

    const { fromAddress,toAddress,amount } = props.data;

    return (
        <StyledWrapper>
            <p>From Address : {fromAddress}</p>
            <p>To Address :{toAddress}</p>
            <p>Coin : {amount}</p>
        </StyledWrapper>
    )
}
export default DetailTransaction;