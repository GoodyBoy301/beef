import type { Answer, Result, Sources } from "./app.contract.d.ts";

export const grants = "";

const sources: Sources = {
  greeting: (): Result<"greeting"> => ({
    text: "LEGENDS ARE MADE IN THE ARENA.",
  }),
};

export const answer: Answer = (source, args, store, storage, native) =>
  sources[source](args, store, storage, native);
