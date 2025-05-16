'use client';

import { useState, useEffect } from 'react';
import { Book } from '@/types';
import { useThemeColor } from '@/components/theme-color-context';
import BookDetailModal from './BookDetailModal';
import { BookOpen, Star } from 'lucide-react';
import Image from 'next/image';

interface BooksPageClientProps {
  books: Book[];
}

export default function BooksPageClient({ books }: BooksPageClientProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentColor } = useThemeColor(); // Kept for consistency with other components
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define styles for different color themes
  const styles = [
    // Blue theme
    {
      bg: 'from-blue-50 to-blue-100',
      accent: 'bg-blue-600',
      text: 'text-blue-600',
      light: 'bg-blue-100 text-blue-800',
      border: 'border-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700',
      gradient: 'from-blue-600 to-blue-800',
    },
    // Green theme
    {
      bg: 'from-green-50 to-green-100',
      accent: 'bg-green-600',
      text: 'text-green-600',
      light: 'bg-green-100 text-green-800',
      border: 'border-green-200',
      button: 'bg-green-600 hover:bg-green-700',
      gradient: 'from-green-600 to-green-800',
    },
    // Purple theme
    {
      bg: 'from-purple-50 to-purple-100',
      accent: 'bg-purple-600',
      text: 'text-purple-600',
      light: 'bg-purple-100 text-purple-800',
      border: 'border-purple-200',
      button: 'bg-purple-600 hover:bg-purple-700',
      gradient: 'from-purple-600 to-purple-800',
    },
    // Orange theme
    {
      bg: 'from-orange-50 to-orange-100',
      accent: 'bg-orange-600',
      text: 'text-orange-600',
      light: 'bg-orange-100 text-orange-800',
      border: 'border-orange-200',
      button: 'bg-orange-600 hover:bg-orange-700',
      gradient: 'from-orange-600 to-orange-800',
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

  const openBookDetails = (book: Book) => {
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  return (
    <section className={`py-20 bg-gradient-to-b ${currentStyle.bg} transition-colors duration-500 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${currentStyle.text} transition-colors duration-500`}>
            My Bookshelf
          </h1>
          <div className={`w-20 h-1 ${currentStyle.accent} mx-auto mt-4 mb-6 transition-colors duration-500`}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of books that have shaped my thinking and perspective. Click on any book to read my thoughts and takeaways.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openBookDetails(book)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentStyle.gradient} opacity-70`}></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <div className="flex items-center mb-2">
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">
                      {book.publishedYear}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p className="text-sm opacity-90">{book.author}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < (book.rating || 0)
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {book.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.genre?.slice(0, 3).map((genre, index) => (
                    <span
                      key={index}
                      className={`${currentStyle.light} text-xs px-2 py-1 rounded-full transition-colors duration-500`}
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          onClose={closeBookDetails}
        />
      )}
    </section>
  );
}
