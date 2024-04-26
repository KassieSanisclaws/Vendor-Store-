import { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';
import { BaseTable } from '../Table/baseTable';
import { ColumnHistory } from '../../Types/typeInterface';
import RowsHistory  from "../../JsonData/dataStructures";
import ColumnsHistory from "../../JsonData/dataStructures";

export const TablePage = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const rowsHistory = RowsHistory.RowsHistory;
    const columnsHistory = ColumnsHistory.ColumnsHistory;

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
            <BaseTable
                 columns={columnsHistory as ColumnHistory[]}
                 rows={rowsHistory}
                 isLoading={loading} 
              />
        </>
    );
};