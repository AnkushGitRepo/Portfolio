'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Book } from '@/types';
import { useThemeColor } from '@/components/theme-color-context';
import { X, ExternalLink } from 'lucide-react';

interface BookDetailModalProps {
  book: Book;
  onClose: () => void;
}

export default function BookDetailModal({ book, onClose }: BookDetailModalProps) {
  // We're using our own color cycling instead of directly using the theme context
  useThemeColor(); // Just to maintain consistency with other components
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

  // Cycle through colors
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % styles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [styles.length]);

  const currentStyle = styles[currentIndex];



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className={`p-4 flex justify-between items-center transition-colors duration-500 ${currentStyle.bg}`}>
          <h2 className="text-xl font-bold text-white">{book.title}</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Book cover */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src={book.coverImage || book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>


            </div>

            {/* Book details */}
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-1 text-gray-900">{book.title}</h3>
              <p className="text-lg text-gray-600 mb-4">by {book.author}</p>

              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-2 ${currentStyle.text} transition-colors duration-500`}>
                  Summary
                </h4>
                <p className="text-gray-700">{book.description}</p>
              </div>

              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-2 ${currentStyle.text} transition-colors duration-500`}>
                  My Review
                </h4>
                <p className="text-gray-700">{book.review}</p>
              </div>

              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-2 ${currentStyle.text} transition-colors duration-500`}>
                  Genres
                </h4>
                <div className="flex flex-wrap gap-2">
                  {book.genre?.map((genre, index) => (
                    <span
                      key={index}
                      className={`${currentStyle.light} text-sm px-3 py-1 rounded-full transition-colors duration-500`}
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with links */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex gap-4">
            {book.goodreadsLink && (
              <a
                href={book.goodreadsLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md ${currentStyle.bg} text-white hover:opacity-90 transition-opacity transition-colors duration-500`}
              >
                <ExternalLink size={18} />
                <span>Goodreads</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
