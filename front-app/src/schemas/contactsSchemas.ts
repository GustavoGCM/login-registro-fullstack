import z from "zod";

export const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  phone_number: z.string(),
});

export type ContactData = z.infer<typeof contactSchema>;
