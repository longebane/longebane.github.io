import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    // You can put oxfmt (Prettier compatible) options here
    // e.g. singleQuote: true,
  },
  staged: {
    "*": "vp check --fix",
  },
  lint: { options: { typeAware: true, typeCheck: true } },
});
