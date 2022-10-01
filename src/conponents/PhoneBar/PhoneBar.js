import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhone] = useState([]);
    useEffect(()=>{
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res => res.json())
        // .then(data => console.log(data))
        axios.get(
          "https://openapi.programming-hero.com/api/phones?search=iphone"
        )
        .then(data => {
            const phoneLoaded = data.data.data;
            const phoneData = phoneLoaded.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const singlePhone = {
                    name: phone.phone_name,
                    price: price,

                }
                return singlePhone;
            })
            setPhone(phoneData)
        });
    },[])
    return (
      <>
        <div className='container mx-auto'>
          <BarChart width={500} height={400} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          </BarChart>
          
        </div>
      </>
    );
};

export default PhoneBar;