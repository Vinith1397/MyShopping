import React from 'react'

const NewsLetter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed");
  }
  return (
    <div className='text-center'>
      <div className=' mt-10 justify-center items-center'>
        <p className='font-bold text-xl outfit-regular'>Subscribe to get 20% off on your first order</p>
        <form onSubmit={handleSubscribe} className='gap-2 sm:gap-0 flex items-center justify-center' >
        <input className='mt-5 mb-5 border border-black p-2 w-64 sm:w-1/2' type="email" placeholder='Enter your email' />
        <button className='bg-black text-white p-2'>Subscribe</button>
        </form>
        
      </div>
    </div>
  )
}

export default NewsLetter
