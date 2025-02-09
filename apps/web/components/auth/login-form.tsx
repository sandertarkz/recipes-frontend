"use client";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@workspace/api";
import { handleApiFormErrors } from "@/lib/handle-api-form-errors";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function LoginForm({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) =>
      authApi.createUserLoginPost({ userLogin: values }),
    onSuccess: () => {
      form.reset();
      console.log("Login successful!");
    },
    onError: async (error: any) => {
      handleApiFormErrors(error, form);
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    return mutation.mutate(values);
  };
  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormDescription>
                <Link
                  href="/reset-password"
                  className="underline underline-offset-4"
                >
                  Forgot your password?
                </Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
}
