import { query } from "../src/convex/_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("moonMessages").collect();
  },
});
