import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.volume = 0.15; // Set volume to 50%
    }
  }, [src]);

  if (isYouTubeUrl(src)) {
    return (
      <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
        <iframe
          className="w-full h-full"
          src={getYouTubeEmbedUrl(src)}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {title && (
          <div className="bg-gray-900 p-3">
            <p className="text-sm text-gray-300">{title}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-xl">
      <video
        ref={videoRef}
        controls
        poster={poster}
        className="w-full"
        preload="metadata"
        onError={(e) => {
          console.error('Video error:', e);
          const videoElement = e.target as HTMLVideoElement;
          console.log('Video source:', videoElement.currentSrc);
        }}
      >
        <source 
          src={src} 
          type="video/mp4"
          onError={(e) => console.error('Source error:', e)} 
        />
        Your browser does not support the video tag.
      </video>
      {title && (
        <div className="bg-gray-900 p-3">
          <p className="text-sm text-gray-300">{title}</p>
        </div>
      )}
    </div>
  );
}
