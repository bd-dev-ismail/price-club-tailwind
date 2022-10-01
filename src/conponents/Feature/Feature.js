import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Feature = ({feature}) => {
    return (
      
        <div className="flex items-center">
          <CheckCircleIcon className="h-4 w-4 text-blue-600" />
          <p className="mx-2">{feature} </p>
        </div>
      
    );
};

export default Feature;