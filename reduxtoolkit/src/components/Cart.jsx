import{useSelector} from 'react-redux';
const Cart=()=>{
    const items=useSelector((state)=>state);
    console.log("ITEMS",items);
    const total=items.cart.reduce((a,b)=>(a+b.price),0);
    return(
        <div className="alert alert-seccess">
            <h3 className="text-center">Total Items:{items.cart.length} (Rs.{total})/-</h3>
        </div>
    )
}
export default Cart;