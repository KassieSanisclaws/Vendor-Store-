import React from 'react';
import ProductPage  from "../Products/productPage";
import Img1 from '../../assets/Pictures/Untitled14.jpg';
import Img2 from '../../assets/Pictures/Untitled12.jpg';
import Img3 from '../../assets/Pictures/Untitled8.jpg';

export const TestProductPage = () => {
    const product = {
        images: [Img1, Img2, Img3],
        productName: 'Product Name',
        price: '$100',
        description: ['Description line 1', 'Description line 2'],
        descriptionTitle: 'Product Description',
        toolsRequired: 'Tools required',
        priceWithoutTax: '$90',
        deliveryEstimate: '2-3 days',
    };
    return (
        <>
            <ProductPage
                images={product.images}
                productName={product.productName}
                price={product.price}
                description={product.description}
                descriptionTitle={product.descriptionTitle}
                toolsRequired={product.toolsRequired}
                priceWithoutTax={product.priceWithoutTax}
                deliveryEstimate={product.deliveryEstimate}
            />;
        </>
    )
}