import { IResponse } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { checkProperty, valueFormatData } from "@/utils/formatter";
import { PostSchema } from "./type";

export const getPosts = async () => {
    try {
      const response = await axiosWithConfig.get('/posts');
  
      return response.data as IResponse;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
};

export const addPost = async (body: PostSchema) => {
    try {
      const formData = new FormData();
      let key: keyof typeof body;
      for (key in body) {
        if (checkProperty(body[key])) {
          formData.append(key, valueFormatData(body[key]));
        }
      }
  
      const response = await axiosWithConfig.post(`/posts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      return response.data as IResponse;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
};

export const updatePost = async (body: PostSchema, post_id: number) => {
    try {
      const formData = new FormData();
      let key: keyof typeof body;
      for (key in body) {
        if (checkProperty(body[key])) {
          formData.append(key, valueFormatData(body[key]));
        }
      }
  
      const response = await axiosWithConfig.put(`/posts/${post_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      return response.data as IResponse;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
};

export const deletePost = async (post_id: string) => {
    try {
      const response = await axiosWithConfig.delete(`/posts/${post_id}`);
  
      return response.data as IResponse;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
};