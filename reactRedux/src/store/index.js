import { createStore } from 'redux';
import {createSlice} from '@reduxjs/toolkit'




const counterReducer=(state={counter:0, showCounter:true},action)=>{
 
    if(action.type==='increment'){
        return{
            counter:state.counter+1,
            showCounter:state.showCounter
        }
    }else  if(action.type==='decrement'){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }
    else  if(action.type==='increase'){
        return{
            counter:state.counter+action.amount,
            showCounter:state.showCounter
        }
    }else if(action.type==='toggle'){
        return{
            showCounter:!state.showCounter,
            counter:state.counter
        }
    }
   
    return state
}

const store= createStore(counterReducer);

const subscriber=()=>{

}

store.subscribe(subscriber)

export default store
