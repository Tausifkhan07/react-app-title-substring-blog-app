import React from 'react';

const Contact = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-[1240px] flex justify-center items-center py-[80px] gap-x-[45px]'>
        <div className='rounded'>
          <img className='rounded' src="../Images/img.jpg" alt="img" />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-4xl pb-[15px] text-[#00518f] text-center font-bold'>
            Get In Touch..
          </h1>

          <input className='p-[8px] bg-[#eee] rounded focus:outline-none focus:border-b-2 border-[#00518f] my-[10px] w-[450px]' type="text" placeholder='Enter Your Name' />
          <input className='p-[8px] bg-[#eee] rounded focus:outline-none focus:border-b-2 border-[#00518f] my-[10px] w-[450px]' type="text" placeholder='Enter Your Email' />
          <input className='p-[8px] bg-[#eee] rounded focus:outline-none focus:border-b-2 border-[#00518f] my-[10px] w-[450px]' type="text" placeholder='Enter Your Password' />
          <textarea className='p-[8px] bg-[#eee] rounded focus:outline-none focus:border-b-2 border-[#00518f] my-[10px] w-[450px]' rows={4} cols={40} placeholder='Type Some Message..' />
          <div className="flex justify-between items-center">
          <button class="rounded my-[10px] w-[150px] bg-[#00518f] text-white p-[10px] font-bold self-start">Button</button>
          <button class="rounded my-[10px] w-[150px] bg-[#C4261D] text-white p-[10px] font-bold self-end">Cancel</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact;