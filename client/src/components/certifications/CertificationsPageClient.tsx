'use client';

import { useState, useEffect, useMemo } from 'react';
import { Certification } from '@/types';
import { useThemeColor } from '@/components/theme-color-context';
import CertificationDetailModal from './CertificationDetailModal';
import { Calendar, ExternalLink, X, Filter } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CertificationsPageClientProps {
  certifications: Certification[];
}

// Define filter categories
type FilterCategory = 'Languages' | 'Skills' | 'Tools' | 'Workshop' | 'AI/ML' | 'Hackathon' | 'All';

// Define filter mapping for skills
const filterMapping: Record<FilterCategory, string[]> = {
  'Languages': ['Python', 'JavaScript', 'Java', 'HTML', 'CSS'],
  'Skills': ['Web Development', 'Data Structures', 'Object-Oriented Programming', 'Programming', 'Software Development', 'Front-end Development', 'Ingenious Hackathon 6.0'],
  'Tools': ['GitHub', 'Version Control', 'Git', 'Repository Management'],
  'Workshop': ['LinkedIn Workshop', '2 Day AI Mastery Workshop', 'Personal Branding', 'Professional Networking', 'Content Strategy'],
  'AI/ML': ['Machine Learning', 'Artificial Intelligence', 'Neural Networks', 'AI Applications', 'Generative AI', 'Prompt Engineering', 'AI Integration', 'Regression', 'Classification', 'Model Evaluation'],
  'Hackathon': ['Hackathon', 'Ingenious Hackathon 6.0', 'Innovation', 'Teamwork'],
  'All': []
};

