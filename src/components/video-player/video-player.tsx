import { useEffect, useRef } from 'react';
import { TimeoutPlayer } from 'src/constants';

type Props = {
    src: string,
    preview: string
}

export function VideoPlayer(props: Props) {
  const { src, preview } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, TimeoutPlayer);
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={preview}
      className="player__video"
      loop
      muted
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

