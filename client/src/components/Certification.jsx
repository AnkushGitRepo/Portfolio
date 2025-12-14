import React from 'react';

const Certification = () => {
    const certs = [
        {
            name: "Generative AI for Software Developers",
            issuer: "IBM",
            link: "https://coursera.org/share/5885f9c62d1265501f6cf3f4b271a48e",
            year: "2024"
        },
        {
            name: "Python 3 Programming",
            issuer: "University of Michigan",
            link: "https://coursera.org/share/79ff1b76ef2ee3047a03bf869fcf2f98",
            year: "2024"
        },
        {
            name: "GitHub Foundations",
            issuer: "GitHub",
            link: "https://www.credly.com/badges/279d09f0-6b04-417e-82df-310670f7043a/public_url",
            year: "2024"
        },
        {
            name: "Object-Oriented Design",
            issuer: "University of Alberta",
            link: "https://coursera.org/share/a54d783f425bada112558e587b3fb8ab",
            year: "2024"
        },
        {
            name: "Programming with JavaScript",
            issuer: "Meta",
            link: "https://coursera.org/share/25f002432d42032817206e658518088c",
            year: "2025"
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-light-bg text-black px-6 md:px-12">
            <div className="mb-20">
                <h2 className="text-[8vw] font-bold tracking-tighter leading-none text-black/90">
                    CERTIFICATIONS /
                </h2>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
                {certs.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-t border-black/10 py-8 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-white/50 transition-colors px-4 cursor-pointer"
                    >
                        <div>
                            <div className="flex items-center gap-4">
                                <h3 className="text-2xl md:text-3xl font-bold font-sans mb-2 group-hover:underline underline-offset-4 decoration-2">{cert.name}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors opacity-0 group-hover:opacity-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <p className="text-gray-600 font-mono text-sm uppercase tracking-wider">{cert.issuer}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <span className="text-xl font-bold text-gray-400 group-hover:text-black transition-colors">{cert.year}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certification;
