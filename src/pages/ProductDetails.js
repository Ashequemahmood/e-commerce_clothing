import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {CartContext} from '../contexts/CartContext.js'
import {ProductContext} from '../contexts/ProductContext.js'

const ProductDetails = () => {
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
  const {id} = useParams();

  const product = products.find((item)=> {
    return item.id === parseInt(id);
  })

  if(!product){
    return(
      <section className='flex justify-center items-center h-screen'>
        ...Loading
      </section>
    )
  }

  const {image, title, price, description} = product;
  
  
  return (
    <section className='h-screen pt-32 pb-18 lg:py-32 flex items-center'>
      <div className='container mx-auto'>
        {/* image & text wrapper */}
        <div className='flex items-center flex-col lg:flex-row'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <div className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{title}</div>
            <div className='text-xl font-medium text-red-500 mb-6'>€ {price}</div>
            <p className='mb-8'>{description}</p>
            <button onClick={()=>addToCart(product, product.id)} className='bg-primary text-white py-2 px-4'>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProductDetails;
