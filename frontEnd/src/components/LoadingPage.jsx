import React, { useEffect, useState } from 'react'

function LoadingPage({ onComplete }) {

    const [text, setText] = useState("")
    const fullText = "<Hello Word />"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0,index));
            index++;

            if(index > fullText.length){
                clearInterval(interval)
                
                setTimeout(()=> {
                    onComplete()
                }, 1000);
            }
        },100);

        return () => clearInterval(interval)
    }, [onComplete])

  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-300 flex flex-col items-center justify-center '>
        <div className='mb-4 text-4xl font-mono font-bold'>
           {text}<span className='animate-blink ml-1'>| </span> 
        </div>
        <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
            <div className='w-[40px] h-full bg-blue-300 shadow-[0_0_15px_#3b8] animate-loading-bar'>
                {" "}
            </div>
        </div>
    </div>
  )
}

export default LoadingPage