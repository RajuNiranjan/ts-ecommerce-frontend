import Image from 'next/image'
import React from 'react'
import tempImage from './icons/material-symbols_image.png'

const OrderDetails = () => {
  return (
    <div
    className='w-full bg-white p-[32px] drop-shadow-md rounded-[16px] flex flex-col gap-[32px] mt-[30px]'>

        <p
        className='text-[36px] font-[600]'>
            Customer Details
        </p>

        <div
        className='w-full flex justify-between gap-[20px] flex-wrap'>

            <div
            className='w-[760px] flex flex-col gap-[24px]'>

                <div
                className='w-full flex items-center justify-between'>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Customer name
                        </p>

                        <input 
                        type="text"
                        placeholder='John Doe'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Username
                        </p>

                        <input 
                        type="text"
                        placeholder='#123456'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                </div>

                <div
                className='w-full flex items-center justify-between'>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Email
                        </p>

                        <input 
                        type="text"
                        placeholder='xyz@gmail.com'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Mobile number
                        </p>

                        <input 
                        type="text"
                        placeholder='123-456-789'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                </div>

                <p
                className='text-[24px] font-[600]'>
                    Address details
                </p>

                <div
                className='w-full flex items-center justify-between'>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            House no/Flat no
                        </p>

                        <input 
                        type="text"
                        placeholder='Enter your house no'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Landmark
                        </p>

                        <input 
                        type="text"
                        placeholder='123-456-789'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                </div>

                <div
                className='w-full flex items-center justify-between'>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Address line 1
                        </p>

                        <input 
                        type="text"
                        placeholder='Address line 1'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Address line 2
                        </p>

                        <input 
                        type="text"
                        placeholder='Address line 2'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                </div>

                <div
                className='w-full flex items-center justify-between'>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Pincode
                        </p>

                        <input 
                        type="text"
                        placeholder='123-456'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            City
                        </p>

                        <input 
                        type="text"
                        placeholder='Baripada'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                </div>

                <div
                className='w-full flex items-center justify-between'>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            State
                        </p>

                        <input 
                        type="text"
                        placeholder='Odisha'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                </div>

                <p
                className='text-[24px] font-[600]'>
                    Payment details
                </p>

                <div
                className='w-full flex items-center justify-between'>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Pyment method
                        </p>

                        <input 
                        type="text"
                        placeholder='Net banking'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Payment date
                        </p>

                        <input 
                        type="text"
                        placeholder='November 7, 2017'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                </div>

                <div
                className='w-full flex items-center justify-between'>

                    <div
                    className='flex flex-col gap-[8px]'>

                        <p
                        className='text-[16px]'>
                            Transaction ID
                        </p>

                        <input 
                        type="text"
                        placeholder='123-456'
                        className='outline-none border border-[#71a7ef] w-[330px] rounded-[4px] p-[10px]'/>

                    </div>

                </div>

            </div>

            <div
            className='flex flex-col gap-[32px] w-[360px]'>

                <Image
                src={tempImage}
                alt='Temp Image'
                width={360}
                height={360}
                className='w-[360px] h-[360px] object-cover rounded-[30px]' />

                <div
                className='flex flex-col gap-[64px] w-full'>

                    <div
                    className='w-full flex flex-col gap-[8px]'>

                        <p
                        className='text-[24px] font-[600] capitalize'>
                        or sit voluptatem antium doloremque laudantium, to
                        </p>
                        <p
                        className='text-[14px] capitalize'>
                        or sit voluptatem antium doloremque laudantium, to
                        </p>

                    </div>

                    <button
                    name='Order delivery button'
                    className='w-full text-center p-[10px] rounded-[8px] bg-[#196fe1] text-white text-[18px] font-[500]'>
                        Order delivery date
                    </button>

                </div>

            </div>

        </div>

    </div>
  )
}

export default OrderDetails