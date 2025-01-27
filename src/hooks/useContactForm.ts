import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const contactFormSchema = z.object({
  subject: z.string().trim().optional().default("New submission - Develophir Contact Form"),
  message: z.string().trim().min(2, { message: "This field has to be filled." }),
  name: z.string().trim().optional(),
  email: z.string().trim().min(1, { message: "Please fill out your email." }).email({ message: "This is not a valid email." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const useContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_PUBLIC_API_URL}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: import.meta.env.VITE_PUBLIC_ACCESS_KEY,
        }),
      });

      const responseData = await response.json();
      if (responseData.success) {
        form.reset();
      } else {
        throw new Error(responseData.message || "Failed to send message");
      }

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
