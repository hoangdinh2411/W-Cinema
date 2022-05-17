import React from 'react';

function Button({children}, props) {
  return (
    <button
      {...props}
      className='rounded-md outline-none border-none w-[120px] h-[40px] font-bold hover:bg-sky-400 text-white bg-sky-600'
    >
      {children}
    </button>
  );
}

export default Button;
