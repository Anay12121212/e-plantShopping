import{createSlice}from'@reduxjs/toolkit';
const cartSlice=createSlice({name:'cart',initialState:{items:[]},reducers:{
addItem(state,action){const p=action.payload;const name=typeof p==='string'?p:p.name;const found=state.items.find(i=>i.name===name);if(found)found.quantity+=1;else state.items.push(typeof p==='string'?{id:p,name:p,cost:0,image:'',quantity:1}:{...p,id:p.id||p.name,cost:Number(p.cost??p.price??0),quantity:1});},
removeItem(state,action){const name=typeof action.payload==='string'?action.payload:action.payload.name;state.items=state.items.filter(i=>i.name!==name);},
updateQuantity(state,action){const{name,quantity}=action.payload;const item=state.items.find(i=>i.name===name);if(!item)return;if(quantity<=0)state.items=state.items.filter(i=>i.name!==name);else item.quantity=quantity;}
}});
export const{addItem,removeItem,updateQuantity}=cartSlice.actions;
export const selectCartItems=s=>s.cart.items;
export const selectCartCount=s=>s.cart.items.reduce((n,i)=>n+i.quantity,0);
export const selectCartTotal=s=>s.cart.items.reduce((n,i)=>n+Number(i.cost||0)*i.quantity,0);
export default cartSlice.reducer;