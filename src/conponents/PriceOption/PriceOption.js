import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const { price, name, fetatures } = option;
    
    return (
      <div>
        <div className="bg-indigo-300 m-3 rounded-md p-4">
          <h3>
            <span className="text-6xl font-bold text-white">
              {price}
            </span>
            <span className="text-2xl text-gray-200">/month</span>
          </h3>
          <p className="text-3xl my-4">{name}</p>
          {
            fetatures.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
          }
          <button className='bg-blue-500 w-full rounded-md py-3 font-bold text-white hover:bg-green-500 mt-3'>Buy Now</button>
        </div>
      </div>
    );
};

export default PriceOption;