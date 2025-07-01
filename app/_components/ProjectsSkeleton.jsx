"use client";

export default function ProjectsSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Landing Pages Skeleton */}
      <div className="mb-20">
        <div className="h-12 bg-gray-700 rounded w-48 mb-4"></div>
        <div className="h-6 bg-gray-700 rounded w-32"></div>
      </div>

      <div className="flex flex-col gap-10">
        {/* Section Title */}
        <div className="">
          <div className="h-10 bg-gray-700 rounded w-48 mb-10"></div>
          
          {/* Projects Grid */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 *:border">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-600 p-4 space-y-4">
                {/* Project Image */}
                <div className="h-48 bg-gray-700 rounded"></div>
                
                {/* Project Title */}
                <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                
                {/* Project Description */}
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                
                {/* Project Links */}
                <div className="flex gap-2">
                  <div className="h-8 bg-gray-700 rounded w-20"></div>
                  <div className="h-8 bg-gray-700 rounded w-20"></div>
                </div>
                
                {/* Project Tags */}
                <div className="flex gap-2 flex-wrap">
                  <div className="h-6 bg-gray-700 rounded w-16"></div>
                  <div className="h-6 bg-gray-700 rounded w-16"></div>
                  <div className="h-6 bg-gray-700 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 