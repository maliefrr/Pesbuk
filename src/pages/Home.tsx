import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { setAxiosConfig } from "@/utils/apis/axiosWithConfig";

import Navbar from "@/components/Navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { CustomFormField } from "@/components/customFormField"
import { PlusIcon, Image } from "lucide-react"
import { toast } from "sonner"
import Pattern from "@/assets/pattern.png"

import { Post, getPosts, addPost, PostSchema, postSchema } from "@/utils/apis/post";

import { format } from 'date-fns'


const Home = () => {

  const [open, setOpen] = useState(false);

  const [newPosts, setNewPosts] = useState<Post[]>([]);

  const form = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      content: "",
      picture: new File([], ""),
      mode: "add"
    },
  });

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      setOpen(false);
      form.reset();
    }
  }, [form.formState]);

  useEffect(() => {
    fetchNewPosts();
  }, [form.formState]);

  async function fetchNewPosts() {
    try {
      const result = await getPosts();
      setNewPosts(result.data);
    } catch (error) {
      toast((error as Error).message);
    }
  }

  const post = async (body: PostSchema) => {
    let token = localStorage.getItem('token');
    if (token) {
      setAxiosConfig(token)
    }
    try {
      const response = await addPost(body)
      toast(response.message)
    } catch (error) {
      toast((error as Error).message)
    }
  }

  return (
    <div style={{backgroundImage: `url(${Pattern})`}}>
      <Navbar />
      <div className="p-5 w-2/4 h-full flex flex-col mx-auto gap-10">
        {newPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>
              <div className="flex flex-1 gap-5 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="pesbuk" />
                  </Avatar>
                  { post.fullname }
                  <p className="font-thin text-xs text-slate-600">Posted on { format(post.created_at, 'd MMMM yyyy') }</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{ post.content }</p>
              { post.picture ? <img className="object-contain h-100 w-full" src={ post.picture } alt="pesbuk" /> : '' }
            </CardContent>
          </Card>
        ))}
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger>
          <Button className="bg-[#3360aa] hover:bg-[#3360aa] duration-500 rounded-full p-2 fixed bottom-5 right-5 mr-8 shadow-lg"><PlusIcon></PlusIcon></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-between items-center">
              <AlertDialogTitle>Add Post</AlertDialogTitle>
              <AlertDialogCancel className="bg-red-500 text-white hover:bg-red-600 duration-500">X</AlertDialogCancel>
            </div>
          </AlertDialogHeader>
          <AlertDialogDescription>
              <div className="flex flex-1 gap-5 items-start">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="pesbuk" />
                </Avatar>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(post)}>
                    <div className="mb-3">
                      <div className="relative w-full min-w-[200px]">
                        <CustomFormField
                          control={form.control}
                          name="content"
                        >
                          {(field) => (
                            <Textarea
                              {...field}
                              className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50" cols={200} rows={5}
                              placeholder="What's happening?..."
                              disabled={form.formState.isSubmitting}
                              aria-disabled={form.formState.isSubmitting}
                              value={field.value as string}
                            />
                          )}
                        </CustomFormField>
                        {/* <textarea name="content" placeholder="What's happening?"
                          className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50" cols={200} rows={5}></textarea> */}
                      </div>
                    </div>
                    <label htmlFor="upload" className="flex flex-col gap-2 cursor-pointer">
                      <Image></Image>
                    </label>
                    <CustomFormField
                      control={form.control}
                      name="picture"
                    >
                      {(field) => (
                        <Input
                          id = "upload"
                          className="hidden"
                          type="file"
                          accept="image/png, image/jpeg, image/jpg"
                          multiple={false}
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                          onChange={(e) =>
                            field.onChange(e.target.files ? e.target.files[0] : null)
                          }
                        />
                      )}
                    </CustomFormField>
                    <div className="text-end mt-3">
                      <Button className="mt-3 bg-blue-600 hover:bg-[#3360aa] duration-500 px-8" type="submit">Post</Button>
                    </div>
                  </form>
                </Form>
              </div>
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Home