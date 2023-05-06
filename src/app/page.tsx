'use client';
import { useFetchNumber } from '../lib/useFetchNumber';

export default function Home() {
  const [number, incrementNumber] = useFetchNumber();

  return (
    <main className='flex min-h-screen flex-col gap-12 items-center sm:p-4 md:p-16 p-24 bg-black font-mono text-sm md:text-xl lg:text-3xl'>
      <h1>Would you be the next person to press the button?</h1>

      <p>The button has been clicked {number} times</p>

      <button
        onClick={() => void incrementNumber()}
        className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg  px-10 py-5 text-xl font-extrabold text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 uppercase'>
        CLICK ME
      </button>
    </main>
  );
}
