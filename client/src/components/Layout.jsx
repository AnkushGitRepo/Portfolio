import React from 'react';
import Navbar from './Navbar';
import MobileActionBar from './MobileActionBar';
// Footer is likely unused in the single-page home design (as ContactFooter is inside Home), 
// but we keep it for other pages if they exist. 
// For Home, we probably don't want the default Footer appearing after the specific ContactFooter.
// We'll keep it simple: Layout just wraps.

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-light-bg text-[#1a1a1a] font-sans selection:bg-black selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="w-full">
                {children}
            </main>
            <MobileActionBar />
            {/* <Footer />  -- Disabling global footer to rely on page-specific footers (like ContactFooter in Home) */}
        </div>
    );
};

export default Layout;
