"use client";

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoSection: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const playerRef = useRef<any>(null);

  // Playlist of Vimeo videos
  const videoPlaylist = [
    {
      id: 1,
      title: 'Conelli Engineering: Building Nigeria\'s Future',
      url: 'https://vimeo.com/76979871',
      thumbnail: 'https://placehold.co/1200x675/e2e8f0/64748b?text=Engineering+Excellence'
    },
    {
      id: 2,
      title: 'Infrastructure Development Projects',
      url: 'https://vimeo.com/76979871',
      thumbnail: 'https://placehold.co/1200x675/e2e8f0/64748b?text=Infrastructure+Projects'
    },
    {
      id: 3,
      title: 'Sustainable Construction Practices',
      url: 'https://vimeo.com/76979871',
      thumbnail: 'https://placehold.co/1200x675/e2e8f0/64748b?text=Sustainable+Construction'
    }
  ];

  const currentVideo = videoPlaylist[currentVideoIndex];

  const handlePlayPause = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    // Auto-advance to next video if available
    if (currentVideoIndex < videoPlaylist.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setIsPlaying(true);
    } else {
      // Loop back to first video
      setCurrentVideoIndex(0);
      setIsPlaying(false);
      setHasStarted(false);
    }
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (currentVideoIndex < videoPlaylist.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setIsPlaying(true);
    }
  };

  return (
    <AnimatedSection>
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Experience Our Engineering Excellence
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-slate-600">
              Discover how Conelli Engineering transforms visions into reality through innovative 
              construction and engineering solutions across Nigeria.
            </p>
          </div>

          {/* Video Player Container */}
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              <ReactPlayer
                ref={playerRef}
                url={currentVideo.url}
                playing={isPlaying && hasStarted}
                light={!hasStarted ? currentVideo.thumbnail : false}
                width="100%"
                height="100%"
                controls={false}
                onEnded={handleVideoEnd}
                config={{
                  vimeo: {
                    playerOptions: {
                      title: false,
                      byline: false,
                      portrait: false,
                    }
                  }
                }}
              />

              {/* Custom Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Video Title */}
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {currentVideo.title}
                  </h3>

                  {/* Control Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Previous Button */}
                      <button
                        onClick={handlePrevious}
                        disabled={currentVideoIndex === 0}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous video"
                      >
                        <SkipBack size={20} className="text-white" />
                      </button>

                      {/* Play/Pause Button */}
                      <button
                        onClick={handlePlayPause}
                        className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? (
                          <Pause size={24} className="text-white" />
                        ) : (
                          <Play size={24} className="text-white ml-1" />
                        )}
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={handleNext}
                        disabled={currentVideoIndex === videoPlaylist.length - 1}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next video"
                      >
                        <SkipForward size={20} className="text-white" />
                      </button>
                    </div>

                    {/* Video Counter */}
                    <div className="text-white text-sm">
                      {currentVideoIndex + 1} / {videoPlaylist.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Playlist Navigation */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-slate-900">Video Playlist</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {videoPlaylist.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => {
                    setCurrentVideoIndex(index);
                    setIsPlaying(true);
                    setHasStarted(true);
                  }}
                  className={`text-left p-4 rounded-lg transition-colors ${
                    index === currentVideoIndex
                      ? 'bg-slate-800 text-white'
                      : 'bg-white hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index === currentVideoIndex ? 'bg-white text-slate-800' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="font-medium">{video.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default VideoSection;