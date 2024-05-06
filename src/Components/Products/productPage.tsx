import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../../main';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from "@mui/material/styles";
import { Container, Box, Grid, Typography, ListItem, ListItemText, Paper, Card, CardActionArea, CardMedia, Stack, Tooltip, CircularProgress, List, Avatar,
         Rating, IconContainerProps, Chip
 } from '@mui/material';
import { AttachMoney, MoneyOff, Map, CommentOutlined, SentimentVerySatisfiedOutlined, ReviewsOutlined, SentimentDissatisfied, SentimentVeryDissatisfied, SentimentVerySatisfied, SentimentSatisfied, SentimentSatisfiedAlt, ArrowBackIosNew  } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import TabComponentTwo from '../Tabs/tabComponentTwo';
import { BaseTable } from "../Table/baseTable";
import ColumnsHistory from "../../JsonData/dataStructures";
import RowsHistory from "../../JsonData/dataStructures";
import { ColumnHistory } from "../../Types/typeInterface";
import { ProductPageProps } from "../../Types/typeInterface";

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

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons: {
    [index: string]: {
        icon: React.ReactElement;
        label: string;
    };
} = {
    1: {
        icon: <SentimentVeryDissatisfied color="error" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfied color="error" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfied color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAlt color="success" />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfied color="success" />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

const ProductPage: React.FC<ProductPageProps> = ({
    images,
    name,
    price,
    reviews,
    greeting,
    description,
    greetingTitle,
    reviewTitle,
    descriptionTitle,
    priceWithoutTax,
    businessLocation,
    ratings,
    satisfactionRating,
    satisfactionRatingTitle,
}) => {
    const { mode } = useThemeMode();
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);
    // const { selectedItem } = useSelector((state: any) => state.product.selectedItem);
    const [isLoading, setLoading] = useState<boolean>(true);
    const columnsHistory = ColumnsHistory.ColumnsHistory;
    const rowsHistory = RowsHistory.RowsHistory;

    // useEffect(()=> {
    //     dispatch(());
    // },[]);

    useEffect(() => {
       const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <Container maxWidth="xl">
            <Grid container sx={{ height: "100%", width: "100%", }} spacing={3} mb={3}>
                <Chip
                   icon={<ArrowBackIosNew/>}
                   component={Link}
                   to="/"
                   sx={{ bgcolor: mode === "dark" ? "primary.light" : "primary.dark", cursor: "pointer", '&:hover': { cursor: "pointer", color: mode === "dark" ? "primary.dark" : "primary.light" }}}
                   label={<Typography variant="body1">Back To Results</Typography>}>
                </Chip>
                <Grid container item sx={{ width: "100%", height: "100%" }}>          
                    <Grid item sx={{ width: "50vw", height: "100%" }} xs={12} md={6}>
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
                        <Box sx={{ height: "100%", width: "100%", mt: 1, overflow: "hidden", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px" }}>
                            <Container sx={{ display: "flex", height: "100%", justifyContent: "center", padding: "10px" }}>
                                <Paper sx={{ width: '100%', height: "8vh", bgcolor: mode === "dark" ? "primary.dark" : "primary.light", borderRadius: "10px", display: "flex", justifyContent: "center",}}>
                            <ListItem>
                              <ListItemText primary={<><MoneyOff/> {priceWithoutTax}</>}/>
                            </ListItem> 
                            <ListItem>
                                <ListItemText primary={<><AttachMoney/> {price}</>}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={<><Map/> {businessLocation}</>}/>
                            </ListItem>
                           </Paper>
                        </Container>
                        </Box>
                        <Box sx={{ width: "100%", height: "100%", mt: 3, borderRadius: "20px", mb: 3 }}>
                                <Paper sx={{ width: '100%', height: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px", display: "flex", justifyContent: "center", padding: "10px", columnGap: 2 }}>
                                        <TabComponentTwo 
                                            tabs={[
                                                { 
                                                  icon: <SentimentVerySatisfiedOutlined />,
                                                  label: <Typography variant="subtitle1">
                                                            {greetingTitle}
                                                        </Typography>,
                                                    component: <Box sx={{ width: "100%", height: "100%", maxHeight: "40vh", overflow: "auto", scrollbarColor: mode === "dark" ? "#ECD3F0 #F5EBFF" : "#ECD3F0 #F5EBFF", scrollbarWidth: "thin", }}>
                                                                <Paper sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
                                                                    {greeting}  
                                                                </Paper>         
                                                             </Box>},
                                                { 
                                                  icon: <ReviewsOutlined />,
                                                  label: <Typography variant="subtitle1">
                                                                {reviewTitle}
                                                         </Typography>, 
                                                  component: <Box sx={{ width: "100%", height: "100%", maxHeight: "40vh", overflow: "auto", scrollbarColor: mode === "dark" ? "#ECD3F0 #F5EBFF" : "#ECD3F0 #F5EBFF", scrollbarWidth: "thin", }}>
                                                               <Paper sx={{ bgcolor: mode === "dark"  ? "primary.dark": "primary.light" }}>
                                                                 <List>    
                                                               {reviews.map((rev, indx) => (
                                                                 <ListItem key={indx} alignItems='flex-start'>
                                                                     <Avatar alt={`User ${indx + 1}`} src={`avatar-url-${indx + 1}`} />
                                                                     <ListItemText 
                                                                          primary={rev}
                                                                          secondary={
                                                                                  <>
                                                                                      <Rating key={indx} size="large" style={{ color: "#ffc107" }} value={ratings[0]} />
                                                                                      <Box sx={{ overflow: "hidden", maxHeight: "20vh" }}>
                                                                                      <StyledRating
                                                                                        name={`customized-color-${satisfactionRatingTitle}`}
                                                                                        defaultValue={satisfactionRating}
                                                                                        getLabelText={(value) => customIcons[value].label}
                                                                                        IconContainerComponent={IconContainer}
                                                                                        /> 
                                                                                      </Box>  
                                                                                 </>                                                                            
                                                                           } 
                                                                        />
                                                                 </ListItem>
                                                               ))}
                                                                </List>
                                                               </Paper>
                                                             </Box>
                                                },
                                                { 
                                                  icon: <CommentOutlined />,
                                                  label: <Typography variant="subtitle1">
                                                            {descriptionTitle}
                                                         </Typography>,
                                                    component: <Box sx={{ width: "100%", height: "100%", maxHeight: "40vh", overflow: "auto", scrollbarColor: mode === "dark" ? "#ECD3F0 #F5EBFF" : "#ECD3F0 #F5EBFF", scrollbarWidth: "thin", }}> 
                                                      <Paper sx={{ bgcolor: mode === "dark" ? "primary.dark" : "primary.light", height: "100%", width: "100%" }}>
                                                           {description.map((desc, index) => (
                                                             <ListItem key={index}>
                                                             <ListItemText primary={desc} />
                                                             </ListItem>
                                                             ))} 
                                                           </Paper>
                                                         </Box> 
                                                  },
                                              ]}
                                           />
                                    </Paper>
                             </Box>
                    </Grid>
                    <Grid item sx={{ width: "100%", height: "100%" }} xs={12} md={6}>
                        <Container sx={{ height: "100%", width: "100%" }}>      
                            <Box sx={{ overflow: "hidden" }}>        
                                    <Stack spacing={2}>           
                                        <ListItem>
                                       <Paper sx={{ width: '100%', height: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px", display: "flex", justifyContent: "center", padding: "10px", columnGap: 2 }}>       
                                        <Box width="100%" height="100%">
                                        <Paper sx={{ width: '100%', height: "100%", bgcolor: mode === "dark" ? "primary.dark" : "primary.light", borderRadius: "10px", padding: "20px"}}>
                                         <ListItem>
                                            <Typography variant="h4">{name}</Typography>
                                        </ListItem>   
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
                                             </Paper>
                                            </Box>
                                          </Paper>
                                        </ListItem>
                                        <ListItem>
                                        <Paper sx={{ width: '100%', height: "100%", bgcolor: mode === "dark" ? "primary.light" : "primary.dark", borderRadius: "10px", display: "flex", justifyContent: "center", padding: "10px", columnGap: 2 }}>
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
                                                    bgcolor: isLoading ? 'rgba(0, 0, 0, 0.5)' : "", //Semi-transparent background overlay
                                                    zIndex: isLoading ? 9999 : -1, // Ensure CircularProgress is above other content when loading
                                                }}>
                                                {isLoading && (
                                                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                                        <CircularProgress color="primary" />
                                                    </Stack>
                                                )}
                                            </Box>
                                            <Box sx={{ overflow: "hidden", width: "100%", height: "100%" }}>
                                                <Box sx={{
                                                      height: "55vh", 
                                                      overflow: "auto",
                                                    "&::-webkit-scrollbar-track": {
                                                        background: mode === "dark" ? "#AA98A9 #F5EBFF" : "#AA98A9 #F5EBFF", // Background color of the track
                                                    },
                                                    "&::-webkit-scrollbar-thumb": {
                                                        background: "#CF9FF", // Color of the scroll thumb
                                                        borderRadius: "10px", // Roundness of the scroll thumb
                                                    },
                                                    "&::-webkit-scrollbar-thumb:hover": {
                                                        background: "#AA98A9", // Color on hover
                                                    }, 
                                                      }}
                                                      >
                                                <Paper sx={{ width: '100%', bgcolor: mode === "dark" ? "primary.dark" : "primary.light", borderRadius: "10px", display: "flex", justifyContent: "center", padding: "8px"}}>
                                              <BaseTable
                                                 rows={rowsHistory}
                                                 columns={columnsHistory as ColumnHistory[]} 
                                                 isLoading={isLoading}
                                               />
                                               </Paper>
                                              </Box> 
                                            </Box>
                                            </Paper>
                                        </ListItem>
                                    </Stack>
                            </Box> 
                        </Container>
                    </Grid>
  
                </Grid>
            </Grid>
        </Container>
    );
}
export default ProductPage;
