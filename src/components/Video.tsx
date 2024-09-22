import { Heading } from './Heading';

interface Props {
  video: string;
}

export const Video = (props: Props) => {
  return (
    <div className="mb-24">
      <div className="xs:pl mt-24 flex flex-col items-center justify-center gap-4 bg-[#f3f0eb] py-8 text-center text-3xl font-light uppercase [&_p]:xs:px-4 [&_p]:xs:text-lg [&_p]:sm:text-3xl">
        <p>❝</p>
        <p>"Photography is the simplest thing in the world, </p>
        <p>but it is incredibly complicated to make it really work."</p>
        <span className="text-sm font-thin">- Martin Parr</span>
      </div>
      <div className="relative mx-12 mt-12 bg-white sm:mx-24 sm:mt-24">
        <Heading className="font-medium">GET A GLIMPSE</Heading>
        <p className="md:text-md pb-8 xs:text-sm xs:font-normal sm:text-lg md:font-normal">
          Photography is the simplest thing in the world, but it is incredibly
          complicated to make it really work
        </p>
        <div className="mx-auto h-full w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            id="myVideo"
            className="object-fit -z-1 bottom-0 left-0 right-0 w-full p-0"
          >
            <source src={props.video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  );
};
