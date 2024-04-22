import ReactPlayer from 'react-player';

export const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
    return (
        <ReactPlayer
            url={videoUrl}
            width='8vw'
            height='22vh'
            controls={true}
        />
    )
};