import React from 'react';
import type { Video } from '../types';
import { IconClose, IconExternalLink } from './Icons';

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {

  if (!isOpen || !video) {
    return null;
  }
  
  const toEmbedUrl = (url: string) => {
      if (!url) return '';
      if (url.includes('youtube.com/embed/')) return url;
      const shortLinkMatch = url.match(/https?:\/\/(?:www\.)?youtu\.be\/([\w-]+)/);
      if (shortLinkMatch?.[1]) return `https://www.youtube.com/embed/${shortLinkMatch[1]}`;
      const watchLinkMatch = url.match(/https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([\w-]+)/);
      if (watchLinkMatch?.[1]) return `https://www.youtube.com/embed/${watchLinkMatch[1]}`;
      return url;
  };

  const embedUrl = toEmbedUrl(video.url);

  return (
    <>
      <div id="video-modal" className={`modal flex flex-col ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
        <div className="flex-shrink-0 flex justify-between items-center p-4 border-b border-brand-border">
          <h2 id="video-modal-title" className="text-lg font-semibold text-brand-text">{video.title}</h2>
          <button onClick={onClose} className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition-colors" aria-label="Cerrar modal">
            <IconClose className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          <div className="aspect-video">
            <iframe id="video-iframe" src={embedUrl} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen className="w-full h-full rounded-md"></iframe>
          </div>
          <div className="mt-4 text-right">
            <a id="youtube-link" href={video.shareUrl || embedUrl} target="_blank" rel="noopener noreferrer" className="button button-ghost py-2 px-4 text-sm">
              <span>Ver en YouTube</span>
              <IconExternalLink className="h-4 w-4 ml-1.5" />
            </a>
          </div>
          <div id="video-modal-description" className="mt-4 text-brand-text-secondary" dangerouslySetInnerHTML={{ __html: video.description }}></div>
        </div>
      </div>
      <div id="modal-backdrop" onClick={onClose} className={`modal-backdrop ${isOpen ? 'open' : ''}`}></div>
    </>
  );
};

export default VideoModal;
