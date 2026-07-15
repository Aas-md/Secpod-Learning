import * as z from "zod";

export const StudentSchema = z.object({
    name: z.string().min(3, { message: "Name should be >= 3 characters" }).regex(/^[a-zA-Z ]+$/, { message: "Name should only contains characters" })
        .max(12, { message: "Name can not be longer than 12 chars" }),
    age: z.number().min(1).max(100),
    profession: z.string().min(3)
})