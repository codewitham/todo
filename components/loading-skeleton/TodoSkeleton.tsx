import React from 'react'
import { Card, CardHeader } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

const TodoSkeleton = () => {
  return (
    <div className=' flex flex-col gap-5'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <Skeleton className=' h-7 w-44 mb-2' />
            <Skeleton className='h-4 w-60' />
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

export default TodoSkeleton