import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="h-[500px] mx-auto px-10 mb-8 bg-gradient-to-b from-silver-500-to-white">
      <div className=" w-full inline-block py-3">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">RoadMaps</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>

            <div className='flex flex-col items-center justify-center mt-[120px]'>
              <h3 className='text-6xl text-black'>Career, Money and Luxury</h3>
              <p className='text-2xl mt-5 text-gray-500'>Guiding you to your dream life</p>
            </div>


    </div>
  );
};

export default Header;