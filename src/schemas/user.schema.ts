import { z } from "zod";

const PhoneSchema = z.object({
  number: z.string(),
  ddd: z.string(),
});

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

const UserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: PhoneSchema,
  lastLogin: z.string().nullable(),
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const LoginSchema = UserSchema.pick({ password: true, email: true });

type TUserPayload = z.infer<typeof RequestBodySchema>;
type TUserResponse = z.infer<typeof UserSchema>;
type TLoginPayload = z.infer<typeof LoginSchema>;

export {
  RequestBodySchema,
  TUserPayload,
  UserSchema,
  TUserResponse,
  LoginSchema,
  TLoginPayload,
};
