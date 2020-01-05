import { useState } from "react"
const SHA256 = require('crypto-js/sha256');
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { render } from "react-dom";
import styled from 'styled-components';

const Kong = styled.div`
    border-radius: 8px;
    box-shadow:0 0 6px 0 rgba(0,0,0,.25);
    width:600px;
    padding:10px;
    margin-bottom:20px;
`

const CreateBLock = props => {
    const { Indexs, Data, Amount,hash,previousHash } = props.box;
    // const hash=SHA256(Indexs+Data+Amount).toString();

    return (
        <Kong>
            <div>
                <p>Block => {Indexs} </p>
                <p>Data => {Data}</p>
                <p>Amount=>{Amount}</p>
                <p>Hash => {hash}</p>
                <p>previous Hash => {previousHash}</p>
            </div>
        </Kong>
    )
}

export default CreateBLock;