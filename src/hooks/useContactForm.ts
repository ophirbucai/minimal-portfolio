import { sendFormSubmission } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRecaptcha } from "./useRecaptcha";

export const contactFormSchema = z.object({
  subject: z.string().trim().optional().default("New submission - Develophir Contact Form"),
  message: z.string().trim().min(2, { message: "This field has to be filled." }),
  name: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please fill out your email." })
    .email({ message: "This is not a valid email." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const useContactForm = (containerId: string) => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
  });
  const { executeRecaptcha } = useRecaptcha({
    shouldLoad: form.formState.isDirty,
    containerId,
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const token = await executeRecaptcha();
      if (!token) throw new Error("Could not execute recaptcha");
      const result = await sendFormSubmission(data, token);
      if (result.success) {
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      throw new Error("Oh no! Something went wrong");
    }
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
