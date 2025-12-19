import ankushImg from '../assets/ankush.png';
import { motion } from 'framer-motion';
import resumePdf from '../assets/CV_ANKUSH_GUPTA_LJIET.pdf';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 relative bg-light-bg text-[#1a1a1a]">

            {/* Massive Name */}
            <div className="w-full flex justify-center mt-2 select-none leading-[0.8] px-4">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-[12vw] font-bold tracking-tighter text-center whitespace-nowrap text-[#1a1a1a]"
                >
                    ANKUSH GUPTA
                </motion.h1>
            </div>

            {/* Bottom Grid */}
            <div className="grid md:grid-cols-12 gap-8 items-end mt-12 px-6 md:px-12 pb-12">

                {/* Left: Arrow & Description */}
                <div className="md:col-span-3 space-y-6 mb-8">
                    <div className="text-4xl text-[#333]">
                        ↘
                    </div>
                    <p className="text-[#333] text-lg leading-relaxed font-medium max-w-xs">
                        Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.
                    </p>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#333] hover:bg-black text-[#f0f0f0] px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wide transition-colors"
                    >
                        Contact ↗
                    </button>
                </div>

                {/* Center: Image (Bigger & Centered) */}
                <div className="md:col-span-6 flex justify-center items-end h-full">
                    <div className="w-[80%] aspect-[3/4] md:w-[400px] md:h-[500px] bg-gray-300 rounded overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700 relative shadow-2xl">
                        <img
                            src={ankushImg}
                            alt="Ankush Gupta"
                            className="w-full h-full object-cover select-none"
                            draggable="false"
                        />
                    </div>
                </div>

                {/* Right: Availability (No Date) */}
                <div className="md:col-span-3 flex flex-col items-end justify-end h-full mb-0">
                    <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-tighter uppercase whitespace-nowrap mb-6">
                            Available For Work
                        </div>
                        <a
                            href={resumePdf}
                            download="CV_ANKUSH_GUPTA.pdf"
                            className="inline-block border border-black px-6 py-3 rounded-full font-bold uppercase text-xs tracking-wide hover:bg-black hover:text-white transition-colors"
                        >
                            Download Resume ↓
                        </a>
                    </div>
                </div>
            </div>

            {/* Correction based on strict prompt reading */}
            <style jsx>{`
               /* Hide the JUN'25 element if I implemented it. Redoing Availability Block */
            `}</style>
        </section>
    );
};

export default Hero;
