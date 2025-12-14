import React from 'react';

const SkillBadge = ({ skill }) => {
    return (
        <div className="flex items-center space-x-3 bg-[#111] px-5 py-3 rounded-2xl border border-white/5">
            {skill.iconUrl ? (
                <img src={skill.iconUrl} alt={skill.name} className="w-6 h-6 grayscale opacity-70" />
            ) : (
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
            )}
            <span className="text-gray-300 font-medium">{skill.name}</span>
        </div>
    );
};

export default SkillBadge;
