import React from 'react';

export function LoadingSpinner({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-10 h-10 border-3',
  };

  return (
    <div
      className={`inline-block animate-spin rounded-full border-solid border-emerald-500 border-t-transparent ${sizeClasses[size] || sizeClasses.md} ${className}`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function SkeletonItem() {
  return (
    <div className="flex items-center justify-between p-4 bg-white/60 rounded-2xl border border-slate-100 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 bg-slate-200 rounded-lg"></div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded w-32"></div>
          <div className="h-3 bg-slate-100 rounded w-20"></div>
        </div>
      </div>
      <div className="w-16 h-8 bg-slate-200 rounded-xl"></div>
    </div>
  );
}
