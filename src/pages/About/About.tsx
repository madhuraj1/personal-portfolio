import React from 'react';
import { useQuery } from '@apollo/client';
import { Spinner } from '../../components/Spinner';
import { Aboutquery } from '../../schema/Query';
import { Data } from '../../types/pages/About.types';
import aboutImage from '../../assets/about_us.jpg';
import { Button } from '@/components/ui/button';
import { FORM_URL } from '@/utils/urls';

export const About = () => {
  const { data, loading, error } = useQuery<Data>(Aboutquery);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="relative h-full w-full xs:min-h-[900px] lg:h-screen">
      <img
        src={aboutImage}
        alt="About background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="z-10 flex h-[800px] flex-col items-center justify-center gap-8 px-4 py-16 pt-48 text-center text-white lg:pt-28">
        <h1 className="font-metropolis text-3xl font-bold text-black md:text-5xl">
          Capturing Movements, Crafting Stories
        </h1>
        <p className="w-[90%] text-center font-century font-medium leading-[25px] text-black md:w-[60%]">
          {data?.aboutCollection.items[0].about}
        </p>
        <Button
          variant={'outline'}
          className="w-fit cursor-pointer px-6 py-5 font-century text-black"
          onClick={() => {
            window.open(FORM_URL, '_blank');
          }}
        >
          Let's talk about your story
        </Button>
      </div>
    </div>
  );
};
