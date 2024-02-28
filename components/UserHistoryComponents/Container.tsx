import React from 'react'
import SearchContainer from './SearchContainer'
import UserHistoryDetails from './UserHistoryDetails'

const Container = () => {
  return (
    <div
    className='w-full flex flex-col gap-[30px]'>
      <p
      className='text-[36px] font-[600]'>
        User History
      </p>
        <SearchContainer />
        <UserHistoryDetails />
    </div>
  )
}

export default Container