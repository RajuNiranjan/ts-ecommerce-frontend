import React from 'react'
import OrderHistoryLists from './OrderHistoryLists'

const OrderHistoryContainer = () => {
  return (
    <div
    className='w-full'>

        <p
        className='text-[36px] font-[600]'>
            Order History
        </p>

        <OrderHistoryLists />

    </div>
  )
}

export default OrderHistoryContainer