import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

 function CartItem() {
   const dispatch=useDispatch()
    const items=useSelector(state=>state.cartReducer)
    let ListCart = [];
    let TotalCart=0;
    let totalitem=0;
    Object.keys(items.Carts).forEach(function(item){
       totalitem=items.numberCart;
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    console.log(items)
    console.log(ListCart)

    if (totalitem===0) return <div>
    <img style={{width:"50%"}} src='https://cdn.dribbble.com/users/324185/screenshots/15805709/media/98798b7662d8a4b21cb66ad4bd430b48.jpg?compress=1&resize=800x600' alt="image"/>

    <h5>Your Cart Is empty</h5>
</div>;
  return (
  <>
               <div className='container' style={{textAlign:'center'}}>
            <h2>U r Cart</h2>
            </div>
            <div className='container' style={{textAlign:'start'}}>
            <h5>Cart  Total items ({totalitem})</h5>
            </div>
               

               <div className='cart-products'>
               <table  className="table table-light table-hover " style={{boxShadow:'5px 5px 5px lightGray'}}>
               <tbody>
                  <tr>
                     <th>
                           Image
                     </th>
                     <th>
                           Item name
                     </th>
                     <th>
                           Price
                     </th>
                     <th>
                           Quantity
                     </th>
                     <th>
                           Add /Remove item
                     </th>
                  </tr>
               {ListCart.map((item,key) => (
               
                     <tr key={item.id}>
                     <td>
                        <img style={{width:'100px',height:'100px'}} src={item.image}/>
                     </td>
                     <td >
                        {item.title}
                     </td>
                     <td>
                        {item.price*item.quantity}
                     </td>
                     <td>
                        {item.quantity}
                     </td>
                     <td>
                     <button className='btn btn-primary mx-2'
                      onClick={() =>{
                        console.log(key,"keyyys") 
                        dispatch({type:'DECREASE_QUANTITY',payload:key})}}
                     >
                     -
                     </button>
                     
                     <button className='btn btn-primary mx-2'
                         onClick={() => dispatch({type:'INCREASE_QUANTITY',payload:key})}
                     >
                     +
                     </button>
                     
                     <button className='btn btn-danger '
                      onClick={() => dispatch({type:'DELETE_CART',payload:key})}
                     >
                        &times;</button>
                     </td>
                  
                  </tr>
                  
               ))}
               </tbody>
               </table>
               </div>
               <div className='col-auto ms-auto'>
                  <h4>Total Price $ {TotalCart}</h4>
              
                  
                  </div>
          </>
       );
       };

export default CartItem;
