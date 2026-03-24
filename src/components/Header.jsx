import React from 'react'

function Header() {
  return (
    <div className='max-w-370 mx-auto px-4 h-16'>
        <div className='grid grid-cols-[30%_auto_30%] h-full items-center'>
            <ul className='grid grid-cols-2 place-items-center gap-4 font-audiowide text-xl cursor-pointer'>
                <li>Shoes</li>
                <li>Creators</li>
            </ul>
            <div className='flex items-center justify-center h-full'>
                <svg viewBox="0 0 37 36" className="w-16.5 h-full">
                    <path
                        d="M 37 36 C 34.319 36 31.8 34.714 30.228 32.541 L 10.597 5.412 C 8.137 2.013 4.196 0 0 0 L 32.731 0 L 37 0 L 37 36 Z"
                        fill="black"
                    />
                </svg>
                <div className='text-4xl tracking-widest px-4 font-bold bg-black h-full text-white flex items-center justify-center font-sakana'>HERIK</div>
                <svg viewBox="0 0 37 36" className="w-16.5 h-full">
                    <path
                        d="M 0 36 C 2.681 36 5.2 34.714 6.772 32.541 L 26.403 5.412 C 28.863 2.013 32.804 0 37 0 L 4.269 0 L 0 0 L 0 36 Z"
                        fill="black"
                    />
                </svg>
            </div>
            <ul className='grid grid-cols-2 place-items-center gap-4 font-audiowide text-xl cursor-pointer'>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header