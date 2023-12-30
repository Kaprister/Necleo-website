import React, { useState } from 'react'

const AddCardForm = ({addCard}) => {
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (imageUrl.trim() === '') {
            window.alert('Please provide a valid Image URL');
            return;
        }

        addCard({download_url: imageUrl});
        setImageUrl('');
    }

  return (
    <form onSubmit={handleSubmit} className='pl-10 flex gap-2 items-center justify-center'>
        <label className=' font-bold flex gap-2'>
            Image URL :
            <input type='text' className='w-full p-1 rounded-md text-center bg-[#FA782F] opacity-[40%] ' value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
        </label>
        <button type='submit' className=' font-bold border border-solid bg-[#FA782F] rounded-md p-1 m-1 hover:bg-[#f06718]'>Add Card</button>
    </form>
  )
}

export default AddCardForm
