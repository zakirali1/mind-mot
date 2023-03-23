
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://zenquotes.io/api/quotes/random';
const proxyUrl = 'https://api.allorigins.win/raw?url='

 function Zenapi() {


    const [quotes, setQuotes] = useState([]);

   
    
    useEffect(() => {
        async function getquotes() {
            try {
                const response = await axios.get(proxyUrl + encodeURIComponent(baseUrl))
                
                console.log(response.data)
                
                     setQuotes(response.data[random])
                     
                
            } catch(err) {
                console.log(err);
            }
        }
        getquotes();
        
    },[])
   
    const random = Math.floor(Math.random() * 50);


 return (
        <div>
        <h1>{quotes.q}</h1>
        <h2>{quotes.a}</h2>
    </div>
 )


 }

export default Zenapi
