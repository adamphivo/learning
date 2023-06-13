import { z } from "zod";
import { ethereumAddressSchema } from "./ethereumAdress";
import { refinedStringSchema } from "./refinedString";

export const UserSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  age: z.number(),
  id: z.number(),
  uuid: z.string().uuid(),
  isAdmin: z.boolean(),
  face: z.string().emoji({ message: "SHOW ME YOUR BEST EMOJI" }),
  ethereumAddress: ethereumAddressSchema,
  description: refinedStringSchema,
});

export type User = z.infer<typeof UserSchema>;
