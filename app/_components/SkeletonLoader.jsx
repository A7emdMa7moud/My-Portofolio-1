"use client";

import { motion } from "framer-motion";

export default function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="h-[70dvh] grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Content */}
        <div className="flex justify-center flex-col space-y-4">
          {/* Name */}
          <div className="h-12 bg-gray-700 rounded w-3/4"></div>
          {/* Title */}
          <div className="h-8 bg-gray-700 rounded w-1/2"></div>
          <div className="h-8 bg-gray-700 rounded w-2/3"></div>
          <div className="h-8 bg-gray-700 rounded w-1/3"></div>
          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-4/6"></div>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="h-10 bg-gray-700 rounded w-32"></div>
            <div className="h-10 bg-gray-700 rounded w-32"></div>
          </div>
        </div>
        {/* Right Image */}
        <div className="relative flex justify-center items-end">
          <div className="w-full h-full bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Quote Section Skeleton */}
      <div className="py-20">
        <div className="h-24 bg-gray-700 rounded w-3/4 mx-auto"></div>
      </div>

      {/* Projects Section Skeleton */}
      <div className="py-20">
        <div className="mb-10">
          <div className="h-8 bg-gray-700 rounded w-48"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-gray-600 p-4 space-y-4">
              <div className="h-48 bg-gray-700 rounded"></div>
              <div className="h-6 bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="flex gap-2">
                <div className="h-6 bg-gray-700 rounded w-16"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section Skeleton */}
      <div className="py-20">
        <div className="mb-10">
          <div className="h-8 bg-gray-700 rounded w-32"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex justify-center items-center">
            <div className="h-64 w-64 bg-gray-700 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border border-gray-600 p-4 space-y-3">
                <div className="h-6 bg-gray-700 rounded w-24"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section Skeleton */}
      <div className="py-20">
        <div className="mb-10">
          <div className="h-8 bg-gray-700 rounded w-48"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-4">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-4/6"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-10 bg-gray-700 rounded w-32"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-80 w-80 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 