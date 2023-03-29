import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./style.css";
// import animate css
import "animate.css";
import moment from 'moment';

const baseUrl = 'https://zenquotes.io/api/quotes/random';
const proxyUrl = 'https://api.allorigins.win/raw?url='

 function Zenapi() {

    const [quotes, setQuotes] = useState({
        
            q: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe",
            a: "Abraham Lincoln"
        
    });

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
        <div>
            <h2> {(moment().format(" dddd, MMMM Do YYYY "))}</h2> 
        </div>

        <div className="align-items-center quoteContainer">
            <div className="zenQuote">{quotes.q}</div>
            <div className="zenAuth">{quotes.a}</div>
        </div>
    </div>
        
 )


 }

export default Zenapi
