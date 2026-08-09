import petsInnImg from '../assets/PetsInn.png';
import howiePawsImg from '../assets/HowiePaws.png';
import happyDentalImg from '../assets/HappyDental.png';

const uiProjects = [
    { title: 'Pets Inn', image: petsInnImg, liveLink: 'https://petsinn-hazel.vercel.app/' },
    { title: 'HowiePaws', image: howiePawsImg, liveLink: 'https://howiepaws.vercel.app/' },
    { title: 'Happy Dental', image: happyDentalImg, liveLink: 'https://happydental-nine.vercel.app/' },
];

const UIShowcase = () => {
    return (
        <section className="py-20 bg-dark-bg text-off-white px-6 md:px-12">
            <h2 className="text-6xl md:text-8xl font-bold text-off-white mb-10 md:mb-20 tracking-tighter uppercase">UI Concepts /</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {uiProjects.map((project) => (
                    <a
                        key={project.title}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block aspect-video rounded-lg overflow-hidden relative shadow-2xl"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default UIShowcase;
