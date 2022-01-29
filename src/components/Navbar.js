import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const items=useSelector(state=>state.cartReducer)
  let ListCart = [];
  let TotalCart=0;
  let totalitem=0;
  Object.keys(items.Carts).forEach(function(item){
     totalitem=items.numberCart;
      TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
      ListCart.push(items.Carts[item]);
  });
  console.log(items,"iteems")
  console.log(totalitem,"toootla")
  return <div>
      <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><strong><em>Shopping-Cart</em></strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav mr-6">
        <NavLink className="nav-link" to="/">
         Products
        </NavLink>
       <NavLink className="nav-link" to="/cart">
         My Cart<sup style={{fontSize:'17px',color:'red'}}>{totalitem}</sup>
       </NavLink>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
  </div>;
}
