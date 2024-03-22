import * as z from "zod"

const MAX_MB = 2;
const MAX_UPLOAD_SIZE = 1024 * 1024 * MAX_MB;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const base = z.object({
  content: z.string().optional()
});

export const addPostSchema = z
  .object({
    mode: z.literal("add"),
    picture: z
      .instanceof(File)
      .optional()
      .refine(
        (file) =>  !file || file.size <= MAX_UPLOAD_SIZE,
        `Max image size is ${MAX_MB}MB`
      )
      .refine(
        (file) => !file || file.type === "" || ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
  })
  .merge(base);

export const editPostSchema = z
  .object({
    mode: z.literal("edit"),
    picture: z
      .instanceof(File)
      .optional()
      .refine(
        (file) => !file || file.size <= MAX_UPLOAD_SIZE,
        `Max image size is ${MAX_MB}MB`
      )
      .refine(
        (file) =>
          !file || file.type === "" || ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
  })
  .merge(base);

export const postSchema = z.discriminatedUnion("mode", [
    addPostSchema,
    editPostSchema,
]);

export type PostSchema = z.infer<typeof postSchema>;

export interface Post {
    id: number;
    fullname: string;
    avatar: string;
    content: string | null;
    picture: string | null;
    comment_count: number;
    created_at: string;
}