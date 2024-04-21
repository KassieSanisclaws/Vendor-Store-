import { useState, useEffect } from 'react';
import { useThemeMode } from '../main';
import PageLayout from '../Components/Page-Layout/pageLayout';
import { ButtonData, ReviewData, PieGraphData, RowData } from '../Components/Page-Layout/pageLayout';
import { Box, CircularProgress, Stack } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

interface BarGrpahData  {
    field: string;
    headerName: string;
    type?: string;
    description?: string;
    sortable?: boolean;
    valueGetter?: (value: any, row: any) => string;
}

export const About = () => {
    const { mode } = useThemeMode();
    const [loading, setLoading] = useState<boolean>(true);

    const data: PieGraphData[] = [
        { value: 5, label: 'A', width: 100, height: 100 },
        { value: 10, label: 'B', width: 100, height: 100 },
        { value: 15, label: 'C', width: 100, height: 100 },
        { value: 20, label: 'D', width: 100, height: 100 },
    ];

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID' },
        { field: 'firstName', headerName: 'First name' },
        { field: 'lastName', headerName: 'Last name' },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
           
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
          
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];

    const rows: RowData[] = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: '', age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

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
              userTypes='consumer'
              data={[]} 
              columns={[]} 
              rows={[]} 
              buttonsData={buttonsData} 
              reviews={[]}
              titleBox1='About Us'
              titleBox2='Store Items'
              titleBox3='Store Greetings'
              titleBox4='Store Reviews'
              titleBox5='Store Statistics'
              titleBox6='Store Profile'
              titleBox7='Store Settings'
              includeTitleBox1={true}
              includeTitleBox2={true}
              includeTitleBox3={true}
              includeTitleBox4={true}
              includeTitleBox5={true}
              includeTitleBox6={true}
              includeTitleBox7={true} 
              includeStoreReviews={true}
              includeBarGraph={true}
              includePieGraph={true} 
              includeVendorEmployeesTable={true}
              includeMessages={true} 
              includeButtonsActions={true}          
        
        />
     </>
    )
}