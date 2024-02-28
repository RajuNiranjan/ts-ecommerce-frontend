import React from 'react'
import OrderDetails from './OrderDetails'

const OrderDetailsContainer = () => {
  return (
    <div
    className='w-full'>

        <p className='text-[36px] font-[600]'>
            Order Details
        </p>

        <OrderDetails />

    </div>
  )
}

export default OrderDetailsContainer