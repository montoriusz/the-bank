import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
  /*
   * Server side Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    NODE_ENV: z
      .union([
        z.literal("development"),
        z.literal("test"),
        z.literal("production"),
      ])
      .default("development"),
    // DATABASE_URL: z
    //   .string()
    //   .min(1)
    //   .transform((value) => {
    //     // Transform connections string to according: https://orm.drizzle.team/kit-docs/conf#headlessui-tabs-panel-:R3a6qb6:
    //     return value.replace(
    //       "sslaccept=strict",
    //       'ssl={"rejectUnauthorized":true}',
    //     );
    //   }),
    // CLERK_SECRET_KEY: z.string().min(1),
    // PUSHER_APP_ID: z.string().min(1),
    // PUSHER_KEY: z.string().min(1),
    // PUSHER_SECRET: z.string().min(1),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    // NEXT_PUBLIC_PUSHER_KEY: z.string(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    // DATABASE_URL: process.env.DATABASE_URL,
    // CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
    //   process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    // NEXT_PUBLIC_PUSHER_KEY: process.env.NEXT_PUBLIC_PUSHER_KEY,
    // PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    // PUSHER_KEY: process.env.PUSHER_KEY,
    // PUSHER_SECRET: process.env.PUSHER_SECRET,
  },
});
