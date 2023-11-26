import { createStore } from 'redux';




const counterReducer=(state={counter:0},action)=>{
 
    if(action.type==='increment'){
        return{
            counter:state.counter+1
        }
    }else  if(action.type==='decrement'){
        return{
            counter:state.counter-1
        }
    }
    else  if(action.type==='decrement5'){
        console.log('l');
        return{
            counter:state.counter-5
        }
    }
    else  if(action.type==='increment5'){
        return{
            counter:state.counter+5
        }
    }
   
    return state
}

const store= createStore(counterReducer);

const subscriber=()=>{

}

store.subscribe(subscriber)

export default store
