import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import SpotifyPlayer from '../components/SpotifyPlayer';

const Music = () => {
    const [books, setBooks] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [booksRes, playlistsRes] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_API_URL}/books`),
                    axios.get(`${import.meta.env.VITE_API_URL}/playlists`)
                ]);
                setBooks(booksRes.data);
                setPlaylists(playlistsRes.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="py-10 space-y-20">

            {/* Playlists Section */}
            <section>
                <h2 className="text-4xl font-bold mb-4">My Playlist</h2>
                <p className="text-gray-400 mb-8">Codes, coffee, and these tunes. 🎧</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {playlists.map(playlist => (
                        <div key={playlist._id}>
                            <h3 className="text-xl font-bold mb-4 text-green-400">{playlist.title} <span className="text-xs text-gray-500 ml-2">({playlist.mood})</span></h3>
                            <SpotifyPlayer url={playlist.spotifyEmbedUrl} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Books Section */}
            <section>
                <h2 className="text-4xl font-bold mb-4">Reading List</h2>
                <p className="text-gray-400 mb-8">Books that shaped my thinking.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map(book => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Music;
