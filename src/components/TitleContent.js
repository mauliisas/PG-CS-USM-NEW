import React from 'react'

const TitleContent = ({ children }) => {
    return (
        <div className='bg-title-header h-[156px] flex items-center'>
            <div className='layout'>
            <span className='font-extrabold text-5xl uppercase'>{children}</span>
            </div>
        </div>
    )
}

export default TitleContent