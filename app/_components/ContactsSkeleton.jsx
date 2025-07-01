"use client";

export default function ContactsSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Landing Pages Skeleton */}
      <div className="mb-20">
        <div className="h-12 bg-gray-700 rounded w-48 mb-4"></div>
        <div className="h-6 bg-gray-700 rounded w-32"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-20 mb-10">
        {/* Text Content */}
        <div className="flex justify-center items-center">
          <div className="space-y-3 w-full">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-4/6"></div>
          </div>
        </div>

        {/* Contact Form Skeleton */}
        <div className="space-y-4">
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-32 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded w-32"></div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="overflow-hidden">
        <div className="mb-12">
          <div className="h-10 bg-gray-700 rounded w-32 mb-4"></div>
          <div className="h-6 bg-gray-700 rounded w-24"></div>
        </div>
        <div className="flex gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-8 w-8 bg-gray-700 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
} 