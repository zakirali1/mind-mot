import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./style.css";

const baseUrl = 'https://zenquotes.io/api/quotes/random';
const proxyUrl = 'https://api.allorigins.win/raw?url='

 function Zenapi() {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function getquotes() {
            try {
                const response = await axios.get(proxyUrl + encodeURIComponent(baseUrl))
                
                console.log(response.data)
                setTimeout(() => {
                    setQuotes(response.data[random])
                }, 30000)
                    //  setQuotes(response.data[random])
                     
                
            } catch(err) {
                console.log(err);
            }
            
        }
        getquotes();
        
    },[quotes])
   
    const random = Math.floor(Math.random() * 50);


 return (
        <div>
        <h1 className="zenQuote">{quotes.q}</h1>
        <h2 className="zenAuth">{quotes.a}</h2>
    </div>
 )


 }

export default Zenapi
