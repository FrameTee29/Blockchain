import Link from 'next/link'
const linkStyle = {
    marginRight: 15
};

const Menubar = props => {
    return (
        <div className='topbar'>
            {/* Part of logo PSUCOIN */}
            <div className="logopsu">
                <div >
                    <Link href="/">
                        <a>
                            <img src='../static/images/LogoPSUCOIN.png'></img>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <a className="link">PSU COIN</a>
                    </Link>
                </div>
            </div>
            {/* Part of logo PSUCOIN */}

            {/* Part of Account,Transfer,Transaction */}
            {/* Account */}
            <div className="Menu-Container">
                <div className="Menubar-ATT">
                    <div>
                        <Link href="/account">
                            <a>
                                <img className="logo" src='../static/images/ACCOUNT.png'></img>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/account">
                            <a className="link">Account</a>
                        </Link>
                    </div>
                </div>

                {/* Transfer */}
                <div className="Menubar-ATT" >
                    <div>
                        <Link href="/transfer">
                            <a>
                                <img className="logo" src='../static/images/TRANSFER.png'></img>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/transfer">
                            <a className="link">transfer</a>
                        </Link>
                    </div>
                </div>
                {/* Transaction */}
                <div className="Menubar-ATT">
                    <div>
                        <Link href="/Pending">
                            <a>
                                <img className="logo" src='../static/images/PENDING.png'></img>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/Pending">
                            <a className="link">transaction</a>
                        </Link>
                    </div>
                </div>
            </div>
            {/* End Part of Account,Transfer,Transaction */}


            {/* <div class='content'>
                {props.children}
            </div> */}
            {/* ส่วน global */}
            <style jsx global>{`
                @font-face{
                    font-family:ConcertOne;
                    src:url(/static/fonts/ConcertOne-Regular.ttf);
                }
                body{
                    font-family:'ConcertOne';
                }
                `}
            </style>
            {/* ในส่วนของ toobar  */}
            <style jsx>{`
                .topbar{
                    display: flex;
                    flex-direction:row;
                    justify-content: space-between;
                    align-items:center;
                    height: 120px;
                    padding: 0px 20px;
                    box-shadow:rgb(0,0,0,0.2) 2px 2px 2px 1px;
                    background-image: linear-gradient(-90deg, yellow, orange );

                }
                .logo{
                    height:50px;
                    width:50px;    
                }

                .link{
                    text-decoration:none;
                    color:black;
                }
                .Menu-Container{
                    display: flex;
                    flex-direction:row;
                }

                .Menu-Container div{
                    margin-left:10px;
                    margin-right:20px;
                }
                .logopsu{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size:40px;
                }
                .Menubar-ATT{
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                }

                `}
            </style>

        </div>
    )
}

export default Menubar