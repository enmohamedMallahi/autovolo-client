import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CarsListSkeleton = () => {
  const skeletonCount = 6; // You can adjust the number of skeleton items

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:px-8 px-4">
      {[...Array(skeletonCount)].map((_, index) => (
        <li key={index} className="bg-white rounded-md shadow-md flex flex-col items-center">
          <Skeleton height={150} width="100%" style={{ borderRadius: '8px' }} />
          <div className="text-center p-2">
            <p className="text-lg font-bold">
              <Skeleton width="80%" />
            </p>
            <p className="text-sm mb-">
              <Skeleton width="60%" />
            </p>
          </div>
          <Skeleton height={40} width="80%" style={{ borderRadius: '4px', margin: '8px 0' }} />
        </li>
      ))}
    </ul>
  );
};

export default CarsListSkeleton;
