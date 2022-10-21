import Alert from '../Alert/Alert'
import './App.css'
import CartSuccess from '../CartSuccess/CartSuccess'

function App() {
    return <div className="wrapper">
        <Alert title="Items Not Added" type="error">
            <div>Your items are out of stock.</div>
        </Alert>
        <CartSuccess/>
    </div>
}

export default App
