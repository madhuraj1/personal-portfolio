import React from 'react';
import { useQuery } from '@apollo/client';
import { Spinner } from '../../components/Spinner';
import { Aboutquery } from '../../schema/Query';
import { Data } from '../../types/pages/About.types';
import aboutImage from '../../assets/about_us.jpg';
import { Button } from '@/components/ui/button';

export const About = () => {
  const { data, loading, error } = useQuery<Data>(Aboutquery);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="relative h-[800px] w-full">
      <img
        src={aboutImage}
        alt="About background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="flex h-[800px] flex-col items-center justify-center gap-8 px-4 py-16 text-center text-white">
        <h1 className="font-century text-3xl font-bold text-black md:text-5xl">
          Capturing Movements, Crafting Stories
        </h1>
        <p className="font-metropolis w-[90%] text-center font-medium leading-[25px] text-black md:w-[60%]">
          {data?.aboutCollection.items[0].about}
        </p>
        <Button
          variant={'outline'}
          className="font-metropolis w-fit px-6 py-5 text-black"
        >
          Let's talk about your story
        </Button>
      </div>
    </div>
  );
};
