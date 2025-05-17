'use client';

import { useState, useEffect, useCallback } from 'react';
import { Certification } from '@/types';
import { useThemeColor } from '@/components/theme-color-context';
import { X, Award, ExternalLink } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface CertificationDetailModalProps {
  certification: Certification;
  onClose: () => void;
}

export default function CertificationDetailModal({
  certification,
  onClose,
}: CertificationDetailModalProps) {
  const { } = useThemeColor(); // Using our own color cycling
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  // Define styles matching HeroSection.tsx
  const styles = [
    {
      bg: 'from-blue-50 to-blue-100',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      profileBg: 'bg-blue-200',
      profileText: 'text-blue-800',
      border: 'border-blue-200',
    },
    {
      bg: 'from-green-50 to-green-100',
      text: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      profileBg: 'bg-green-200',
      profileText: 'text-green-800',
      border: 'border-green-200',
    },
    {
      bg: 'from-purple-50 to-purple-100',
      text: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      profileBg: 'bg-purple-200',
      profileText: 'text-purple-800',
      border: 'border-purple-200',
    },
    {
      bg: 'from-orange-50 to-orange-100',
      text: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      profileBg: 'bg-orange-200',
      profileText: 'text-orange-800',
      border: 'border-orange-200',
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

  // Handle close with animation
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  }, [onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleClose]);

  // Prevent scrolling of the background when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 ${currentStyle.text.replace('text-', 'bg-')}/10`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden transition-all duration-300 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 bg-gradient-to-r ${currentStyle.bg}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full ${currentStyle.profileBg} flex items-center justify-center mr-4`}>
                <Award className={currentStyle.text} size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{certification.title}</h2>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Certification Image */}
          <div className="mb-6 relative h-64 md:h-80 w-full bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-3 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
            </div>
            <img
              src={getAssetPath(certification.image)}
              alt={certification.title}
              className="absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-500"
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.opacity = '1';
                console.log(`Modal image loaded: ${certification.title}`);
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.log(`Modal image error: ${certification.title}`);
                target.onerror = null; // Prevent infinite loop
                target.src = getAssetPath('/placeholder.svg');
              }}
              style={{ opacity: 0 }} // Start with opacity 0
            />
          </div>

          {/* Issuer & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className={`${currentStyle.text} font-medium mb-2`}>Issuer</h3>
              <p className="text-gray-800">{certification.issuer}</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className={`${currentStyle.text} font-medium mb-2`}>Date</h3>
              <p className="text-gray-800">
                {formatDate(certification.issueDate)}
                {certification.expirationDate && (
                  <span className="text-gray-500"> - {formatDate(certification.expirationDate)}</span>
                )}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className={`${currentStyle.text} text-lg font-medium mb-3`}>Description</h3>
            <div className="text-gray-700 space-y-4">
              {certification.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Skills */}
          {certification.skills && certification.skills.length > 0 && (
            <div className="mb-6">
              <h3 className={`${currentStyle.text} text-lg font-medium mb-3`}>Skills</h3>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill, index) => (
                  <Badge key={index} className={`${currentStyle.profileBg} ${currentStyle.profileText} border-none`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex gap-2">
            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md ${currentStyle.button} text-white font-medium hover:opacity-90 transition-all duration-300 shadow-sm hover:shadow transform hover:scale-105`}
                aria-label="Verify this certificate"
              >
                <ExternalLink size={18} />
                <span>Verify Certificate</span>
              </a>
            )}
          </div>
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
