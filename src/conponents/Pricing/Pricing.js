import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
      {
        id: 1,
        name: "Free",
        price: 0,
        fetatures: [
          "Awesome Feature",
          "Extra Feature",
          "Free Feature",
          "Unlimited Feature",
          "Limited Feature",
          "Danger feature",
        ],
      },
      {
        id: 2,
        name: "Silver",
        price: 20.99,
        fetatures: [
          "Everything on Free",
          "Extra Feature",
          "Free Feature",
          "Unlimited Feature",
          "Limited Feature",
          "Danger feature",
        ],
      },
      {
        id: 3,
        name: "Gold",
        price: 40.5,
        fetatures: [
          "Everything on Silver",
          "Extra Feature",
          "Free Feature",
          "Unlimited Feature",
          "Limited Feature",
          "Danger feature",
        ],
      },
      {
        id: 4,
        name: "Diamond",
        price: 100.0,
        fetatures: [
          "Everything on Silver",
          "Extra Feature",
          "Free Feature",
          "Unlimited Feature",
          "Limited Feature",
          "Danger feature",
        ],
      },
    ];
        return (
          <div>
            <h2 className="text-5xl font-bold bg-indigo-300 p-4 text-white">
              Best Deal of Chattogram
            </h2>
            <div className='grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-4 gap-3'>
              {pricingOption.map((option) => (
                <PriceOption option={option} key={option.id}></PriceOption>
              ))}
            </div>
          </div>
        );
};

export default Pricing;