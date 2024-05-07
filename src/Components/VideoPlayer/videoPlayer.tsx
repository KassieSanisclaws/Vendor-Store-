import ReactPlayer from 'react-player';

export const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
    return (  
        <ReactPlayer
            url={videoUrl}
            width='100%'
            height='100%'
            controls={true}
          />
    )
};