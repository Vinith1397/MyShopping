import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex items-center gap-2'>
        <p className='text-gray-500'>{text1}<span className='text-gray-900 font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-1  sm:h-2 bg-gray-200'></p>
    </div>
  )
}

export default Title
