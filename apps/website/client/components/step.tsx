import React from 'react';

interface StepProps {
  number: number;
  title: string;
}

export default function Step({ number, title }: StepProps) {
  return (
    <div className="step flex items-center py-4">
      <div className="flex items-center justify-center border border-devConceptsGray-200 font-bold dark:border-devConceptsGray-900 rounded-full h-8 w-8 text-devConceptsBlue-500">
        {number}
      </div>
      <h3 className="ml-3 tracking-tight font-bold">{title}</h3>
    </div>
  );
}
