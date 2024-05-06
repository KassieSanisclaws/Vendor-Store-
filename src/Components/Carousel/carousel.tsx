import { useState, useEffect } from 'react';
import { Box, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StyledButton = styled(Button)({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
});

export const CarouselComponent = ({ images }: { images: string[] }) => {
      const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [index, images]); // Re-run effect when index changes

    return (
        <Box position="relative">
            <Carousel autoPlay={false} infiniteLoop selectedItem={index} showArrows={false}>
                {images.map((image, i) => (
                    <Paper key={i}>
                        <img src={image} 
                             alt={`Slide ${i}`} 
                             style={{ 
                                 width: '100%', 
                                 height: 'auto',
                                 }} 
                                 />
                    </Paper>
                ))}
            </Carousel>
            <StyledButton onClick={handlePrev} sx={{ left: 0 }}>Prev</StyledButton>
            <StyledButton onClick={handleNext} sx={{ right: 0 }}>Next</StyledButton>
        </Box>
    );
};