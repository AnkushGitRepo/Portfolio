'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Project } from '@/types';
import { ColorType } from '@/components/theme-color-context';
import { skills } from '@/lib/mockData';

interface ProjectFiltersProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
  currentColor: ColorType;
}

export default function ProjectFilters({ projects, onFilterChange, currentColor }: ProjectFiltersProps) {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [showWebUI, setShowWebUI] = useState<boolean>(false);
  const [showVibeCoding, setShowVibeCoding] = useState<boolean>(false);
  const [showAIML, setShowAIML] = useState<boolean>(false);
  const [showBackend, setShowBackend] = useState<boolean>(false);

  // Get normalized skills from the skills page
  const skillNames = skills.map(skill => skill.name);

  // Helper function to normalize technology names
  const normalizeTech = (tech: string): string => {
    // Remove common suffixes and normalize casing
    let normalized = tech.replace(/\.js$/i, '');
    normalized = normalized.replace(/^Express$/i, 'Express.js');
    normalized = normalized.replace(/^Node$/i, 'Node.js');
    normalized = normalized.replace(/^React$/i, 'React');
    normalized = normalized.replace(/^Next$/i, 'Next.js');
    normalized = normalized.replace(/^Tailwind$/i, 'Tailwind CSS');

    // Return with proper casing for common technologies
    if (normalized.toLowerCase() === 'javascript') return 'JavaScript';
    if (normalized.toLowerCase() === 'typescript') return 'TypeScript';
    if (normalized.toLowerCase() === 'html') return 'HTML';
    if (normalized.toLowerCase() === 'css') return 'CSS';
    if (normalized.toLowerCase() === 'mongodb') return 'MongoDB';
    if (normalized.toLowerCase() === 'postgresql') return 'PostgreSQL';
    if (normalized.toLowerCase() === 'python') return 'Python';
    if (normalized.toLowerCase() === 'java') return 'Java';

    return normalized;
  };

  // Get all technologies from projects
  const projectTechnologies = projects.flatMap(project =>
    project.technologies.map(tech => normalizeTech(tech))
  );

  // Define priority skills (commonly used web technologies)
  const prioritySkills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js',
    'HTML', 'CSS', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Python', 'Java'
  ];

  // Filter to skills that are actually used in projects
  const usedSkills = skillNames.filter(skillName =>
    projectTechnologies.some(tech =>
      tech.toLowerCase() === skillName.toLowerCase() ||
      tech.toLowerCase().includes(skillName.toLowerCase()) ||
      skillName.toLowerCase().includes(tech.toLowerCase())
    )
  );

  // Add priority skills if they're used in projects
  const usedPrioritySkills = prioritySkills.filter(skill =>
    projectTechnologies.some(tech =>
      tech.toLowerCase() === skill.toLowerCase() ||
      tech.toLowerCase().includes(skill.toLowerCase()) ||
      skill.toLowerCase().includes(tech.toLowerCase())
    )
  );

  // Create a map to deduplicate similar technologies
  const techMap = new Map<string, string>();

  // Add priority skills first
  usedPrioritySkills.forEach(skill => {
    techMap.set(skill.toLowerCase(), skill);
  });

  // Then add skills from the skills page
  usedSkills.forEach(skill => {
    // Only add if we don't already have a similar technology
    if (!Array.from(techMap.keys()).some(key =>
      key.includes(skill.toLowerCase()) || skill.toLowerCase().includes(key)
    )) {
      techMap.set(skill.toLowerCase(), skill);
    }
  });

  // Get the final list of technologies
  const filteredTechnologies = Array.from(techMap.values()).sort();

  // Define styles for different color themes
  const styles = {
    blue: {
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      badgeActive: 'bg-blue-600 text-white border-blue-600',
      hover: 'hover:bg-blue-50',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonOutline: 'border-blue-600 text-blue-600 hover:bg-blue-50',
    },
    green: {
      badge: 'bg-green-100 text-green-800 border-green-200',
      badgeActive: 'bg-green-600 text-white border-green-600',
      hover: 'hover:bg-green-50',
      button: 'bg-green-600 hover:bg-green-700 text-white',
      buttonOutline: 'border-green-600 text-green-600 hover:bg-green-50',
    },
    purple: {
      badge: 'bg-purple-100 text-purple-800 border-purple-200',
      badgeActive: 'bg-purple-600 text-white border-purple-600',
      hover: 'hover:bg-purple-50',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      buttonOutline: 'border-purple-600 text-purple-600 hover:bg-purple-50',
    },
    orange: {
      badge: 'bg-orange-100 text-orange-800 border-orange-200',
      badgeActive: 'bg-orange-600 text-white border-orange-600',
      hover: 'hover:bg-orange-50',
      button: 'bg-orange-600 hover:bg-orange-700 text-white',
      buttonOutline: 'border-orange-600 text-orange-600 hover:bg-orange-50',
    },
  };

  const currentStyle = styles[currentColor];

  // Apply filters whenever selected technologies change
  useEffect(() => {
    let filtered = [...projects];

    // Filter by selected technologies (if any)
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(project =>
        selectedTechnologies.every(selectedTech =>
          project.technologies.some(projectTech => {
            const normalizedProjectTech = normalizeTech(projectTech);
            return (
              normalizedProjectTech.toLowerCase() === selectedTech.toLowerCase() ||
              normalizedProjectTech.toLowerCase().includes(selectedTech.toLowerCase()) ||
              selectedTech.toLowerCase().includes(normalizedProjectTech.toLowerCase())
            );
          })
        )
      );
    }

    // Filter for category-based filters
    if (showWebUI || showVibeCoding || showAIML || showBackend) {
      filtered = filtered.filter(project => {
        // For Web & UI projects (web development and UI)
        if (showWebUI) {
          // Check if project uses frontend technologies
          const hasFrontendTech = project.technologies.some(tech => {
            const normalizedTech = normalizeTech(tech);
            return ['React', 'Next.js', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind CSS', 'HTML', 'Bootstrap'].some(frontendTech =>
              normalizedTech.toLowerCase().includes(frontendTech.toLowerCase()) ||
              frontendTech.toLowerCase().includes(normalizedTech.toLowerCase())
            );
          });

          // Check if project is UI/design focused or a portfolio project
          const isDesignFocused =
            project.description?.toLowerCase().includes('ui') ||
            project.description?.toLowerCase().includes('user interface') ||
            project.description?.toLowerCase().includes('design') ||
            project.description?.toLowerCase().includes('animation') ||
            project.description?.toLowerCase().includes('responsive') ||
            project.description?.toLowerCase().includes('frontend') ||
            project.description?.toLowerCase().includes('front-end') ||
            project.description?.toLowerCase().includes('web') ||
            project.title.toLowerCase().includes('portfolio') ||
            project.title.toLowerCase().includes('website') ||
            project.title.toLowerCase().includes('ui') ||
            project.title.toLowerCase().includes('web');

          if (hasFrontendTech && isDesignFocused) return true;
        }

        // For Vibe Coding projects (specifically Portfolio and DataHarbor)
        if (showVibeCoding) {
          // Directly check for Portfolio and DataHarbor projects
          const isVibeProject =
            project.title.toLowerCase().includes('portfolio') ||
            project.title.toLowerCase() === 'portfolio website' ||
            project.title.toLowerCase() === 'dataharbor' ||
            project.title.toLowerCase().includes('data harbor') ||
            // Check GitHub URL for specific repositories
            (project.githubUrl && (
              project.githubUrl.toLowerCase().includes('portfolio') ||
              project.githubUrl.toLowerCase().includes('dataharbor')
            ));

          return isVibeProject;
        }

        // For AI/ML projects
        if (showAIML) {
          // Check if project uses AI/ML technologies
          const hasAIMLTech = project.technologies.some(tech => {
            const normalizedTech = normalizeTech(tech);
            return ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'ML', 'AI', 'Machine Learning', 'Deep Learning', 'Neural Network'].some(aiTech =>
              normalizedTech.toLowerCase().includes(aiTech.toLowerCase()) ||
              aiTech.toLowerCase().includes(normalizedTech.toLowerCase())
            );
          });

          // Check if project is AI/ML focused
          const isAIMLFocused =
            project.description?.toLowerCase().includes('ai') ||
            project.description?.toLowerCase().includes('ml') ||
            project.description?.toLowerCase().includes('artificial intelligence') ||
            project.description?.toLowerCase().includes('machine learning') ||
            project.description?.toLowerCase().includes('deep learning') ||
            project.description?.toLowerCase().includes('neural') ||
            project.description?.toLowerCase().includes('model') ||
            project.description?.toLowerCase().includes('predict') ||
            project.description?.toLowerCase().includes('algorithm') ||
            project.title.toLowerCase().includes('ai') ||
            project.title.toLowerCase().includes('ml') ||
            project.title.toLowerCase().includes('intelligence') ||
            project.title.toLowerCase().includes('learning') ||
            project.title.toLowerCase().includes('neural');

          if (hasAIMLTech && isAIMLFocused) return true;
        }

        // For Backend projects
        if (showBackend) {
          // Check if project uses backend technologies
          const hasBackendTech = project.technologies.some(tech => {
            const normalizedTech = normalizeTech(tech);
            return ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'API', 'Server', 'Java', 'Spring', 'Django', 'Flask', 'PHP', 'Laravel', 'GraphQL', 'REST'].some(backendTech =>
              normalizedTech.toLowerCase().includes(backendTech.toLowerCase()) ||
              backendTech.toLowerCase().includes(normalizedTech.toLowerCase())
            );
          });

          // Check if project is backend focused
          const isBackendFocused =
            project.description?.toLowerCase().includes('api') ||
            project.description?.toLowerCase().includes('server') ||
            project.description?.toLowerCase().includes('backend') ||
            project.description?.toLowerCase().includes('back-end') ||
            project.description?.toLowerCase().includes('database') ||
            project.description?.toLowerCase().includes('authentication') ||
            project.description?.toLowerCase().includes('authorization') ||
            project.description?.toLowerCase().includes('rest') ||
            project.description?.toLowerCase().includes('graphql') ||
            project.title.toLowerCase().includes('api') ||
            project.title.toLowerCase().includes('server') ||
            project.title.toLowerCase().includes('backend') ||
            project.title.toLowerCase().includes('service');

          if (hasBackendTech && isBackendFocused) return true;
        }

        // If none of the category filters match
        return false;
      });
    }

    onFilterChange(filtered);
  }, [selectedTechnologies, showWebUI, showVibeCoding, showAIML, showBackend, projects, onFilterChange]);

  // Toggle a technology filter
  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTechnologies([]);
    setShowWebUI(false);
    setShowVibeCoding(false);
    setShowAIML(false);
    setShowBackend(false);
  };

  return (
    <div className="mb-8 animate-fadeIn">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-gray-700 font-medium">Filter by:</span>

        {/* Category filters */}
        <button
          onClick={() => setShowWebUI(!showWebUI)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors duration-300 ${
            showWebUI ? currentStyle.badgeActive : currentStyle.badge
          }`}
        >
          Web & UI
        </button>

        <button
          onClick={() => setShowVibeCoding(!showVibeCoding)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors duration-300 ${
            showVibeCoding ? currentStyle.badgeActive : currentStyle.badge
          }`}
        >
          Vibe Coding
        </button>

        <button
          onClick={() => setShowAIML(!showAIML)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors duration-300 ${
            showAIML ? currentStyle.badgeActive : currentStyle.badge
          }`}
        >
          AI & ML
        </button>

        <button
          onClick={() => setShowBackend(!showBackend)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors duration-300 ${
            showBackend ? currentStyle.badgeActive : currentStyle.badge
          }`}
        >
          Backend
        </button>

        {/* Clear filters button (only show if filters are active) */}
        {(selectedTechnologies.length > 0 || showWebUI || showVibeCoding || showAIML || showBackend) && (
          <button
            onClick={clearFilters}
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-1 transition-colors duration-300"
          >
            <X size={14} />
            Clear filters
          </button>
        )}
      </div>

      {/* Technology filters */}
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="text-gray-700 font-medium">Technologies:</span>

        {filteredTechnologies.map(tech => (
          <button
            key={tech}
            onClick={() => toggleTechnology(tech)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-300 ${
              selectedTechnologies.includes(tech) ? currentStyle.badgeActive : currentStyle.badge
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Active filters display */}
      {(selectedTechnologies.length > 0 || showWebUI || showVibeCoding || showAIML || showBackend) && (
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="text-gray-700">Active filters:</span>
          {selectedTechnologies.map(tech => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${currentStyle.badgeActive}`}
            >
              {tech}
              <button
                onClick={() => toggleTechnology(tech)}
                className="hover:bg-white/20 rounded-full p-0.5"
              >
                <X size={12} />
              </button>
            </span>
          ))}
          {showWebUI && (
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${currentStyle.badgeActive}`}
            >
              Web & UI
              <button
                onClick={() => setShowWebUI(false)}
                className="hover:bg-white/20 rounded-full p-0.5"
              >
                <X size={12} />
              </button>
            </span>
          )}
          {showVibeCoding && (
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${currentStyle.badgeActive}`}
            >
              Vibe Coding
              <button
                onClick={() => setShowVibeCoding(false)}
                className="hover:bg-white/20 rounded-full p-0.5"
              >
                <X size={12} />
              </button>
            </span>
          )}
          {showAIML && (
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${currentStyle.badgeActive}`}
            >
              AI & ML
              <button
                onClick={() => setShowAIML(false)}
                className="hover:bg-white/20 rounded-full p-0.5"
              >
                <X size={12} />
              </button>
            </span>
          )}
          {showBackend && (
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${currentStyle.badgeActive}`}
            >
              Backend
              <button
                onClick={() => setShowBackend(false)}
                className="hover:bg-white/20 rounded-full p-0.5"
              >
                <X size={12} />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
