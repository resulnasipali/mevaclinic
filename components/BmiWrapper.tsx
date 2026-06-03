'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import BmiCalculatorSkeleton from './BmiCalculatorSkeleton';

const BmiCalculator = dynamic(
  () => import('./BmiCalculator'),
  { ssr: false, loading: () => <BmiCalculatorSkeleton /> }
);

interface BmiWrapperProps {
  lang: string;
}

export default function BmiWrapper({ lang }: BmiWrapperProps) {
  return <BmiCalculator lang={lang} />;
}
