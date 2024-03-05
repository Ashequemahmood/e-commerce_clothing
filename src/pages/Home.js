import React from 'react';
import { useContext } from 'react';
import {ProductContext} from "../contexts/ProductContext.js"
// import components
import Product from "../components/Product.js"
import Hero from '../components/Hero.js'

const Home = () => {
  // get products from contexts
  const {products} = useContext(ProductContext)
  
  // filter only mens and womans category
  const filteredProducts = products.filter(item => {
    return item.category === "women's clothing" || item.category === "men's clothing"
  })
  
  return (
    <div>
      <Hero/>
      <section className='py-16'>
        <div className='container mx-auto '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredProducts.map((product)=> {
            return <Product key={product.id} product={product}/>
          })}
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;
