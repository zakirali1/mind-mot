import React, {useState, useEffect } from "react";
import MiniHero from "../components/MiniHero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import heroBackground from "../assets/hero-background.jpg";
import axios from "axios";
import moment from "moment";






///ARRAY OF SELECTED FRUIT TO DISPLAY
let fruits = ["apple", "grapes", "berries", "banana", "apricot", "orange", "olive" ];

//RANDOMLY SELECTING FRUIT OF THE DAY FROM THE ARRAY
let rand = Math.random();
let fruitsLength = fruits.length;
let randIndex = Math.floor(rand * fruitsLength)
let randomFruit = fruits[randIndex]
 




//// QUERY URL/PARAMETER FOR THE EDAMAM API
const baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public&'
const initialQ = `q=${randomFruit}&app_id=5f2a8aa2&app_key=36918ebfaad4deeaf3f3cbc14048f581`


function Eat() {


 const [day, setDay] = useState()
  const [drink, setDrink] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [meaiType, SetMealType] = useState([]);
  const [moreInfo, setMoreInfo] = useState();
  const [label, setLAbel] = useState();
  const [calories, setCalories]= useState();
  

  

  
  //// GET THE DAY OF THE WEEK
  useEffect(() =>{

    setDay(moment().format(" dddd "))

  },[setDay])
 

  //// SETTING VALUES FROM EDAMAN API
  useEffect (() => {
    axios.get(baseUrl + initialQ)
    .then((response)=> {

      console.log(response)
      setDrink(response.data.hits[0].recipe.images.REGULAR.url)
      setIngredients(response.data.hits[0].recipe.ingredientLines)
      SetMealType(response.data.hits[0].recipe.mealType)
      setMoreInfo(response.data.hits[0].recipe.url)
      setLAbel((response.data.hits[0].recipe.label))
      setCalories((response.data.hits[0].recipe.calories))

    })
    

  }, [])






  return (
        <div className="mainContainer">
    <div>
      <MiniHero backgroundImage={heroBackground}>
        <h1 className="pillarTitleName">Eat</h1>
      </MiniHero>
      <Container style={{ marginTop: 30 }}>
      
        <Row>
          <Col size="md-12">
            <h1>Your {day} Recipe</h1>
           <h2>{label}</h2> 
  
        
            <div>
            <img src={drink} className="drinkImage" alt=""/>
             
            </div>

            <div>
              <h3 className="mainBodyText">Ingredients</h3>

              <p className="mainBodyText">{ingredients.map((i)=> (<li> {i}</li>))}</p>

            </div>

            <div>
            <br></br>
              <h3 className="mainBodyText">Meal Type</h3>
              <p className="mainBodyText">{meaiType.map((m)=> (<li>{m}</li>))} </p> 
              <p className="mainBodyText"><li> calories : {" "}{calories} </li></p>
              
            </div>

            <div>
             <br></br>
               <h3 className="mainBodyText"><a href={moreInfo} className="moreInfoRecipe">Click for more details</a></h3>
                
            </div>

          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default Eat;
