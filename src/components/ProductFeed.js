import React from 'react'
import Product from './Product';

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40 mx-auto'>
        {products.slice(0,4).map(({id , title, price, description, image, category}) => (
        <Product 
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            image={image}
            category={category}
        />

        ))}
        <img 
            src="https://links.papareact.com/dyz" alt="" 
            className='md:col-span-full'    
        />
        <div className='md:col-span-2'>
            {products.slice(4,5).map(({id , title, price, description, image, category}) => (
            <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
            />
            ))}
        </div>
        
        {products.slice(5,13).map(({id , title, price, description, image, category}) => (
            <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
            />
            ))}
        {products.slice(14,16).map(({id , title, price, description, image, category}) => (
            <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
            />
            ))}
        <img 
            src="/prime.jpg" alt="" 
            className='md:col-span-full'    
        />

        <div className='md:col-span-4'>
            {products.slice(13,14).map(({id , title, price, description, image, category}) => (
            <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
            />
            ))}
        </div>

        {products.slice(16,products.length).map(({id , title, price, description, image, category}) => (
            <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
            />
            ))}
    </div>
  );
}

export default ProductFeed;