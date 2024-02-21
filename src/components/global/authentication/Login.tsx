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

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <div className="login px-96 md:px-10 sm:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          <Button variant="login" type="submit" className="w-full">
            Log in
          </Button>
        </form>
      </Form>
      <Button variant="create" className="w-full my-8">
        Create new account
      </Button>
      <Button variant="forget" className="w-full">
        Forgot Password?
      </Button>
    </div>
  );
}
