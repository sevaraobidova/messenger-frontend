"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50),
  surname: z
    .string()
    .min(2, { message: "Surname must be at least 2 characters." })
    .max(50),
  email: z.string().email({ message: "Invalid email adress" }).max(50),
  password: z
    .string()
    .min(6, { message: "The password must be at least 6 characters." })
    .refine((value) => /[A-Z]/.test(value), {
      message: "The password must contain at least one uppercase letter.",
    })
    .refine((value) => /\d/.test(value), {
      message: "The password must contain at least one number.",
    }),
});

// const requiredSchema = formSchema.required();

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <div className="register px-96 md:px-10 sm:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your name..." {...field} />
                </FormControl>
                <FormMessage className="text-red-500 text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your surname..." {...field} />
                </FormControl>
                <FormMessage className="text-red-500 text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email..." {...field} />
                </FormControl>
                <FormMessage className="text-red-500 text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password..." {...field} />
                </FormControl>
                <FormMessage className="text-red-500 text-xl" />
              </FormItem>
            )}
          />
          <Button variant="create" type="submit" className="w-full">
            Create new account
          </Button>
        </form>
      </Form>
      <Button variant="login" className="w-full my-8">
        Log in
      </Button>
      <Button variant="forget" className="w-full">
        Forgot Password?
      </Button>
    </div>
  );
}
