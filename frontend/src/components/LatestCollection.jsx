import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Titles';
import ProductItems from './ProductItems';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]); // Added dependency to update state when products change

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={'Latest'} text2={'COLLECTIONS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus aperiam beatae illum ipsa at iure autem repudiandae animi recusandae expedita!
                </p>
            </div>

            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.map((item) => ( // Added return statement
                    <ProductItems 
                        key={item._id} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
