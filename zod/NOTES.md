# ZOD

- TypeScript-first schema validation with static type inference

## References

- https://zod.dev/
- https://www.youtube.com/watch?v=L6BE-U3oy80
- https://www.codejourney.net/typing-api-responses-with-zod/
- https://www.youtube.com/watch?v=9N50YV5NHaE
- https://www.totaltypescript.com/tutorials/zod

```ts
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
```
