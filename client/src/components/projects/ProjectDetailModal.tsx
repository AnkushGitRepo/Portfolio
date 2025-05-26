'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { useThemeColor } from '@/components/theme-color-context';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // We're using our own color cycling instead of directly using the theme context
  useThemeColor(); // Just to maintain consistency with other components
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define styles for different color themes
  const styles = [
    // Blue theme
    {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      light: 'bg-blue-100 text-blue-800',
      border: 'border-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700',
    },
    // Green theme
    {
      bg: 'bg-green-600',
      text: 'text-green-600',
      light: 'bg-green-100 text-green-800',
      border: 'border-green-200',
      button: 'bg-green-600 hover:bg-green-700',
    },
    // Purple theme
    {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      light: 'bg-purple-100 text-purple-800',
      border: 'border-purple-200',
      button: 'bg-purple-600 hover:bg-purple-700',
    },
    // Orange theme
    {
      bg: 'bg-orange-600',
      text: 'text-orange-600',
      light: 'bg-orange-100 text-orange-800',
      border: 'border-orange-200',
      button: 'bg-orange-600 hover:bg-orange-700',
    },
  ];

  // Set up color cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % styles.length);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, [styles.length]);

  // Get current style
  const currentStyle = styles[currentIndex];

  // For handling multiple images (assuming project.image could be a comma-separated string)
  const images = project.image ? project.image.split(',').map(img => img.trim()) : [getAssetPath('/images/projects/github-repo.jpg')];

  // Handle keyboard events (Escape to close, arrows for navigation)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, images.length]);

  // Prevent scrolling of the background when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className={`p-4 flex justify-between items-center transition-colors duration-500 ${currentStyle.bg}`}>
          <h2 className="text-xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content area with scrolling */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Image gallery */}
          <div className="relative mb-6 rounded-lg overflow-hidden bg-gray-100 h-64 md:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={images.length > 0 ? images[currentImageIndex] : getAssetPath('/images/projects/github-repo.jpg')}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain p-2"
                onError={(e) => {
                  // If image fails to load, replace with a fallback
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.src = getAssetPath('/images/projects/github-repo.jpg');
                }}
              />
            </div>

            {/* Image navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* GitHub repo indicator */}
          {project.githubUrl && project.githubUrl.includes('github.com') && (
            <div className="flex items-center gap-2 mb-4 text-gray-700">
              <Github size={16} />
              <span className="text-sm">GitHub Repository</span>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                className={`transition-colors duration-500 ${currentStyle.light}`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold mb-2 ${currentStyle.text} transition-colors duration-500`}>About this project</h3>
            <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
          </div>

          {/* Additional details could be added here */}
          {project.category && (
            <div className="mb-4">
              <h3 className={`text-lg font-semibold mb-2 ${currentStyle.text} transition-colors duration-500`}>Category</h3>
              <p className="text-gray-700">{project.category}</p>
            </div>
          )}

          {/* Created date */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold mb-2 ${currentStyle.text} transition-colors duration-500`}>Created</h3>
            <p className="text-gray-700">{new Date(project.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Footer with links */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${currentStyle.text} hover:bg-gray-100`}
              >
                <Github size={18} />
                <span>View Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md ${currentStyle.bg} text-white hover:opacity-90 transition-opacity transition-colors duration-500`}
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <Button
            onClick={onClose}
            variant="outline"
            className="text-gray-500"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
