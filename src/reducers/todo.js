import {ADD_TODO,DELETE_TODO} from '../actions';
//删除todo
let reducer = (state={list:[]},action)=>{
    if(action === undefined) return state;
    switch (action.type){
        case ADD_TODO:
            return {list:[...state.list,action.text]};
        case  DELETE_TODO:
            let list = state.list;
            list.splice(action.index,1);
            //我们的状态具有不变性，每次都要返回一个新的对象
            return {list:[...list]};
        default:
            return state;
    }
}
export default reducer;