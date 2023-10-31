import { z } from "zod";

export const ApiResponseSchema = z.object({
  data: z.string(),
});

export type ApiResponse = z.output<typeof ApiResponseSchema>;
