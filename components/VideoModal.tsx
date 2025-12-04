import React from 'react';
import type { Video } from '../types';
import { IconClose, IconExternalLink } from './Icons';

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

// Lista fija de videos por área, en el orden que indicaste
const AREA_VIDEO_LINKS: { label: string; url: string }[] = [
  { label: 'Administración', url: 'https://youtu.be/cy_Ypxo-7w4' },
  { label: 'Logística', url: 'https://youtu.be/iSuoD_NcvY0' },
  { label: 'RRHH', url: 'https://youtu.be/l2X3jqAtSrQ' },
  { label: 'Tecnología', url: 'https://youtu.be/CkUFUwujguM' },
  { label: 'Ventas', url: 'https://youtu.be/AA-bkuTa3yo' },
  { label: 'Gerencia', url: 'https://youtu.be/dsS9nuuBNQc' },
];

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
      <div
        id="video-modal"
        className={`modal flex flex-col ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        {/* Header del modal */}
        <div className="flex-shrink-0 flex justify-between items-center p-4 border-b border-brand-border">
          <h2
            id="video-modal-title"
            className="text-lg font-semibold text-brand-text"
          >
            {video.title}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition-colors"
            aria-label="Cerrar modal"
          >
            <IconClose className="h-6 w-6" />
          </button>
        </div>

        {/* Cuerpo del modal */}
        <div className="flex-grow p-4 overflow-y-auto">
          {/* Video principal */}
          <div className="aspect-video">
            <iframe
              id="video-iframe"
              src={embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-md"
            ></iframe>
          </div>

          {/* Botón para ver el video actual directamente en YouTube */}
          <div className="mt-4 text-right">
            <a
              id="youtube-link"
              href={video.shareUrl || embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-ghost py-2 px-4 text-sm"
            >
              <span>Ver en YouTube</span>
              <IconExternalLink className="h-4 w-4 ml-1.5" />
            </a>
          </div>

          {/* Descripción del video actual */}
          <div
            id="video-modal-description"
            className="mt-4 text-brand-text-secondary"
            dangerouslySetInnerHTML={{ __html: video.description }}
          ></div>

          {/* Bloque extra: enlaces fijos por área, en el orden que pediste */}
          <div className="mt-6 pt-4 border-t border-brand-border/70">
            <h3 className="text-sm font-semibold text-brand-text mb-3">
              Videos por área
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {AREA_VIDEO_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-brand-border/70 bg-muted/60 px-3 py-2 text-sm text-brand-text-secondary hover:text-brand-text hover:bg-muted transition-colors"
                >
                  <span>{item.label}</span>
                  <IconExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        id="modal-backdrop"
        onClick={onClose}
        className={`modal-backdrop ${isOpen ? 'open' : ''}`}
      ></div>
    </>
  );
};

export default VideoModal;

