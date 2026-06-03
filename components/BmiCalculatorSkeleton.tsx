'use client';

import React from 'react';
import { Activity } from 'lucide-react';

export default function BmiCalculatorSkeleton() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-prime/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-pulse">
        {/* Header Skeleton */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent/50 text-xs font-bold uppercase tracking-widest border border-accent/20 mb-5">
            <Activity size={14} className="fill-accent/10 opacity-50" />
            <span>Medical BMI Screening Tool</span>
          </div>
          <div className="h-10 w-96 bg-gray-200 rounded-full mb-4" />
          <div className="h-4 w-120 bg-gray-200 rounded-full max-w-xl" />
        </div>

        {/* Card Skeleton */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(11,22,38,0.08)] border border-gray-100 overflow-hidden">
          {/* Gold accent top bar */}
          <div className="h-1.5 bg-gradient-to-r from-accent via-yellow-300 to-accent" />

          <div className="p-8 md:p-12">
            <div>
              {/* Gender Toggle Skeleton */}
              <div className="mb-8">
                <div className="h-3 w-16 bg-gray-200 rounded mb-3" />
                <div className="inline-flex rounded-2xl bg-gray-50 border border-gray-100 p-1 gap-1">
                  <div className="h-11 w-28 bg-gray-200 rounded-xl" />
                  <div className="h-11 w-32 bg-gray-200 rounded-xl" />
                </div>
              </div>

              {/* Inputs Grid Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                <div>
                  <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
                  <div className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl" />
                </div>
                <div>
                  <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
                  <div className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl" />
                </div>
                <div>
                  <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
                  <div className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl" />
                </div>
              </div>

              {/* Submit Button Skeleton */}
              <div className="w-full h-14 bg-prime rounded-2xl opacity-90 flex items-center justify-center">
                <div className="h-4 w-40 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Skeleton */}
        <div className="flex flex-col items-center mt-6">
          <div className="h-3 w-140 bg-gray-200 rounded-full max-w-2xl" />
        </div>
      </div>
    </section>
  );
}
