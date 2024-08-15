"use client"

import { ITodos } from '@/types/types'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { editTodo } from '@/actions/todo.actions'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(200),
  isCompleted: z.boolean()
})

const EditTodo = ({ todo }: { todo: ITodos }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: todo.title || "",
      description: todo.description || "",
      isCompleted: todo.isCompleted || false
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const res = await editTodo({
      id: todo.id,
      ...values
    })

    console.log(res);

    if (res !== null) {
      router.push("/")
      return toast({ title: "Todo Updated!" })
    } else {
      return toast({ title: "Something Went Wrong!" })
    }

  }

  return (
    <Card className=' max-w-lg w-full'>
      <CardHeader>
        <CardTitle className=' text-2xl font-bold'>Edit Todo</CardTitle>
        <CardDescription>Manage your todo settings here.</CardDescription>
      </CardHeader>

      <CardContent>
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

            <FormField
              control={form.control}
              name="isCompleted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className=' h-4 w-4 rounded-[5px] '
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Mark Complete
                    </FormLabel>
                    <FormDescription>
                      You can check the box to mark the task as complete.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className=" w-full">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default EditTodo