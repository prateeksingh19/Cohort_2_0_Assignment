const zod = require("zod");

const createBusinessCardSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  interest: zod.string(),
  linkedIn: zod.string(),
  twitter: zod.string(),
  other: zod.string(),
});

const updateBusinessCardSchema = zod.object({
  id: zod.string(),
});

module.exports = {
  createBusinessCard: createBusinessCardSchema,
  updateBusinessCard: updateBusinessCardSchema,
};
