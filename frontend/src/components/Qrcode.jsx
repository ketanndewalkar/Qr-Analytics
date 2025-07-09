import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Qrcode = () => {
  useGSAP(() => {
    gsap.from(".qrcode",{
        duration: 1,
        scale: 0.5,
        opacity: 0,
        ease: "back.out(1.7)",
    })
  },[])
    return (
    <div className='w-full h-full p-[0.6vw] overflow-hidden'>
      <div className='size-full p-[1vw] rounded-lg flex flex-col gap-[1vw]'>
      <h1 className="text-[1vw] font-semibold h-[2.2vw] flex items-center"><p>{">"} QrCode</p></h1>
      <div className='size-full flex items-center justify-center'>
            <div className='flex justify-center items-center qrcode'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className='w-[40vw]'/>
            </div>
      </div>
      
      </div>
    </div>
  )
}

export default Qrcode