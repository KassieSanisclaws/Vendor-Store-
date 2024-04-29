import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CarouselComponent } from '../Components/Carousel/carousel';
import { useThemeMode } from '../main';
import { Container, Box, Grid, CssBaseline, ImageListItemBar, IconButton, CircularProgress, Stack } from '@mui/material';
import { Info } from '@mui/icons-material';
import ItemDataSample from "../JsonData/dataStructures";
import '../App.css';

export const MainIndex = () => {
    const { mode } = useThemeMode();
    const dispatch = useDispatch();
    const itemData = ItemDataSample.ItemDataSample;
    const [loading, setLoading] = useState(true);
    // const { setSelectedItem } = useSelector((state: any) => state.product);

const handleItemClick = (id: number) => {
    // Redirect to the product page with the corresponding id
        const selectedItem = itemData.find(item => item.id === id);
        // dispatch(setSelectedItem(selectedItem));
            console.log(selectedItem);
           };

   useEffect(() => {
      const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
     return () => clearTimeout(timer); 
    }, [])

return (
    <Container maxWidth="xl" sx={{ height: "100%", mt: 3, mb: 6 }}>    
        <Box sx={{ height: "100%" }}>
            <Container sx={{ bgcolor: mode === "dark" ? "primary.light" : "primary.dark", height: "90vh", padding: "40px", width: "100%", overflow: "hidden", paddingBlock: "40px", borderRadius: "15px" }}>
                <CssBaseline />
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
                               }}>
                         {loading && (
                            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                              <CircularProgress color="primary" />
                            </Stack>
                              )}
                          </Box>
                <Box sx={{ height: "35vh", width: "100%", overflow: "hidden", borderRadius: "10px" }}>
                    <CarouselComponent images={itemData.map(item => item.img)} />
                </Box>
                <Box sx={{ width: "100%", flexGrow: 1, position: "relative", top: "1.5rem", }}>
                    <Container sx={{ height: "50vh", padding: "40px", width: "100%", overflow: "hidden", paddingBlock: "40px", borderRadius: "15px", overflowY: "auto", scrollbarColor: mode === "dark" ? "#ECD3F0 #F5EBFF" : "#ECD3F0 #F5EBFF", scrollbarWidth: "thin", }}>     
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {itemData.map((itm, indx) => (
                                <Grid item xs={3} sm={4} key={indx}>
                                   <Link to={`/product/${indx + 1}`}>
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
                                    </Link>
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