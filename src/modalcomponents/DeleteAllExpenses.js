import React from 'react'
import { useExpense } from '@/contexts/ExpenseContext'
const CustomAllDeleteModal = ({ onClose }) => {

    const { removeAllExpenses } = useExpense()
    return (
        <div className='   w-56  md:w-80'>
            <div>
                <h4 className=' font-semibold text-center '>Are you sure you want to delete  All item from your Expense list?</h4>
                <div className=' flex gap-2 mt-10 justify-end'>
                    <button onClick={() => onClose()} className=' border-dark  text-dark font-semibold border text-sm rounded-md px-4 py-1'>
                        Cancel
                    </button>
                    <button onClick={() => { removeAllExpenses(), onClose() }} className=' bg-error text-white font-semibold text-sm rounded-md px-4 py-1'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomAllDeleteModal