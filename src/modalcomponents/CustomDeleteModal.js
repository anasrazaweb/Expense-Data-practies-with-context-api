import React from 'react'

const CustomDeleteModal = ({ onClose, removeExpense, itemID }) => {
    return (
        <div className='  w-56  md:w-80'>
            <div>
                <h4 className=' font-semibold text-center '>Are you sure you want to delete this item from your Expense list?</h4>
                <div className=' flex gap-2 mt-10 justify-end'>
                    <button onClick={() => { onClose() }} className=' border-dark border rounded-md text-dark text-sm font-semibold px-4 py-1'>
                        Cancel
                    </button>
                    <button onClick={() => { removeExpense(itemID), onClose() }} className=' bg-error text-white rounded-md text-sm font-semibold px-4 py-1'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomDeleteModal