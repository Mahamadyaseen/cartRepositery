
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function Products() {
    const dispatch=useDispatch();
   const navigate=useNavigate();
 const [information, setInformation] = useState([]);
  useEffect(() => {
    
    datFething();
    
  }, []);
  
  

   const datFething= async()=>
   {
    let typeAndValue={
      method:"get",
    };
     let data=await fetch('https://fakestoreapi.com/products',typeAndValue);
     let info=await data.json()
     console.log(info);
     setInformation(info);
     console.log(information)
     dispatch({type:'SET-PRODUCT',data:{info}})
   }
   
  return (
    <div className='container-fluid  '>
           
         <div className='col-12 hstack' style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
            {information.map((data)=>
            {
                return(
                    <div  key={data.id} className="card" style={{width: '18rem',margin:'3%',boxShadow:'3px 5px 5px lightGray',textAlign:'center'}}>
                    <img src={data.image} className="card-img-top" alt="products" style={{height:"300px"}}/>
                    <div className="card-body">
                        <p className="card-title">{data.title}</p>
                        <h5 className="card-title"> Price : {data.price}$</h5>
                        <button className='btn btn-lg btn-danger' onClick={()=>
                            {
                                dispatch({type:'SELECTED-PRODUCT',payload:data})
                                
                            }}>Add to Cart</button>
                            <button className='btn  btn-danger my-2' onClick={()=>
                            {
                                navigate("/item",{state:data})
                                
                            }}>Veiw Product</button>  
                    </div> 
                    </div> 
                )
            })}
       
         </div>
        </div>
  );
}

export default Products;
