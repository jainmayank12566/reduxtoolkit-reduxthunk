import products from './products.json';
import Cart from './components/Cart';
import Product from './components/Product';
import './App.css';
function App(){
    return(
        <div className='App'>
            <Cart />
            <div className='products'>
                {products.map((product)=>(
                    <div key={product.id}>
                        <Product {...product}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default App;