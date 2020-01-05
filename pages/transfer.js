import Menubar from '../layouts/menubar'
import Addtransfer from '../component/Addtransfer'
import DetailTransaction from '../component/DetailTransaction'
import styled from 'styled-components';
import { useState } from 'react'

const Transfer = () => {

    const [address, setAddress] = useState([]);

    const handleCreate = (data) => {
        address.push(data);
        let temp = address
        setAddress([...temp]);
    }

    return (
        <div>
                <Menubar/>
                <Addtransfer onCreate={handleCreate}/>
                {address.map((item) => (<DetailTransaction data={item} />))}
        </div>
    )
}

export default Transfer;