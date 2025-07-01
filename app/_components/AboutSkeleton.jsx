"use client";

export default function AboutSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Landing Pages Skeleton */}
      <div className="mb-20">
        <div className="h-12 bg-gray-700 rounded w-48 mb-4"></div>
        <div className="h-6 bg-gray-700 rounded w-32"></div>
      </div>

      {/* Main Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-4/6"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-4/6"></div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex relative justify-center items-center">
          <div className="h-80 w-80 bg-gray-700 rounded"></div>
          {/* Decorative dots */}
          <div className="absolute top-14 left-[7%] lg:top-14 lg:left-[27%]">
            <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
          </div>
          <div className="absolute bottom-[20%] right-[0%] lg:bottom-[20%] lg:right-[20%]">
            <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
          </div>
          {/* Bottom line */}
          <div className="absolute bottom-0 w-[67%] lg:w-[35%] h-0.5 bg-gray-700"></div>
        </div>
      </div>

      {/* Resume PDF Skeleton */}
      <div className="mt-12 w-full flex justify-center">
        <div className="w-full lg:w-[850px] h-[50dvh] bg-gray-700 rounded"></div>
      </div>
    </div>
  );
} 