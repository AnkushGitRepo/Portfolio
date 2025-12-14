import React from 'react';

const SpotifyPlayer = ({ url }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe
                src={url}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Player"
                className="w-full"
            ></iframe>
        </div>
    );
};

export default SpotifyPlayer;
