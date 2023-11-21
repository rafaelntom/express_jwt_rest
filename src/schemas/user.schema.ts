import { z } from "zod";

const RequestBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.object({
    number: z.string({ required_error: "Please insert a key 'number'" }),
    ddd: z.string({ required_error: "Please insert a key 'ddd'" }),
  }),
});

type TUserPayload = z.infer<typeof RequestBodySchema>;

export { RequestBodySchema, TUserPayload };
