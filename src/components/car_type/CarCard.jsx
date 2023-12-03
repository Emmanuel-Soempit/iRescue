import React from 'react'

function CarCard({data}) {
    return (
        <div className={`w-[25%] cursor-pointer items-center pt-[3px] justify-between h-full ${data.bgColor} flex flex-col`}>

            <span className={`text-[11px] font-semibold ${data.textColor}`}>{data.name}</span>
            
            <img className='w-[90%] h-[60%] object-contain' src={data.src} />
        </div>
    )
}

export default React.memo(CarCard)
