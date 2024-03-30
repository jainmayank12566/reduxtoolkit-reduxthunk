import{createSlice,createAsyncThunk} from '@reduxjs/toolkit';
export const fetchTodos=createAsyncThunk('fetchTodos',async ()=>{
    const promise=await fetch(`https://jsonplacholder.typicode.com/todos`);
    return promise.json();
})
const todoSlice=createSlice({
    name:"todo",
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            state.isLoading=false;
            console.log("Error",action.payload);
            state.isError=true;
        })
    }
})
export default todoSlice.reducer;