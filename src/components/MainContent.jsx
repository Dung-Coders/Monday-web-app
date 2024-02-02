import React from 'react'
import '../App.css'

function MainContent() {
  return (
    <div className='flex flex-col w-screen items-center justify-center bg-green-300 mt-1'>
        <h1 className='flex w-full h-screen items-center justify-center'>Main Contents</h1>
        <p className='font-bold text-red-500 mb-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Minima voluptates minus quae. Corporis dignissimos quae placeat, 
            aspernatur magnam eos velit reprehenderit dicta temporibus alias odio? 
            Mollitia temporibus sit esse inventore!
            Eum nihil aliquid, alias consequatur nemo dolorum illum porro sapiente 
            dolores optio cupiditate error quibusdam sequi pariatur fuga aliquam repellat. 
            Corrupti eos quia atque ipsam qui suscipit! Eum, ducimus consectetur?
        </p>
    </div>
  )
}

export default MainContent