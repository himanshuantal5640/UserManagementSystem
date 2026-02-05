// Simple Definition
// Zod is a schema validation library used to define and validate the shape of data.
// Simple Definition 
// Zod is a schema validation library used to define and validate the shape of data.

// In simple words:

// You define rules once
// Zod checks data against those rules
// If data is invalid → it throws errors


// Declarative (rules are readable)

// Centralized validation

// Great error messages

// Used as DTO + Validator
const { z } = require("zod");

const userSchema = z.object({
  name: z.string(),
  email: z.string()
});

const createUserSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email format")
});

const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional()
});

module.exports = {
  userSchema,
  createUserSchema,
  updateUserSchema
};
