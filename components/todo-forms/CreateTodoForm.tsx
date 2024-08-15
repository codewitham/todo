"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { createTodo } from "@/actions/todo.actions"
import { toast } from "../ui/use-toast"

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(200)
})


const CreateTodoForm = ({ close }: { close: () => void }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: ""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const res = await createTodo(values)
    if (res !== null) {
      close();
      return toast({ title: "Todo Created!" })
    } else {
      return toast({ title: "Soomething Went Wrong!" })
    }

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Do Homework..." {...field} />
              </FormControl>
              <FormDescription>
                Add a specific title for the task you want to do.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="type here..." {...field} />
              </FormControl>
              <FormDescription>
                describe your task.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className=" w-full">Submit</Button>
      </form>
    </Form>
  )
}

export default CreateTodoForm