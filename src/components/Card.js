import React, { useState } from 'react'

const Card = ({card, deleteCard}) => {
    const [isModelOpen, setModalOpen] = useState(false);

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete')){
            deleteCard(card.id);
        }
    }


  return (
    <div className='card max-w-[404px] w-full h-[300px] bg-[#ffffff] flex flex-col gap-2 justify-center items-center rounded-lg ' onClick={() => setModalOpen(!isModelOpen)}>
        <img src={card.download_url} alt='random' className='w-[310px] h-[180px] rounded-lg cursor-pointer' />
        {isModelOpen && (
            <div className='modal flex flex-col items-center gap-1'>
                <span className='close cursor-pointer text-center rounded-lg bg-[#FA782F] font-extrabold text-[20px] w-[40px] h-[30px] hover:bg-[#f6620d]' onClick={() => setModalOpen(false)}>
                    &times;
                </span>
            {/* <img src={card.download_url} alt='random' /> */}
                <div className=' flex gap-2 font-bold'>
                    <div>{card.author}</div>
                    <div>W : {card.width}</div>
                    <div>H : {card.height}</div>
                </div>
                <button onClick={handleDelete} className=' font-bold bg-[#FA782F] hover:bg-[#f15f0b] rounded-lg p-1 w-[100px]' >Delete card</button>
            </div>
        )}
    </div>
  )
}

export default Card
