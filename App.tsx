
import React, { useState, useEffect } from 'react';
import type { Video } from './types';
import { initializeAi } from './services/geminiService';

import Preloader from './components/Preloader';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Impact from './components/Impact';
import Cta from './components/Cta';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return (savedTheme === 'dark' || (!savedTheme && prefersDark)) ? 'dark' : 'light';
        }
        return 'light';
    });
    
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    useEffect(() => {
        initializeAi();
        
        const timer = setTimeout(() => setIsLoading(false), 500); // Small delay to prevent flicker
        // Failsafe to hide preloader if load event is blocked
        const failsafeTimer = setTimeout(() => setIsLoading(false), 2000);
        
        return () => {
            clearTimeout(timer);
            clearTimeout(failsafeTimer);
        };
    }, []);

    useEffect(() => {
        document.documentElement.dataset.mode = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const handleVideoSelect = (video: Video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVideo(null);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isModalOpen]);

    return (
        <>
            <Preloader isVisible={isLoading} />
            <Header theme={theme} onThemeToggle={handleThemeToggle} />
            <main>
                <Ticker />
                <Hero />
                <Pillars />
                <Services onVideoSelect={handleVideoSelect} />
                <Benefits />
                <Impact />
                <Cta />
            </main>
            <Footer />
            <VideoModal video={selectedVideo} isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default App;
