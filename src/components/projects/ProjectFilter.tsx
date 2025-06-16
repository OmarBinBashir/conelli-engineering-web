import React from 'react';
import { cn } from '@/lib/utils';

export interface CategoryCount {
  name: string;
  count: number;
}

interface ProjectFilterProps {
  categories: CategoryCount[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange('all')}
          className={cn(
            'px-4 py-2 rounded-md transition-colors',
            selectedCategory === 'all'
              ? 'bg-dark-gray text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          )}
        >
          All Projects
          <span className="ml-2 text-sm">
            ({categories.reduce((sum, cat) => sum + cat.count, 0)})
          </span>
        </button>
        
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={cn(
              'px-4 py-2 rounded-md transition-colors',
              selectedCategory === category.name
                ? 'bg-dark-gray text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            )}
          >
            {category.name}
            <span className="ml-2 text-sm">({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;