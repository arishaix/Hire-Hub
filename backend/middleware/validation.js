const { z } = require('zod');

const registerSchema = z.object({
username: z.string().min(3),
email: z.email(),
password: z.string().min(8),
role: z.enum([
'candidate',
'recruiter'
]).optional()
});

const loginSchema = z.object({
email: z.email(),
password: z.string().min(8)
});

const jobSchema = z.object({
title: z
.string()
.min(3),

description: z
    .string()
    .min(10),

company: z
    .string()
    .min(2),

location: z
    .string()
    .min(2)

});

const applicationSchema =
z.object({
resume: z
.string()
.url()
.optional()
});

exports.validateJob = (
req,
res,
next
) => {
const result =
jobSchema.safeParse(
req.body
);

if (!result.success) {
    return res
        .status(400)
        .json({
            errors:
            result
            .error
            .issues
        });
}

next();

};

exports.validateApplication =
(
req,
res,
next
) => {

const result =
applicationSchema
.safeParse(
    req.body
);

if (!result.success) {
    return res
        .status(400)
        .json({
            errors:
            result
            .error
            .issues
        });
}

next();

};
exports.validateRegister = (
req,
res,
next
) => {
const result =
registerSchema.safeParse(
req.body
);

if (!result.success) {
    return res
        .status(400)
        .json({
            errors:
                result.error.issues
        });
}

next();

};

exports.validateLogin = (
req,
res,
next
) => {
const result =
loginSchema.safeParse(
req.body
);

if (!result.success) {
    return res
        .status(400)
        .json({
            errors:
                result.error.issues
        });
}

next();

};
