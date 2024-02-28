import React from 'react'
import ReviewDetails from './ReviewDetails'

const ReviewDetailsContainer = () => {
  return (
    <div
    className='w-full flex flex-col gap-[30px]'>
        <p
        className='text-[36px] font-[600]'>
            Review Details
        </p>
        <ReviewDetails />
    </div>
  )
}

export default ReviewDetailsContainer