import React from 'react';
import { Skeleton } from "./ui/skeleton";

const SkeletonRow: React.FC = () => (
    <div className="flex items-center p-4 border-b border-border h-20 min-w-[320px]">
      <div className="flex-none w-12">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex-1 min-w-0 mx-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-32" />
          </div>
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
      <div className="flex-none w-12">
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );

export default SkeletonRow;