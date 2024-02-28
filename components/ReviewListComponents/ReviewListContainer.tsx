import React from 'react'
import SearchContainer from './SearchContainer'
import ReviewLists from './ReviewLists'

const ReviewListContainer = () => {
  return (
    <div
    className='w-full flex flex-col gap-[30px]'>
        <p
        className='text-[36px] font-[600]'>
            Review List
        </p>
        <SearchContainer />
        <ReviewLists />
    </div>
  )
}

export default ReviewListContainer