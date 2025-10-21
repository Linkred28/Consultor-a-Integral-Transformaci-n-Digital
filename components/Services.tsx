
import React from 'react';
import type { Video } from '../types';
import { videos } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { IconPlay } from './Icons';

interface ServicesProps {
  onVideoSelect: (video: Video) => void;
}

// FIX: Defined a props interface for VideoTile and typed it as a React.FC to resolve issues with the 'key' prop.
interface VideoTileProps {
  video: Video;
  onVideoSelect: (video: Video) => void;
}

const VideoTile: React.FC<VideoTileProps> = ({ video, onVideoSelect }) => {
  const imageUrl = video.imageUrl || `https://picsum.photos/id/${video.imageId}/600/400`;
  
  return (
    <div
      className="video-tile"
      onClick={() => onVideoSelect(video)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onVideoSelect(video)}
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
    >
      <div className="video-tile-image-wrapper">
        <img src={imageUrl} alt={video.title} loading="lazy" className="aspect-video object-cover" />
        <div className="video-tile-overlay">
          <div className="play-icon">
            <IconPlay className="h-10 w-10 text-white" />
          </div>
        </div>
      </div>
      <div className="meta">
        <h3 className="title text-brand-text">{video.title}</h3>
        <p className="desc">{video.benefit}</p>
      </div>
    </div>
  );
};

const Services = ({ onVideoSelect }: ServicesProps) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section id="servicios" className="py-20 bg-brand-bg/50">
            <div ref={ref} className={`container mx-auto px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <div className="text-center mb-12">
                    <div className="section-title-container">
                        <h2 className="text-3xl md:text-4xl font-bold">Servicios Integrales y Transversales</h2>
                    </div>
                    <p className="text-xl md:text-2xl text-brand-text-secondary max-w-4xl mx-auto">
                        Descubre en video cómo conducimos la transformación corporativa con precisión, método y visión estratégica
                    </p>
                </div>
                <div id="video-grid" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'stagger-children is-visible' : ''}`}>
                    {videos.map(video => (
                        <VideoTile key={video.id} video={video} onVideoSelect={onVideoSelect} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;