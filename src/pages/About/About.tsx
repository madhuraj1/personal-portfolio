import React from 'react';
import { useQuery } from '@apollo/client';
import { Spinner } from '../../components/Spinner';
import { Aboutquery } from '../../schema/Query';
import { Data } from '../../types/pages/About.types';
import aboutImage from '../../assets/Rectangle 103.png';
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
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          Capturing Movements, Crafting Stories
        </h1>
        <p className="w-[90%] text-center font-medium leading-[25px] text-white md:w-[60%]">
          An engineer by profession and a photographer by heart. It all started
          when my mother bought a SLR camera home and just like every other
          beginner I too found happiness in clicking flowers with a blurred
          background! Nostalgia isn't it? Right after my high school, carelessly
          I followed the same culture of joining an engineering college not
          knowing what the future had in store. These were the days when I
          assisted photographers for some mad money. I worked for a company as
          an automobile engineer for around three years whereas my love for
          making pictures that I see around remained the same.
        </p>
        <Button variant={'outline'} className="w-fit px-6 py-5 text-black">
          Let's talk about your story
        </Button>
      </div>
    </div>
  );
};
