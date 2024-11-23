"use client"
import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import Modal from '../CustomModal/Modal'
import CustomAllDeleteModal from '@/modalcomponents/DeleteAllExpenses'
import { useExpense } from '@/contexts/ExpenseContext'

const SubHeader = () => {


    const { formData } = useExpense();
    const [isOpenModal, setIsOpenModal] = useState({ AllExpensesDelete: false, });

    const handleModalOpen = (type) => {
        setIsOpenModal({ [type]: true });
    };

    const handleModalClose = () => {
        setIsOpenModal({ AllExpensesDelete: false });
    }

    const AllWallet = () => {
        return (
            <div className=' text-sm border flex items-center gap-2 px-2 py-2 shadow-md rounded-md  w-32 cursor-pointer  '>
                <Icon icon="ic:baseline-menu" fontSize="27px" className=' text-dark' />
                <span className=' select-none font-semibold'>All Wallet</span>
            </div>
        )
    }
    const ClearBtn = () => {
        return (
            <>
                <button
                    onClick={() => handleModalOpen("AllExpensesDelete")}
                    className=' bg-transparent border-2 rounded-md text-sm font-semibold border-dark px-5 shadow-md text-dark py-[2px]'>
                    Clear All
                </button>
                <Modal isOpen={isOpenModal.AllExpensesDelete}>
                    <CustomAllDeleteModal onClose={handleModalClose} />
                </Modal>
            </>
        )
    }
    return (
        <div className=' mt-5 md:mt-10 flex justify-between'>
            <AllWallet />
            {
                formData.length > 0 &&
                <ClearBtn />
            }

        </div>
    )
}

export default SubHeader