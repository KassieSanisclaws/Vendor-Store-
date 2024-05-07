import { useState, useEffect } from 'react';
import { useThemeMode } from '../main';
import PageLayout from '../Components/Page-Layout/pageLayout';
import { ButtonData, ReviewData } from '../Types/typeInterface';
import { Box, CircularProgress, Stack } from '@mui/material';
import AboutUsCarouselData  from "../JsonData/dataStructures";

export const About = () => {
    const { mode } = useThemeMode();
    const [loading, setLoading] = useState<boolean>(true);
    const images = AboutUsCarouselData.AboutUsCarouselData;

    const handleEditPicture = (e: any) => {
        e.preventDefault();
        console.log('Edit Picture To Be Implemented');
    }

    const buttonsData: ButtonData[] = [
        { name: "Edit Picture", onClick: handleEditPicture },
        { name: "Edit Profile", to: '/editProfile', onClick: handleEditPicture},
        { name: "Edit Store Items", onClick: handleEditPicture },
        { name: "Edit Store Greetings", onClick: handleEditPicture },
        { name: "Change Password", onClick: handleEditPicture },
    ];

    const reviews: ReviewData[] = [
        { name: 'Remy Sharp', avatarSrc: '/static/images/avatar/1.jpg', title: 'Brunch this weekend?', reviewer: 'Ali Connors', comment: "I'll be in your neighborhood doing errands this…", rating: 4 },
        { name: 'Travis Howard', avatarSrc: '/static/images/avatar/2.jpg', title: 'Summer BBQ', reviewer: 'to Scott, Alex, Jennifer', comment: "Wish I could come, but I'm out of town this…", rating: 3 },
        { name: 'Cindy Baker', avatarSrc: '/static/images/avatar/3.jpg', title: 'Oui Oui', reviewer: 'Sandra Adams', comment: 'Do you have Paris recommendations? Have you ever…', rating: 5 },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
          <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: loading ? 'rgba(0, 0, 0, 0.5)' : "", //Semi-transparent background overlay
                    zIndex: loading ? 9999 : -1, // Ensure CircularProgress is above other content when loading
                }}
            >
                {loading && (
                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                        <CircularProgress color="primary" />
                    </Stack>
                )}
         </Box>
         <PageLayout 
              mode={mode}
              loading={loading} 
              userType='consumer'
              buttonsData={buttonsData} 
              reviews={reviews}
              titleBox2='About Items'
              titleBox4='About Search table'
              titleBox9='About Store Items'
              includeTitleBox2={true}
              includeTitleBox4={true}
              includeTitleBox9={true}
              includeStoreReviews={true}  
              includeAboutUsSearchTable={true}
              includeAboutUsPicture1={true}
              includeAboutUsPicture2={true}
              includeAboutUsCarousel={true}
              includeAboutUsTopSellers={true}
              includeAboutUsMediaVideo={true}
              aboutUsCarouselImages={images} 
              videoUrl={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
              userImageUrl='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'
              userImgSize={400} 
        />
     </>
    )
}