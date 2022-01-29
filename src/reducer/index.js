

const initProduct = {
  numberCart:0,
  Carts:[],
  _products:[]
}
 const cartReducer = (state =initProduct , action) => {
  let doesItemExist;
  switch (action.type) {
    case "SELECTED-PRODUCT":
      if(state.numberCart==0){
        let cart = {
            id:action.payload.id,
            quantity:1,
            name:action.payload.title,
            image:action.payload.image,
            price:action.payload.price
        } 
        state.Carts.push(cart); 
    }
    else{
        let check = false;
        state.Carts.map((item,key)=>{
            if(item.id==action.payload.id){
                state.Carts[key].quantity++;
                check=true;
            }
        });
        if(!check){
            let _cart = {
                id:action.payload.id,
                quantity:1,
                name:action.payload.title,
                image:action.payload.image,
                price:action.payload.price
            }
            state.Carts.push(_cart);
        }
    }
    return{
        ...state,
        numberCart:state.numberCart+1
    }
    case "INCREASE_QUANTITY":
        state.numberCart++
        state.Carts[action.payload].quantity++;
      
       return{
           ...state
       }
  case "DECREASE_QUANTITY":
     let quantity = state.Carts[action.payload].quantity;
       if(state.Carts.quantity>1){
          state.numberCart--;
          state.Carts[action.payload].quantity--;
      
       }
      return{
          ...state
      }
  case "DELETE_CART":
   

                
                let quantity_ = state.Carts[action.payload].quantity;
                return{
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{

                        return item.id!=state.Carts[action.payload].id
                    })
                   
                }
   

    default:
      return state;
  }
}

export default cartReducer;
