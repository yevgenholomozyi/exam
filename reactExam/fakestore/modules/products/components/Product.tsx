// Base
import React from 'react';

// Next
import Image from 'next/image';

// Components
import ButtonLink from '@/components/ButtonLink';

interface IProductProps {
  image: string
  title: string
  category: string
  price: string | number
  id: string | number
}

const Product = ({
  image,
  title,
  category,
  price,
  id,
}: IProductProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-gray-200 flex flex-col items-center justify-between p-4 hover:scale-110 hover:cursor-pointer transition delay-150 duration-300 ease-in-out">
      <div className="h-[200px] relative p-5 rounded-md flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={190}
          height={190}
          className="object-contain h-[190px] w-[190px]"
        />
      </div>
      <h4 className="text-lg font-semibold mt-[15px] text-wrap text-center">{title}</h4>
      <p className="mt-1 text-lg font-medium text-gray-900">{`Just for $${price}`}</p>
      <div className="mt-1">
        <span className="text-gray-600">Category: </span>
        <span className="text-violet-900">{category}</span>
      </div>
      <ButtonLink href={`/products/${id}`}>
        View Product
      </ButtonLink>
    </div>
  );
};

export default Product;
