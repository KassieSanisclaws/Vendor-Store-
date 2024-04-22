import { Avatar, Box } from '@mui/material';

export const DisplayPicture = ({ userImageUrl, size }: { userImageUrl: string, size: number }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
             <Avatar 
                  src={userImageUrl}
                  alt="Display Picture"
                  sx={{ width: size, height: size }}
                  />
        </Box>
    )
};