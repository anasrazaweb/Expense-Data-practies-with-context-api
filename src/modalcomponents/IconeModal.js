import React, { useState } from 'react';
import { IconData } from "@/app/mock/Icone";
import { Icon } from '@iconify/react';
import { useExpense } from '@/contexts/ExpenseContext';

const IconeModal = ({ onClose }) => {
    const itemsPerPage = 20; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const { setSelectedIcon } = useExpense();

    const totalPages = Math.ceil(IconData.length / itemsPerPage);
    const currentIcons = IconData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSelectIcon = (iconData) => {
        setSelectedIcon(iconData);
        onClose();
    };

    return (
        <div className=''>
            <div className='flex flex-wrap justify-center items-center w-[15rem] md:w-[25rem] rounded-lg'>
                {currentIcons.map((item) => (
                    <div key={item.id} className='flex flex-col items-center m-2'>
                        <div onClick={() => handleSelectIcon(item.icon)} className='h-7 md:h-10 w-7 md:w-10 bg-lite-purple-100 text-dark cursor-pointer flex justify-center items-center rounded-full'>
                            <Icon icon={item.icon} />
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-4 text-sm'>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='px-1 md:px-2 py-1 md:py-2 mx-1 rounded-full bg-dark text-white font-semibold text-xl'
                >
                    <Icon icon={"icon-park-outline:left"} />
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='px-1 md:px-2 py-1 md:py-2 mx-1 rounded-full bg-dark text-white font-semibold text-xl'
                >
                    <Icon icon={"icon-park-outline:right"} />
                </button>
            </div>
        </div>
    );
};

export default IconeModal;
