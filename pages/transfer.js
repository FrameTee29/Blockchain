import Menubar from '../layouts/menubar'
const Transfer = () => {
    return (
        <div>
            <Menubar />
            <h1>Transfer</h1>
            <div>
                <label>
                    <p>From Address</p>
                    <input type='text' />
                </label>
                <label>
                    <p>To Address</p>
                    <input type='text' />
                </label>
                <label>
                    <p>Amount</p>
                    <input type='number' />
                </label>
                <div>
                    <button >Transfer</button>
                </div>
            </div>

        </div>
    )
}

export default Transfer;