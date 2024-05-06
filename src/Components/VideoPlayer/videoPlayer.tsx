import ReactPlayer from 'react-player';
import { Box } from '@mui/material';

export const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
    return (
        <Box 
           sx={{
              overflow: "hidden",
              height: "100%",
              width: "100%",
           }}>
        <ReactPlayer
            url={videoUrl}
            width='100%'
            height='100%'
            controls={true}
          />
       </Box>
    )
};