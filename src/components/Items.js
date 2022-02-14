import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function Items() {
  const loc=useLocation();
  const dispatch=useDispatch();
  console.log(loc.state)

  return <div>
    <div  key={loc.state.id} className="card" style={{width: '90%',margin:'3%',boxShadow:'3px 5px 5px lightGray',textAlign:'center',flexDirection:'row',alignItems:'center'}}>
                   <div style={{width:'50%'}}>
                   <img src={loc.state.image} className="card-img-top" alt="products" style={{height:"400px",width:'60%'}}/>
                   </div>
                    <div className="card-body">
                        <h5 className="card-title">{loc.state.title}</h5>
                        <p>Description : {loc.state.description}</p>
                        <p>Category : {loc.state.category}</p>
                        <h5 className="card-title"> Price : {loc.state.price}$</h5>
                        <button className='btn btn-lg btn-danger' onClick={()=>
                            {
                                dispatch({type:'SELECTED-PRODUCT',payload:loc.state})
                                
                            }}>Add to Cart</button>
                             
                    </div> 
                    </div> 
  </div>;
}
