'use server';

import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getAllTodos() {
  try {
    const user = await currentUser();
    if (!user) {
      return null;
    }

    const todos = await prisma.todo.findMany({
      where: {
        userId: user.id
      },
      orderBy: {
        createdAt: "desc"
      }
    })


    return todos;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getSingleTodo(id: string) {
  try {
    const user = await currentUser();
    if (!user) {
      return null;
    }

    const todo = await prisma.todo.findUnique({
      where: {
        id,
        userId: user.id
      }
    })

    return todo;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createTodo(data: { title: string, description: string }) {
  try {
    const user = await currentUser();
    if (!user) {
      return null;
    }

    const todo = await prisma.todo.create({
      data: {
        title: data.title,
        description: data.description,
        userId: user.id,
        isCompleted: false
      }
    })

    revalidatePath("/")

    return todo;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function editTodo(data: { id: string, title: string, description: string, isCompleted: boolean }) {
  try {
    const user = await currentUser();
    if (!user) {
      return null;
    }

    const editTodo = await prisma.todo.update({
      where: {
        id: data.id,
        userId: user.id
      },
      data: {
        title: data.title,
        description: data.description,
        isCompleted: data.isCompleted
      }
    })

    revalidatePath("/")

    return editTodo;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteTodo(id: string) {
  try {
    const user = await currentUser();
    if (!user) {
      return null;
    }

    const deleteTodo = await prisma.todo.delete({
      where: {
        id,
        userId: user.id
      }
    })

    revalidatePath("/")

    return deleteTodo;
  } catch (error) {
    console.log(error);
    return null;
  }
}