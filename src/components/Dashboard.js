import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import AddCardForm from './AddCardForm';

const Dashboard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Fetch random images from Lorem Picsum API using axios
        axios.get('https://picsum.photos/v2/list?page=1&limit=6')
            .then(response => setCards(response.data))
            .catch(err => console.error("error fetching data : " , err));
    }, []);

    const addCard = newCard => {
        setCards(prevCards => [...prevCards, {id: Date.now(), ...newCard}]);
    }

    const deleteCard = cardId => {
        setCards(prevCards => prevCards.filter(card => card.id !== cardId));
    }


  return (
    <div className='flex flex-col gap-6 pt-10'>
        <AddCardForm addCard={addCard} />
        <div className=' flex flex-wrap justify-center items-center md:items-start gap-5'>
            {
            cards.map(card => (
                <Card key={card.id} card={card} deleteCard={deleteCard} />
            ))
            }
        </div>
    </div>
  )
}

export default Dashboard
