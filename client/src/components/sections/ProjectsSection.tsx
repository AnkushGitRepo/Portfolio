"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { getFeaturedProjects } from "@/lib/apiWithFallback";
import { useThemeColor, ColorType } from "@/components/theme-color-context";
import ProjectDetailModal from "@/components/projects/ProjectDetailModal";
import ProjectFilters from "@/components/projects/ProjectFilters";
import { ArrowRight, Github, ExternalLink, Filter } from "lucide-react";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  // We're using our own color cycling instead of directly using the theme context
  const { currentColor } = useThemeColor(); // Kept for consistency

  // Define styles for different color themes
  const styles = [
    // Blue theme
    {
      bg: "from-blue-50 to-blue-100",
      accent: "bg-blue-600",
      text: "text-blue-600",
      light: "bg-blue-100 text-blue-800",
      border: "border-blue-200",
      button: "bg-blue-600 hover:bg-blue-700",
      hoverText: "hover:text-blue-600",
    },
    // Green theme
    {
      bg: "from-green-50 to-green-100",
      accent: "bg-green-600",
      text: "text-green-600",
      light: "bg-green-100 text-green-800",
      border: "border-green-200",
      button: "bg-green-600 hover:bg-green-700",
      hoverText: "hover:text-green-600",
    },
    // Purple theme
    {
      bg: "from-purple-50 to-purple-100",
      accent: "bg-purple-600",
      text: "text-purple-600",
      light: "bg-purple-100 text-purple-800",
      border: "border-purple-200",
      button: "bg-purple-600 hover:bg-purple-700",
      hoverText: "hover:text-purple-600",
    },
    // Orange theme
    {
      bg: "from-orange-50 to-orange-100",
      accent: "bg-orange-600",
      text: "text-orange-600",
      light: "bg-orange-100 text-orange-800",
      border: "border-orange-200",
      button: "bg-orange-600 hover:bg-orange-700",
      hoverText: "hover:text-orange-600",
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

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getFeaturedProjects();
        setProjects(data);
        setFilteredProjects(data);
      } catch (err) {
        setError("Failed to load projects. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section
        className={`py-20 bg-gradient-to-b ${currentStyle.bg} transition-colors duration-500`}
        id="projects"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className={`text-3xl md:text-4xl font-bold ${currentStyle.text} mb-4 transition-colors duration-500`}
            >
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              expertise.
            </p>
            <div
              className={`w-20 h-1 ${currentStyle.accent} mx-auto mt-4 transition-colors duration-500`}
            ></div>
          </div>

          {/* Filter toggle button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${currentStyle.button} text-white transition-all duration-300 transform hover:scale-105`}
            >
              <Filter size={18} />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <ProjectFilters
              projects={projects}
              onFilterChange={setFilteredProjects}
              currentColor={currentColor as ColorType}
            />
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div
                className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${currentStyle.accent} transition-colors duration-500`}
              ></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-8">{error}</div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No projects found matching your filters.
              </p>
              {projects.length > 0 && showFilters && (
                <button
                  onClick={() => setFilteredProjects(projects)}
                  className={`mt-4 px-4 py-2 rounded-md ${currentStyle.button} text-white transition-colors duration-300`}
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-gray-200 flex flex-col"
                >
                  <div
                    className={`relative h-48 ${currentStyle.light} flex items-center justify-center overflow-hidden transition-colors duration-500`}
                  >
                    <Image
                      src={
                        project.image
                          ? project.image.split(",")[0].trim()
                          : "/images/projects/github-repo.jpg"
                      }
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // If image fails to load, replace with a fallback
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = "/images/projects/github-repo.jpg";
                      }}
                    />

                    {/* Show GitHub icon badge if it's a GitHub repo */}
                    {project.githubUrl &&
                      project.githubUrl.includes("github.com") && (
                        <div className="absolute top-2 right-2 bg-black/70 text-white p-1.5 rounded-full">
                          <Github size={16} />
                        </div>
                      )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3
                      className={`text-xl font-bold ${currentStyle.text} mb-2 transition-colors duration-500`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 ${currentStyle.light} text-sm rounded-full transition-colors duration-500`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-gray-700 ${currentStyle.hoverText} flex items-center transition-colors duration-300`}
                            aria-label="View code on GitHub"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-gray-700 ${currentStyle.hoverText} flex items-center transition-colors duration-300`}
                            aria-label="View live demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() => openProjectDetails(project)}
                        className={`${currentStyle.button} text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors duration-500 transform hover:scale-105`}
                      >
                        <span>Know More</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className={`px-6 py-3 ${currentStyle.button} text-white font-medium rounded-lg transition-colors duration-500`}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )}
    </>
  );
};

export default ProjectsSection;
