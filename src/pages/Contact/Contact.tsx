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
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // You can replace this with your form submission logic
    const res = await fetch(
      'https://ymbqprhmdkzzxpsepiuu.supabase.co/functions/v1/store-messages',
      {
        method: 'POST',
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          number: values.phone,
          message: values.description,
        }),
      }
    );
    if (res.status === 200) {
      alert('Message sent successfully!');
      form.reset();
    }
  }
  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/WcmVqQZMpvHnCezTA?g_st=iw', '_blank');
  };
  return (
    <div className="relative mt-24 flex min-h-[calc(100vh+200px)] items-center justify-center md:mt-0">
      <div className="-z-1 absolute h-full w-full xs:hidden md:block">
        <img src={ContactImage} alt="" className="h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl rounded-lg bg-white bg-opacity-80 py-24 shadow-lg xs:w-[calc(100vw-2rem)] xs:p-4 sm:p-12 md:w-8/12">
        <h1 className="mb-6 text-center font-metropolis text-3xl font-bold">
          Contact Us!
        </h1>
        <p className="mb-8 text-center font-century text-gray-600">
          The promise to "get back to you as soon as possible" assures prompt
          attention to inquiries.
        </p>

        <div className="flex flex-col gap-8 font-century md:flex-row">
          <div className="w-full md:w-1/2">
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Your Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Name"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number *
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Phone"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="description"
                          placeholder="Message"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="ghost"
                  className="w-full bg-black text-white"
                >
                  Send
                </Button>

                {/* <div>
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
                <Button
                  variant={'ghost'}
                  className="w-full bg-black text-white"
                >
                  Send
                </Button> */}
              </form>
            </Form>
          </div>

          <div className="w-full space-y-4 md:w-1/2">
            <div className="flex items-center space-x-2 text-gray-600">
              <PhoneIcon className="h-5 w-5 text-orange-500" />
              <span>+91 9611809088 / 9632559088</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <LetterText className="h-5 w-5 text-orange-500" />
              <span>celebrationchapters@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPinIcon className="h-5 w-5 text-orange-500" />
              <span>
                Dr MV shetty Building, near RTO office, Old kent road
                Mangaluru-575001
              </span>
            </div>
            <div className="h-64 rounded-lg bg-gray-300">
              {/* Replace with actual map component or embed */}
              <div
                onClick={handleMapClick}
                className="flex h-full w-full cursor-pointer items-center justify-center rounded-3xl text-gray-500"
              >
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
          <h1 className="text-center font-metropolis text-3xl font-bold">
            Ready for your story?
          </h1>

          <Button
            onClick={() => window.open(FORM_URL, '_blank')}
            variant={'ghost'}
            className="mx-auto my-4 w-fit rounded-2xl border border-black px-6 py-5 font-century hover:border-white"
          >
            Let's get started
            <CircleArrowOutUpRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