export default function CertificationsPageClient({ certifications }: CertificationsPageClientProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentColor } = useThemeColor(); // Kept for consistency with other components
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState<FilterCategory[]>(['All']);

  // Simulate loading state for better UX
  useEffect(() => {
    // Set a timeout to simulate loading of certificate images
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Debug: Log the image paths
      console.log('Certificate image paths:');
      certifications.forEach(cert => {
        console.log(`${cert.title}: ${cert.image}`);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [certifications]);

  // Handle filter toggle
  const toggleFilter = (filter: FilterCategory) => {
    if (filter === 'All') {
      setActiveFilters(['All']);
      return;
    }

    // If 'All' is currently active and we're selecting a specific filter
    if (activeFilters.includes('All')) {
      setActiveFilters([filter]);
      return;
    }

    // Toggle the filter
    if (activeFilters.includes(filter)) {
      const newFilters = activeFilters.filter(f => f !== filter);
      // If no filters left, set to 'All'
      setActiveFilters(newFilters.length === 0 ? ['All'] : newFilters);
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  // Define styles matching HeroSection.tsx
  const styles = [
    {
      bg: 'from-blue-50 to-blue-100',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      profileBg: 'bg-blue-200',
      profileText: 'text-blue-800',
      border: 'border-blue-200',
      shadow: 'shadow-blue-100',
      hover: 'hover:bg-blue-50',
    },
    {
      bg: 'from-green-50 to-green-100',
      text: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      profileBg: 'bg-green-200',
      profileText: 'text-green-800',
      border: 'border-green-200',
      shadow: 'shadow-green-100',
      hover: 'hover:bg-green-50',
    },
    {
      bg: 'from-purple-50 to-purple-100',
      text: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      profileBg: 'bg-purple-200',
      profileText: 'text-purple-800',
      border: 'border-purple-200',
      shadow: 'shadow-purple-100',
      hover: 'hover:bg-purple-50',
    },
    {
      bg: 'from-orange-50 to-orange-100',
      text: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      profileBg: 'bg-orange-200',
      profileText: 'text-orange-800',
      border: 'border-orange-200',
      shadow: 'shadow-orange-100',
      hover: 'hover:bg-orange-50',
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

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  // Filter certifications based on active filters
  const filteredCertifications = useMemo(() => {
    if (activeFilters.includes('All')) {
      return certifications;
    }

    // Get all skills that match the active filters
    const relevantSkills = activeFilters.flatMap(filter => filterMapping[filter]);

    // Filter certifications that have at least one matching skill
    return certifications.filter(cert => {
      // Special case: explicitly exclude 2 Day AI Mastery Workshop from Hackathon filter
      if (activeFilters.includes('Hackathon') && cert.title === '2 Day AI Mastery Workshop') {
        return false;
      }

      if (!cert.skills || cert.skills.length === 0) return false;

      // Check if any of the certification skills match the relevant skills
      return cert.skills.some(skill => {
        // Check for direct match, but exclude Supervised Machine Learning from Languages
        if (relevantSkills.includes(skill)) {
          // Special case: don't include Supervised Machine Learning in Languages
          if (activeFilters.includes('Languages') &&
              activeFilters.length === 1 &&
              cert.title === 'Supervised Machine Learning: Regression and Classification') {
            return false;
          }

          // Special case: don't include 2 Day AI Mastery Workshop in Hackathon
          if (activeFilters.includes('Hackathon') &&
              cert.title === '2 Day AI Mastery Workshop') {
            return false;
          }

          return true;
        }

        // Check for title match (for Workshop, Hackathon, and Skills with Ingenious Hackathon)
        if (activeFilters.includes('Workshop') &&
            (cert.title.toLowerCase().includes('workshop') ||
             relevantSkills.some(rs => cert.title.includes(rs)))) {
          return true;
        }

        if (activeFilters.includes('Hackathon') &&
            cert.title.toLowerCase().includes('hackathon')) {
          return true;
        }

        if (activeFilters.includes('Skills') &&
            cert.title === 'Ingenious Hackathon 6.0') {
          return true;
        }

        // Special case for Tools category
        if (activeFilters.includes('Tools') &&
            cert.title === 'GitHub Foundations') {
          return true;
        }

        return false;
      });
    });
  }, [certifications, activeFilters]);

  return (
    <section className={`py-20 mt-0 bg-gradient-to-b ${currentStyle.bg} transition-colors duration-500 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className={`text-4xl font-bold ${currentStyle.text} mb-4`}>Certifications</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of my professional certifications and credentials in machine learning, web development, and cloud technologies.
        </p>
      </div>

      {/* Filter Section */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-2">
          <Filter size={18} className="mr-2 text-gray-600" />
          <h2 className="text-lg font-medium text-gray-700">Filter by Category</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {['All', ...Object.keys(filterMapping).filter(key => key !== 'All')].map((filter) => (
            <Button
              key={filter}
              variant={activeFilters.includes(filter as FilterCategory) ? "default" : "outline"}
              className={`rounded-full text-sm py-1 px-3 ${activeFilters.includes(filter as FilterCategory) ? currentStyle.button : 'hover:bg-gray-100'}`}
              onClick={() => toggleFilter(filter as FilterCategory)}
            >
              {filter}
              {activeFilters.includes(filter as FilterCategory) && filter !== 'All' && (
                <X size={14} className="ml-1" />
              )}
            </Button>
          ))}
        </div>
        {!activeFilters.includes('All') && (
          <div className="text-center">
            <button
              className={`text-sm ${currentStyle.text} hover:underline`}
              onClick={() => setActiveFilters(['All'])}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-24 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Certifications Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <div className="text-gray-500 mb-4">No certifications match the selected filters</div>
              <Button
                variant="outline"
                className={`${currentStyle.text}`}
                onClick={() => setActiveFilters(['All'])}
              >
                Show All Certifications
              </Button>
            </div>
          ) : (
            filteredCertifications.map((certification) => (
          <div
            key={certification._id}
            className={`rounded-lg overflow-hidden border ${currentStyle.border} ${currentStyle.shadow} transition-all duration-300 ${currentStyle.hover} cursor-pointer flex flex-col h-full`}
            onClick={() => setSelectedCertification(certification)}
          >
            {/* Certificate Image */}
            <div className="relative h-48 w-full overflow-hidden bg-white">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
              </div>
              <img
                src={getAssetPath(certification.image)}
                alt={`${certification.title} Certificate`}
                className="absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-300"
                loading="lazy"
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '1';
                  console.log(`Image loaded: ${certification.title}`);
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.log(`Image error: ${certification.title}`);
                  target.onerror = null; // Prevent infinite loop
                  target.src = getAssetPath('/placeholder.svg');
                }}
                style={{ opacity: 0 }} // Start with opacity 0
              />
            </div>

            {/* Certificate Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="mb-auto">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{certification.title}</h3>

                <div className="flex items-center text-gray-500 mb-2 text-sm">
                  <span className="font-medium mr-1">Issuer:</span>
                  <span className="line-clamp-1">{certification.issuer}</span>
                </div>

                <div className="flex items-center text-gray-500 mb-3 text-sm">
                  <Calendar size={14} className="mr-1 flex-shrink-0" />
                  <span>{formatDate(certification.issueDate)}</span>
                  {certification.expirationDate && (
                    <span className="ml-1">- {formatDate(certification.expirationDate)}</span>
                  )}
                </div>
              </div>

              {certification.skills && certification.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2 mb-3">
                  {certification.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} className={`${currentStyle.profileBg} ${currentStyle.profileText} border-none text-xs`}>
                      {skill}
                    </Badge>
                  ))}
                  {certification.skills.length > 3 && (
                    <Badge className="bg-gray-100 text-gray-600 border-none text-xs">
                      +{certification.skills.length - 3}
                    </Badge>
                  )}
                </div>
              )}

              <div className="mt-2 sm:mt-3 flex flex-col gap-2">
                <button
                  className={`inline-flex items-center justify-center ${currentStyle.text} font-medium text-sm py-2 px-4 rounded hover:bg-gray-50 active:bg-gray-100 transition-colors w-full border border-gray-200 touch-manipulation`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when button is clicked
                    setSelectedCertification(certification);
                  }}
                  aria-label="View certificate details"
                >
                  <span>View Details</span> <ExternalLink size={14} className="ml-1 flex-shrink-0" />
                </button>

                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center ${currentStyle.button} text-white font-medium text-sm py-2 px-4 rounded transition-all duration-300 w-full touch-manipulation`}
                    onClick={(e) => e.stopPropagation()} // Prevent card click when button is clicked
                    aria-label="Verify this certificate"
                  >
                    <span>Verify Certificate</span> <ExternalLink size={14} className="ml-1 flex-shrink-0" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )))
        }
        </div>
      )}

      {/* Certification Detail Modal */}
      {selectedCertification && (
        <CertificationDetailModal
          certification={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
      </div>
    </section>
  );
}
