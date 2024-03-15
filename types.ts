import { z } from "zod";

export const Schema = z.object({ id: z.enum(["true", "false"]) });
