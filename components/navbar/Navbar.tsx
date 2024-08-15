import React from 'react'
import ModeToggle from '../mode-toggle/ModeToggle'
import Link from 'next/link'
import { Button } from '../ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { UserButton } from '@clerk/nextjs'
import { Github } from 'lucide-react'

const Navbar = () => {
    return (
        <div className=' w-full border-b'>
            <header className=' container mx-auto px-5 py-3 flex items-center gap-2 justify-between'>

                <Link href={"/"} className=' text-2xl font-bold'>
                    Todo
                </Link>

                <div className=' flex items-center gap-2'>
                    <ModeToggle />

                    <Link href={"/"}>
                        <Button size={"icon"} variant={"ghost"}>
                            <Github className='h-4 w-4' />
                        </Button>
                    </Link>

                    <UserButton signInUrl='/sign-in' />
                </div>
            </header>
        </div>
    )
}

export default Navbar