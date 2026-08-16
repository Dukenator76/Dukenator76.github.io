import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  caption?: string;
}

const isYouTubeUrl = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');

const getYouTubeEmbedUrl = (url: string) => {
  const youtubeRegex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(youtubeRegex);
  // youtube-nocookie.com avoids setting tracking cookies for visitors
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : url;
};

export default function VideoPlayer({ src, poster, title, caption }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [src]);

  const label = caption || title;

  if (isYouTubeUrl(src)) {
    return (
      <figure className="overflow-hidden rounded-2xl border border-gray-800 shadow-xl">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={getYouTubeEmbedUrl(src)}
            title={title || 'Project video'}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        {label && (
          <figcaption className="border-t border-gray-800 bg-gray-900/80 px-4 py-3 text-sm text-gray-400">
            {label}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="overflow-hidden rounded-2xl border border-gray-800 shadow-xl">
      {/* No autoplay — playback is always user-initiated, with controls and a poster frame. */}
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={title || 'Project video'}
        // Hides the download button in the browser's native control bar.
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        className="w-full bg-gray-950"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {label && (
        <figcaption className="border-t border-gray-800 bg-gray-900/80 px-4 py-3 text-sm text-gray-400">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
