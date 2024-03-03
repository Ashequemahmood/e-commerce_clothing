import React, {useContext} from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';

const Product = ({product}) => {
  console.log(product)
  const {category, id, image, title, price} = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-200' src={image} alt="" />
          </div>
        </div>
        {/* button */}
        <div className='absolute top-6 -right-11 group-hover:right-5  p-2 flex justify-center items-center flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button>
            <div className='flex justify-center items-center w-12 h-12 text-white bg-red-500'>
              <BsPlus className='text-3xl'/>
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 flex justify-center items-center drop-shadow-xl text-primary bg-white'>
            <BsEyeFill/>
          </Link>
        </div>
      </div>
      {/* category, title and price */}
      <div>
        <div className='text-sm text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>€ {price}</div>
      </div>
    </div>
  )
};

export default Product;
