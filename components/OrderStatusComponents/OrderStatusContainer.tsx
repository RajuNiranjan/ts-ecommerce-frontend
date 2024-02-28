import React from 'react'
import StatusDetails from './StatusDetails'

const OrderStatusContainer = () => {
  return (
    <div
    className='w-full'>

        <p
        className='text-[36px] font-[600]'>
            Order Status
        </p>

        <StatusDetails />

    </div>
  )
}

export default OrderStatusContainer