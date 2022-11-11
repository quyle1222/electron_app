/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRef, useEffect } from 'react';
import './videoPlayer.css';

type PropVideoPlayer = {
  src: string;
  loop?: boolean;
  muted?: boolean | undefined;
};

const VideoPlayer = ({ src, loop, ...props }: PropVideoPlayer) => {
  const videoRef = createRef<HTMLVideoElement>();

  useEffect(() => {
    videoRef.current?.play();
  }, [videoRef]);

  useEffect(() => {}, []);
  return <video ref={videoRef} className="video" src={src} {...props} />;
};

export default VideoPlayer;
