import{useSelector,useDispatch} from 'react-redux';
import{fetchTodos} from './redux/slices/todoSlice';
function App(){
    const items=useSelector((state)=>state);
    console.log("ITEMS",items);
    const dispatch=useDispatch();
    if(items.todo.isLoading){
        return<h1>Loading....</h1>
    }
    return(
        <div>
            <button onClick={()=>dispatch(fetchTodos())}>Fetch Todos</button>
            {items.todo.data && items.todo.data.map((val)=><li key={val.id}>{val.title}</li>)}
        </div>
    )
}
export default App;