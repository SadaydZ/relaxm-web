import React from 'react';
import { X } from 'lucide-react';

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ isOpen, onClose }) => {
  const isMobile = window.innerWidth <= 768;
  const videoUrl = isMobile
    ? "https://player.vimeo.com/video/1084732344?h=19e84d4cdd&autoplay=1" // Vertical video
    : "https://player.vimeo.com/video/1084730910?h=77fc87c950&autoplay=1"; // Horizontal video

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className={`relative ${isMobile ? 'w-full h-full' : 'w-[85%] aspect-video'}`}>
        {!isMobile && (
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 p-2 text-white hover:text-purple-400 transition-colors"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>
        )}
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        {isMobile && (
          <button
            onClick={onClose}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-purple-600/80 backdrop-blur-sm text-white rounded-full hover:bg-purple-500 transition-colors flex items-center gap-2"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
            <span>Cerrar</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;