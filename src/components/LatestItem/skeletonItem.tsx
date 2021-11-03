import React, { useState } from 'react';
import { Skeleton } from 'antd';

export default function SkeletonItem() {
  const [fisrtInit, setFirstInit] = useState([1, 2, 3, 4, 5]);
  return (
    <>
      {fisrtInit?.map((item, index) => {
        return (
          <div className="flex flex-row justify-start py-3 overflow-scroll"
               style={{borderBottom: '1px solid #E9E9E9'}}>
            <div className="latestDiv">
              <Skeleton active paragraph={{rows: 0}} className="indexSkeleton"/>
            </div>
            <div className="flex flex-col justify-start ml-4 w-overSpread">
              <Skeleton active paragraph={{rows: 0}} className="indexSkeleton"/>
            </div>
          </div>
        );
      })}
    </>
  );
}