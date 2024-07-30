import Nav from '@/components/ui/nav'
import { WordTransitions } from '@/components/ui/wordTransitions'
import React from 'react'

const PageOne = () => {
  return (
    <div className='bg-slate-50 w-screen h-screen'>
        <Nav />
        <WordTransitions />
    </div>
  )
}

export default PageOne