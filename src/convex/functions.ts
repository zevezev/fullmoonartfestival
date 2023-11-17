import { v } from "convex/values";
import { mutation } from "./_generated/server";

// Create a new task with the given text
export const createMoonMessage = mutation({
  args: { message: v.string(), author: v.string() },
  handler: async (ctx, args) => {
    const newMessageId = await ctx.db.insert("moonMessages", args);
    return newMessageId;
  },
});