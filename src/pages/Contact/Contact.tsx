import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  MapPinIcon,
  PhoneIcon,
  LetterText,
  CircleArrowOutUpRightIcon,
} from 'lucide-react';
import location from '@/assets/location_map.png';
import ContactImage from '.././../assets/contact.jpg';
import { Separator } from '@/components/ui/separator';
import { FORM_URL } from '@/utils/urls';
export const Contact = () => {
  return (
    <div className="relative mt-24 flex min-h-[calc(100vh+200px)] items-center justify-center md:mt-0">
      <div className="-z-1 absolute h-full w-full xs:hidden md:block">
        <img src={ContactImage} alt="" className="h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl rounded-lg bg-white bg-opacity-80 py-24 shadow-lg xs:w-[calc(100vw-2rem)] xs:p-4 sm:p-12 md:w-8/12">
        <h1 className="font-century mb-6 text-center text-3xl font-bold">
          Contact Us!
        </h1>
        <p className="font-metropolis mb-8 text-center text-gray-600">
          The promise to "get back to you as soon as possible" assures prompt
          attention to inquiries.
        </p>

        <div className="font-metropolis flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name *
                </label>
                <Input id="name" placeholder="Name" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <Input id="email" type="email" placeholder="Email" required />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number *
                </label>
                <Input id="phone" type="tel" placeholder="Phone" required />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description *
                </label>
                <Textarea id="description" placeholder="Message" required />
              </div>
              <Button variant={'ghost'} className="w-full bg-black text-white">
                Send
              </Button>
            </form>
          </div>

          <div className="w-full space-y-4 md:w-1/2">
            <div className="flex items-center space-x-2 text-gray-600">
              <PhoneIcon className="h-5 w-5 text-orange-500" />
              <span>470-601-1911</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <LetterText className="h-5 w-5 text-orange-500" />
              <span>Pagedone1234@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPinIcon className="h-5 w-5 text-orange-500" />
              <span>789 Oak Lane, Lakeside, TX 54321</span>
            </div>
            <div className="h-64 rounded-lg bg-gray-300">
              {/* Replace with actual map component or embed */}
              <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-3xl text-gray-500">
                <img
                  src={location}
                  alt="Map"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <Separator className="bg-black/40" />
        </div>
        <div className="w-full py-8 text-center">
          <h1 className="font-century text-center text-3xl font-bold">
            Ready for your story?
          </h1>

          <Button
            onClick={() => window.open(FORM_URL, '_blank')}
            variant={'ghost'}
            className="font-metropolis mx-auto my-4 w-fit rounded-2xl border border-black px-6 py-5 hover:border-white"
          >
            Let's get started
            <CircleArrowOutUpRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
