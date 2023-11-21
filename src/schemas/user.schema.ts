import { z } from "zod";

const RequestBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.object({
    number: z.string({
      required_error: "Por favor, insira uma chave 'number'",
    }),
    ddd: z
      .string({ required_error: "Por favor, insira uma chave 'ddd'" })
      .max(2, {
        message: "Insira um DDD válido com no máximo 2 caracteres",
      }),
  }),
});

type TUserPayload = z.infer<typeof RequestBodySchema>;

export { RequestBodySchema, TUserPayload };
