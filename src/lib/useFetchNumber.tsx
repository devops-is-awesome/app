'use client';

import { useEffect, useState } from 'react';
import fetcher from './fetcher';

export const useFetchNumber = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const getNumber = async () => {
      const res = (await fetcher('/api')) as { number: number };
      setNumber(res.number);
    };

    getNumber();
  }, []);

  const incrementNumber = async () => {
    const res = (await fetcher('/api', {
      method: 'POST',
    })) as { number: number };
    setNumber(res.number);
  };

  return [number, incrementNumber] as const;
};
