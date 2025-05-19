'use client';

import { useState, useEffect, useMemo } from 'react';
import { Book } from '@/types';
import { useThemeColor } from '@/components/theme-color-context';
import BookDetailModal from './BookDetailModal';
import { Filter, X } from 'lucide-react';
import Image from 'next/image';

interface BooksPageClientProps {
  books: Book[];
}

// Define genre categories for filtering
type GenreCategory = 'All' | 'Business' | 'Self-Help' | 'Psychology' | 'Finance' | 'Technology' | 'Philosophy' | 'Communication';

export default function BooksPageClient({ books }: BooksPageClientProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentColor } = useThemeColor(); // Kept for consistency with other components
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeGenres, setActiveGenres] = useState<GenreCategory[]>(['All']);
  const [showFilters, setShowFilters] = useState(false);

  // Define genre mapping for filtering using useMemo to avoid recreation on each render
  const genreMapping = useMemo<Record<Exclude<GenreCategory, 'All'>, string[]>>(() => ({
    'Business': ['Business', 'Entrepreneurship', 'Marketing', 'Strategy'],
    'Self-Help': ['Self-Help', 'Personal Development', 'Motivation', 'Career'],
    'Psychology': ['Psychology', 'Communication'],
    'Finance': ['Finance', 'Investing', 'Personal Finance', 'Economics'],
    'Technology': ['Technology', 'Design'],
    'Philosophy': ['Philosophy', 'Spirituality', 'Religion', 'History'],
    'Communication': ['Communication']
  }), []);

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

  // Toggle genre filter
  const toggleGenre = (genre: GenreCategory) => {
    if (genre === 'All') {
      setActiveGenres(['All']);
      return;
    }

    // If 'All' is currently active and we're selecting a specific genre
    if (activeGenres.includes('All')) {
      setActiveGenres([genre]);
      return;
    }

    // Toggle the genre
    if (activeGenres.includes(genre)) {
      const newGenres = activeGenres.filter(g => g !== genre);
      // If no genres left, set to 'All'
      setActiveGenres(newGenres.length === 0 ? ['All'] : newGenres);
    } else {
      setActiveGenres([...activeGenres, genre]);
    }
  };

  // Filter books based on active genres
  const filteredBooks = useMemo(() => {
    if (activeGenres.includes('All')) {
      return books;
    }

    // Get all relevant genres that match the active filters
    const relevantGenres = activeGenres.flatMap(genre =>
      genre === 'All' ? [] : genreMapping[genre]
    );

    // Filter books that have at least one matching genre
    return books.filter(book => {
      if (!book.genre || book.genre.length === 0) return false;

      return book.genre.some(bookGenre =>
        relevantGenres.includes(bookGenre)
      );
    });
  }, [books, activeGenres, genreMapping]);

  const openBookDetails = (book: Book) => {
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  return (
      <section className={`py-20 bg-gradient-to-b ${currentStyle.bg} transition-colors duration-500 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${currentStyle.text} transition-colors duration-500`}>
            My Bookshelf
          </h1>
          <div className={`w-20 h-1 ${currentStyle.accent} mx-auto mt-4 mb-6 transition-colors duration-500`}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of books that have shaped my thinking and perspective. Click on any book to read my thoughts and takeaways.
          </p>
        </div>

        {/* Filter toggle button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${currentStyle.button} text-white transition-all duration-300 transform hover:scale-105`}
          >
            <Filter size={18} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Genre Filters */}
        {showFilters && (
          <div className="mb-8 animate-fadeIn">
            <div className="flex items-center justify-center mb-2">
              <Filter size={18} className="mr-2 text-gray-600" />
              <h2 className="text-lg font-medium text-gray-700">Filter by Genre</h2>
              {!activeGenres.includes('All') && (
                <span className="ml-2 text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                  {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
                </span>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['All', 'Business', 'Self-Help', 'Psychology', 'Finance', 'Technology', 'Philosophy', 'Communication'].map((genre) => (
                <button
                  key={genre}
                  className={`rounded-full text-sm py-1.5 px-3 border transition-colors duration-300 ${activeGenres.includes(genre as GenreCategory)
                    ? `${currentStyle.button} text-white`
                    : `border-gray-300 text-gray-700 hover:bg-gray-100`}`}
                  onClick={() => toggleGenre(genre as GenreCategory)}
                >
                  {genre}
                  {activeGenres.includes(genre as GenreCategory) && genre !== 'All' && (
                    <X size={14} className="ml-1 inline-block" />
                  )}
                </button>
              ))}
              {activeGenres.length > 1 && !activeGenres.includes('All') && (
                <button
                  className="rounded-full text-sm py-1.5 px-3 border border-gray-300 text-gray-700 hover:bg-gray-100 ml-2"
                  onClick={() => setActiveGenres(['All'])}
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        )}

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <div className="text-gray-500 mb-4">No books match the selected filters</div>
              <button
                className={`px-4 py-2 rounded-md ${currentStyle.button} text-white`}
                onClick={() => setActiveGenres(['All'])}
              >
                Show All Books
              </button>
            </div>
          ) : (
            // Use index to determine priority loading for first few images
            filteredBooks.map((book, index) => (
              <div
                key={book._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => openBookDetails(book)}
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    loading={index < 6 ? 'eager' : 'lazy'}
                    priority={index < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-2 bg-white border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 truncate">{book.title}</h3>
                  <p className="text-sm text-gray-600 truncate">{book.author}</p>
                </div>
                <div className="px-3 pb-3">
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {book.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
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
            ))
          )}
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
