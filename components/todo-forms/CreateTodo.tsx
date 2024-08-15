'use client';
import React, { useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button'
import CreateTodoForm from './CreateTodoForm'
import { Plus } from 'lucide-react'

const CreateTodo = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size={"icon"}>
          <Plus className='h-4 w-4' />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className=' mx-auto max-w-lg w-full'>
          <DrawerHeader>
            <DrawerTitle>New Todo</DrawerTitle>
            <DrawerDescription>Try to submit the form.</DrawerDescription>
          </DrawerHeader>

          <DrawerFooter className=' flex flex-col'>
            <CreateTodoForm close={handleOpen} />

            <Button onClick={handleOpen} variant={"outline"} className=' w-full'>Cancel</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default CreateTodo