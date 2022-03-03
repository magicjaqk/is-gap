import { z } from "zod";
import { createRouter } from "../createRouter";

export const helloRouter = createRouter()
  // read
  .query("get", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    },
  });
