import React from 'react';

function Button({children,...props}) {
  return (
    <button
      {...props}
      className='rounded-md outline-none border-none w-[120px] h-[40px] font-bold hover:bg-sky-400 text-white bg-gradient-to-r hover:bg-gradient-to-l from-sky-400 to-blue-500'
    >
      {children}
    </button>
  );
}

export default Button;
