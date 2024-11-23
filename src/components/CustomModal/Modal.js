import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed bgColor bg-opacity-80 flex justify-center items-center bg-blur-xl inset-0 z-50 h-screen w-screen overflow-hidden'>
            <div className='bg-white rounded-md p-5 md:p-10 relative'>
                {/* <button onClick={onClose} className="absolute top-2 right-2 text-xl">X</button> */}
                {children}
            </div>
        </div>
    );
};

export default Modal;
