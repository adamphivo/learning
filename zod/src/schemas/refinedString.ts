import { z } from "zod";

const validator = (val: string): boolean => {
  return val.length > 10 && val.length < 20 && val.includes("toto") && val.includes("test");
};

export const refinedStringSchema = z.string().refine(validator, {
  message: "String must be more than 10 char long, less than 20 char long, includes toto and includes test",
});
