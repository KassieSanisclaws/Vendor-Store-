import { Link } from 'react-router-dom';
import { CarouselComponent } from '../Components/Carousel/carousel';
import { useThemeMode } from '../main';
import { Container, Box, Grid, Typography, CssBaseline, ImageListItemBar, IconButton, ImageListItem } from '@mui/material';
import { Info } from '@mui/icons-material';
import Img1 from '../assets/Pictures/Untitled14.jpg';
import Img2 from '../assets/Pictures/Untitled12.jpg';
import Img3 from '../assets/Pictures/Untitled8.jpg';
import Img4 from '../assets/Pictures/Untitled11.jpg';
import Img5 from '../assets/Pictures/Untitled13.jpg';
import Img6 from '../assets/Pictures/Untitled15.jpg';
import ProductPage from '../Components/Products/productPage';



export const MainIndex = () => {
    const { mode } = useThemeMode();

    const itemData = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
            cols: 2,
        },
        {
            id: 6,
            img: Img4,
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            id: 7,
            img: Img5,
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            id: 8,
            img: Img3,
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            id: 9,
            img: Img6,
            title: 'Mushrooms',
            author: '@silverdalex',
        },
        {
            id: 10,
            img: Img6,
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            id: 11,
            img: Img6,
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            id: 12,
            img: Img1,
            title: 'Bike',
            author: '@southside_customs',
        },
    ];

    // const product = {
    //     images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    //     productName: 'Product Name',
    //     price: '$100',
    //     description: ['Description line 1', 'Description line 2'],
    //     descriptionTitle: 'Product Description',
    //     toolsRequired: 'Tools required',
    //     priceWithoutTax: '$90',
    //     deliveryEstimate: '2-3 days',
    // };

const handleItemClick = (id: number) => {
    // Redirect to the product page with the corresponding id
        const selectedItem = itemData.find(item => item.id === id);
            console.log(selectedItem);
            // return <ProductPage  
            //               images={product.images} 
            //               productName={product.productName} 
            //               price={product.price} 
            //               description={product.description} 
            //               descriptionTitle={product.descriptionTitle} 
            //               toolsRequired={product.toolsRequired} 
            //               priceWithoutTax={product.priceWithoutTax} 
            //               deliveryEstimate={product.deliveryEstimate} 
            //               />;
                       };

return (
    <Container maxWidth="xl" sx={{ height: "100%", mt: 3, mb: 6 }}>
        <Box sx={{ height: "100%" }}>
            <Container sx={{ bgcolor: mode === "dark" ? "#47008F" : "#F5EBFF", height: "90vh", padding: "40px", width: "100%", overflow: "hidden", paddingBlock: "40px", borderRadius: "15px" }}>
                <CssBaseline />
                <Box sx={{ height: "35vh", width: "100%", overflow: "hidden", borderRadius: "10px" }}>
                    <CarouselComponent images={itemData.map(item => item.img)} />
                </Box>
                <Box sx={{ width: "100%", flexGrow: 1, position: "relative", top: "1.5rem", }}>
                    <Container sx={{ height: "50vh", padding: "40px", width: "100%", overflow: "hidden", paddingBlock: "40px", borderRadius: "15px", overflowY: "auto", scrollbarColor: mode === "dark" ? "#47008F #F5EBFF" : "#F5EBFF #47008F", scrollbarWidth: "thin", }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {itemData.map((itm, indx) => (
                                <Grid item xs={3} sm={4} key={indx}>
                                   {/* <Link to={`/product/${indx + 1}`}> */}
                                    <Box sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", 
                                               height: "100%", 
                                               borderRadius: "13px", 
                                               overflow: "hidden" 
                                               }}
                                               onClick={() => handleItemClick(itm.id)}
                                               >
                                        <Box sx={{ position: "relative", width: "100%", height: "25vh" }}>
                                            <img src={itm.img} alt={itm.author} style={{ width: "100%", height: "100%", objectFit: "cover" }} />     
                                               <Box
                                                    sx={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        width: "100%",
                                                        height: "100%",
                                                        display: "flex",
                                                        alignItems: "flex-end",
                                                        borderRadius: "13px",
                                                    }}
                                               >
                                                <ImageListItemBar
                                                    sx={{
                                                        background:
                                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                                            borderRadius: "13px",
                                                            width: "100%",
                                                    }}
                                                    title={itm.title}
                                                    subtitle={itm.author}
                                                    position="below" 
                                                    actionIcon={
                                                        <IconButton
                                                            sx={{ color: 'white' }}
                                                            aria-label={`star ${itm.title}`}
                                                        >
                                                            <Info />
                                                        </IconButton>
                                                    }
                                                    actionPosition="right"
                                                />
                                                </Box>
                                            </Box>
                                    </Box>
                                    {/* </Link> */}
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

            </Container>
        </Box>
    </Container>
 )
}