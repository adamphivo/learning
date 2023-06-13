import { z } from "zod";

const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/g;

export const ethereumAddressSchema = z.string().regex(ethereumAddressRegex);
