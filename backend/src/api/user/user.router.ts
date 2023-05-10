import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator"

import * as UserService from "./user.router.ts"

// We are using express-validator to validate whether requests should be successful.
// You can read more about it here: https://express-validator.github.io/docs/guides/getting-started



// REST endpoints for user related operations will follow beneath: