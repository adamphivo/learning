import crypto from "crypto";
import { z } from "zod";
import { UserSchema } from "./schemas/user";
import type { User } from "./schemas/user";
import { getRessource } from "./fetchRessource";

console.log("Hello Zod !");

// Creating a schema
const stringSchema = z.string();

// pasrsing
stringSchema.parse("tuna");
// stringSchema.parse(12); // Will throw a ZodError
// const check = stringSchema.safeParse(12); // Will not throw an error but gives us an object with the result of the parsing operation
// if (!check.success) {
//   console.log(check.error);
// }

const newUser: User = {
  username: "Adam",
  age: 27,
  id: 1,
  email: "test@test.test",
  isAdmin: false,
  uuid: crypto.randomUUID(),
  face: "😀",
  ethereumAddress: "0xe53023347b757a04e4130ae8948f1fb7b2632d9e",
  description: "test123tototest",
};

UserSchema.parse(newUser);

async function main() {
  getRessource();
}

main();
