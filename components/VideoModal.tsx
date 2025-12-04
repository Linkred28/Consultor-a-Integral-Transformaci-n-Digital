import React, { useEffect, useState } from 'react';
import type { Video } from '../types';
import { IconClose, IconExternalLink } from './Icons';

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

// Lista fija de videos por área
const AREA_VIDEOS: { id: string; label: string; url: string }[] = [
  { id: 'administracion', label: 'Administración', url: 'https://youtu.be/cy_Ypxo-7w4' },
  { id: 'logistica',      label: 'Logística',      url: 'https://youtu.be/iSuoD_NcvY0' },
  { id: 'rrhh',           label: 'RRHH',           url: 'https://youtu.be/l2X3jqAtSrQ' },
  { id: 'tecnologia',     label: 'Tecnología',     url: 'S' },
  { id: 'ventas',         label: 'Ventas',         url: 'https://youtu.be/AA-bkuTa3yo' },
  { id: 'gerencia',       label: 'Gerencia',       url: 'https://youtu.be/dsS9nuuBNQc' },
];

const toEmbedUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;

  const shortLinkMatch = url.match(/https?:\/\/(?:www\.)?youtu\.be\/([\w-]+)/);
  if (shortLinkMatch?.[1]) {
    return `https://www.youtube.com/embed/${shortLinkMatch[1]}`;
  }

  const watchLinkMatch = url.match(
    /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([\w-]+)/
  );
  if (watchLinkMatch?.[1]) {
    return `https://www.youtube.com/embed/${watchLinkMatch[1]}`;
  }

  return url;
};

const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {
  // Estado local para el video que realmente se muestra en el iframe
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [currentEmbedUrl, setCurrentEmbedUrl] = useState<string>('');
  const [currentShareUrl, setCurrentShareUrl] = useState<string>('');

  // Cuando abres el modal o cambias de video desde la sección Servicios
  useEffect(() => {
    if (video && isOpen) {
      const baseEmbed = toEmbedUrl(video.url);
      setCurrentTitle(video.title);
      setCurrentEmbedUrl(baseEmbed);
      setCurrentShareUrl(video.shareUrl || video.url || baseEmbed);
    }
  }, [video, isOpen]);

  if (!isOpen || !video) {
    return null;
  }

  const handleAreaClick = (area: { id: string; label: string; url: string }) => {
    const embed = toEmbedUrl(area.url);
    setCurrentTitle(area.label);
    setCurrentEmbedUrl(embed);
    setCurrentShareUrl(area.url); // link directo a YouTube
  };

  const isAreaActive = (area: { id: string; label: string; url: string }) =>
    currentShareUrl === area.url;

  return (
    <>
      <div
        id="video-modal"
        className={`modal flex flex-col ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        {/* Header */}
        <div className="flex-shrink-0 flex justify-between items-center p-4 border-b border-brand-border">
          <h2
            id="video-modal-title"
            className="text-lg font-semibold text-brand-text"
          >
            {currentTitle || video.title}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-brand-text-secondary hover:bg-brand-border hover:text-brand-text transition-colors"
            aria-label="Cerrar modal"
          >
            <IconClose className="h-6 w-6" />
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-grow p-4 overflow-y-auto">
          {/* Video principal */}
          <div className="aspect-video">
            <iframe
              id="video-iframe"
              src={currentEmbedUrl}
              title={currentTitle || video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-md"
            ></iframe>
          </div>

          {/* Botón Ver en YouTube */}
          <div className="mt-4 text-right">
            <a
              id="youtube-link"
              href={currentShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-ghost py-2 px-4 text-sm inline-flex items-center"
            >
              <span>Ver en YouTube</span>
              <IconExternalLink className="h-4 w-4 ml-1.5" />
            </a>
          </div>

          {/* Descripción original del video (la que venga de `video.description`) */}
          <div
            id="video-modal-description"
            className="mt-4 text-brand-text-secondary"
            dangerouslySetInnerHTML={{ __html: video.description }}
          ></div>

          {/* Bloque de videos por área */}
          <div className="mt-6 border-t border-brand-border pt-4">
            <h3 className="text-sm font-semibold text-brand-text mb-3">
              Videos por área
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {AREA_VIDEOS.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => handleAreaClick(area)}
                  className={
                    'w-full flex items-center justify-between rounded-lg border px-3 py-2 text-sm transition ' +
                    (isAreaActive(area)
                      ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
                      : 'border-brand-border text-brand-text-secondary hover:border-brand-primary/70 hover:bg-brand-bg-secondary')
                  }
                >
                  <span>{area.label}</span>
                  <IconExternalLink className="h-4 w-4" />
                </button>
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
