import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../../main';
import { styled } from "@mui/material/styles";
import { Container, Box, Grid, Typography, Button, List, ListItem, ListItemText, Paper, Card, CardActionArea, CardMedia, Stack, Tooltip
 } from '@mui/material';
import { Star } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

export interface ProductPageProps {
    images: string[];
    productName: string;
    price: string;
    description: string[];
    descriptionTitle: string;
    toolsRequired: string;
    priceWithoutTax: string;
    deliveryEstimate: string;
}

const ProSpan = styled('span')({
    display: 'inline-block',
    height: '1em',
    width: '1em',
    verticalAlign: 'middle',
    marginLeft: '0.3em',
    marginBottom: '0.08em',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});

function Label({
    componentName,
    valueType,
    isProOnly,
}: {
    componentName: string;
    valueType: string;
    isProOnly?: boolean;
}) {
    const content = (
        <span>
            <strong>{componentName}</strong> for {valueType} editing
        </span>
    );

    if (isProOnly) {
        return (
            <Stack direction="row" spacing={0.5} component="span">
                <Tooltip title="Included on Pro package">
                    <a
                        href="https://mui.com/x/introduction/licensing/#pro-plan"
                        aria-label="Included on Pro package"
                    >
                        <ProSpan />
                    </a>
                </Tooltip>
                {content}
            </Stack>
        );
    }

    return content;
}

const ProductPage: React.FC<ProductPageProps> = ({
    images,
    productName,
    price,
    description,
    descriptionTitle,
    toolsRequired,
    priceWithoutTax,
    deliveryEstimate,
}) => {
    const { mode } = useThemeMode();
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);
    return (
        <Container maxWidth="xl">
            <Grid container sx={{ height: "100%", width: "100%", border: "3px solid #crimson" }} spacing={3} mb={3}>
                <Grid item container sx={{ height: "100%", width: "100%", border: "3px solid #violet" }} xs={12}>
                    <Link to="/"><Typography variant="body1">Back To Results</Typography></Link>
                </Grid>
                <Grid container item sx={{ width: "100%", height: "100%" }}>          
                    <Grid item sx={{ width: "50vw", height: "100%", border: "3px solid teal", }} xs={12} md={6}>
                        <Box sx={{ overflow: "hidden" }}>
                            <Paper sx={{ width: '100%', bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", display: "flex", justifyContent: "center", padding: "10px",columnGap: 2 }}>
                                {images.map((image, index) => (
                                    <Card sx={{ width: 200 }} key={index}>
                                        <CardActionArea onClick={() => setSelectedImage(image)}>
                                            <CardMedia
                                                component="img"
                                                height="165"
                                                image={image}
                                                alt={`Product Image ${index}`}
                                            />
                                        </CardActionArea>
                                    </Card>
                                ))}  
                            </Paper>
                        </Box>
                        <Box sx={{ overflow: "hidden" }}>
                           {selectedImage && (
                              <img src={selectedImage} alt="Selected Product" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                            )}
                        </Box>

                        <Box sx={{ width: "100%", height: "100%", border: "3px solid black", mt: 4 }}>
                        <List>
                            <ListItem>
                                <ListItemText primary={`Price Without Tax Here: ${priceWithoutTax}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`Delivery Arrival Estimate Here: ${deliveryEstimate}`} />
                            </ListItem>
                            {description.map((desc, index) => (
                                             <ListItem key={index}>
                                             <ListItemText primary={desc} />
                                             </ListItem>
                                          ))}
                            <ListItem>
                                <Button variant="contained" color="primary">Add To Cart</Button>
                            </ListItem>
                            <ListItem>
                                <Button variant="contained" color="primary">Buy Now</Button>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="List Item Here:" />
                            </ListItem>
                             <Star />
                        </List>
                    </Box>
                    </Grid>

                    <Grid item sx={{ border: "3px solid green", width: "100%", height: "100%" }} xs={12} md={6}>
                        <Container sx={{ height: "100%", width: "100%" }}>      
                            <Box sx={{ overflow: "hidden" }}>    
                                <Paper sx={{ width: '100%', height: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px", display: "flex", justifyContent: "center", padding: "10px", columnGap: 2 }}>
                                    <Stack spacing={2}>           
                                        <ListItem>
                                            <Typography variant="h4">{productName}</Typography>
                                        </ListItem>
                                        {/* <ListItemText>
                                            <Typography variant="h3">{descriptionTitle}</Typography>
                                        </ListItemText> */}
                                        <ListItem>
                                            <Box width="100%">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer
                                                    components={[
                                                        'DatePicker',
                                                        'TimePicker',
                                                        'DateTimePicker',
                                                        'DateRangePicker',
                                                    ]}
                                                >
                                                    <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
                                                        <DatePicker />
                                                    </DemoItem>
                                                    <DemoItem label={<Label componentName="TimePicker" valueType="time" />}>
                                                        <TimePicker />
                                                    </DemoItem>
                                                    <DemoItem
                                                        label={<Label componentName="DateTimePicker" valueType="date time" />}
                                                    >
                                                        <DateTimePicker />
                                                    </DemoItem>
                                                    <DemoItem
                                                        label={
                                                            <Label
                                                                componentName="DateRangePicker"
                                                                valueType="date range"
                                                                isProOnly
                                                            />
                                                        }
                                                        component="DateRangePicker"
                                                    >
                                                        <DateRangePicker
                                                            localeText={{
                                                                start: '',
                                                                end: '',
                                                            }}
                                                        />
                                                    </DemoItem>
                                                </DemoContainer>
                                            </LocalizationProvider>
                                            </Box>
                                        </ListItem>
                                        <ListItem sx={{ border: "3px solid red", width: "35vw", height: "50vh" }}>
                                            Table of services cost
                                        </ListItem>
                                        <ListItem>
                                           <ListItemText primary={`Tools Required To Build Here: ${toolsRequired}`} />
                                        </ListItem>
                                         <ListItemText primary={price} secondary="Price + Shipping Here" />
                                    </Stack>
                                </Paper>
                            </Box> 
                        </Container>
                    </Grid>
  
                </Grid>
            </Grid>
        </Container>
    );
}
export default ProductPage;
