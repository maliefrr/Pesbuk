import { 
    getPosts,
    addPost,
    updatePost,
    deletePost
} from "./api";

import { 
    Post, 
    postSchema, 
    addPostSchema, 
    editPostSchema, 
    PostSchema 
} from "./type";

export { 
    getPosts,
    // getDetailBook,
    addPost,
    updatePost,
    deletePost,
    postSchema,
    addPostSchema,
    editPostSchema,
};
export type { Post, PostSchema };