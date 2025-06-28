import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  year: string;
}

interface ProjectGridProps {
  projects: Project[];
  selectedCategory?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, selectedCategory }) => {
  // Filter projects by category if a category is selected
  const filteredProjects = selectedCategory && selectedCategory !== 'all'
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <Link 
            href={`/project-references/${project.id}`} 
            key={project.id}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <span className="inline-block bg-white text-dark-gray px-2 py-1 rounded-md text-sm font-medium mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.location} • {project.year}</p>
                </div>
                <span className="bg-gray-100 p-2 rounded-full transform translate-y-0 group-hover:translate-y-1 transition-transform">
                  <ArrowRight className="h-5 w-5 text-dark-gray" />
                </span>
              </div>
              <p className="text-gray-700">
                {project.description.length > 120 
                  ? `${project.description.substring(0, 120)}...` 
                  : project.description
                }
              </p>
            </div>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-gray-600">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;