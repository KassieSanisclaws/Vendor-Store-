import ProductPage  from "../Products/productPage";
import Img1 from '../../assets/Pictures/Untitled14.jpg';
import Img2 from '../../assets/Pictures/Untitled12.jpg';
import Img3 from '../../assets/Pictures/Untitled8.jpg';

export const TestProductPage = () => {
    const product = {
        images: [Img1, Img2, Img3],
        productName: 'Product Name',
        price: '$100',
        reviews: ["Review 1", "Review 2", "Review 3 Kassie Test", "Review 4", "Review 5"],
        description: ['Description line 1', 'Description line 2'],
        descriptionTitle: 'Product Description',
        reviewTitle: 'Product Reviews',
        toolsRequired: 'Tools required',
        priceWithoutTax: '$90',
        deliveryEstimate: '2-3 days',
        greeting: 'Hello',
        greetingTitle: 'Greeting',
        businessLocation: 'Business Location',
        ratings: [1, 2, 3, 4, 5],
        satisfactionRating: 4,
    };
    return (
        <>
            <ProductPage
                images={product.images}
                name={product.productName}
                price={product.price}
                reviews={product.reviews}
                description={product.description}
                descriptionTitle={product.descriptionTitle}
                reviewTitle={product.reviewTitle}
                priceWithoutTax={product.priceWithoutTax} 
                greeting={product.greeting} 
                greetingTitle={product.greetingTitle}
                businessLocation={product.businessLocation}
                ratings={product.ratings}
                satisfactionRating={product.satisfactionRating}
                satisfactionRatingTitle='Satisfaction Rating:'                
                
            />;
        </>
    )
}