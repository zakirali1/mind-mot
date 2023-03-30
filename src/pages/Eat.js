import React, { useState, useEffect } from "react";
import MiniHero from "../components/MiniHero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import heroBackground from "../assets/hero-background.jpg";
import axios from "axios";
import moment from "moment";

///ARRAY OF SELECTED FRUIT TO DISPLAY
let fruits = [
  "apple",
  "grapes",
  "berries",
  "banana",
  "apricot",
  "orange",
  "olive",
];

//RANDOMLY SELECTING FRUIT OF THE DAY FROM THE ARRAY
let rand = Math.random();
let fruitsLength = fruits.length;
let randIndex = Math.floor(rand * fruitsLength);
let randomFruit = fruits[randIndex];

//// QUERY URL/PARAMETER FOR THE EDAMAM API
const baseUrl = "https://api.edamam.com/api/recipes/v2?type=public&";
const initialQ = `q=${randomFruit}&app_id=5f2a8aa2&app_key=36918ebfaad4deeaf3f3cbc14048f581`;

function Eat() {
  const [day, setDay] = useState();
  const [drink, setDrink] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [meaiType, SetMealType] = useState([]);
  const [moreInfo, setMoreInfo] = useState();
  const [label, setLAbel] = useState();
  const [calories, setCalories] = useState();

  //// GET THE DAY OF THE WEEK
  useEffect(() => {
    setDay(moment().format(" dddd "));
  }, [setDay]);

  //// SETTING VALUES FROM EDAMAN API
  useEffect(() => {
    axios.get(baseUrl + initialQ).then((response) => {
      console.log(response);
      setDrink(response.data.hits[0].recipe.images.REGULAR.url);
      setIngredients(response.data.hits[0].recipe.ingredientLines);
      SetMealType(response.data.hits[0].recipe.mealType);
      setMoreInfo(response.data.hits[0].recipe.url);
      setLAbel(response.data.hits[0].recipe.label);
      setCalories(response.data.hits[0].recipe.calories);
    });
  }, []);

  return (
    <div className="mainContainer">
      <div>
        <MiniHero backgroundImage={heroBackground}>
          <h1>Eat</h1>
        </MiniHero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>{day}</h1>
              <div>
                <h2>{label}</h2>{" "}
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <div>
                <img src={drink} alt="" />
              </div>

              <div>
                <h3>Ingredients</h3>

                <p>
                  {ingredients.map((i) => (
                    <li> {i}</li>
                  ))}
                </p>
              </div>

              <div>
                <h3>Meal Type</h3>
                <p>
                  {meaiType.map((m) => (
                    <li>{m}</li>
                  ))}{" "}
                </p>
                <p>
                  <li> calories : {calories} </li>
                </p>
              </div>

              <div>
                <h3>Furher details</h3>

                <a href={moreInfo} target="_blank" rel="noreferrer">
                  Click for more details
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Eat;
