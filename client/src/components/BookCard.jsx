import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookCard = ({ book }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[320px] cursor-pointer perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl border border-white/10">
                    <img
                        src={book.coverImage || 'https://via.placeholder.com/200x320?text=Book+Cover'}
                        alt={book.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-4">
                        <h3 className="text-lg font-bold text-white leading-tight">{book.title}</h3>
                        <p className="text-sm text-gray-300">{book.author}</p>
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-gray-800 p-6 flex flex-col justify-center items-center text-center border border-white/10"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <h4 className="text-xl font-bold text-blue-400 mb-2">My Review</h4>
                    <p className="text-gray-300 text-sm italic leading-relaxed">"{book.review}"</p>
                    <span className="mt-4 px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">{book.genre}</span>
                </div>
            </motion.div>
        </div>
    );
};

export default BookCard;
