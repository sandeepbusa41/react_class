import axios from "axios";
import { useEffect, useState } from "react";
import './dropdown.css';  // Assuming you have a CSS file for styling

function DropDown2() {
  const [data, setData] = useState([]);
  const [filter,setFilter]=useState('ALL');
  const [alldata,setAlldata]=useState(['ALL'])

  useEffect(() => {
    apidata();
    all()
  }, []);

  const apidata = async () => {
    const response = await axios.get('https://dummyjson.com/recipes');
    setData(response.data.recipes);
  };

  const all = async () => {
    const response = await axios.get('https://dummyjson.com/recipes');
    setAlldata([...alldata,...response.data.recipes]);
  };


  const changedata= async (rec) => {
    const changedres = await axios.get(`https://dummyjson.com/recipes/search?q=${rec}`);
    setData(changedres.data.recipes);
  };


  function handlechange(event){
    const optionselected=event.target.value
    console.log(optionselected)
    setFilter(optionselected)
    if(optionselected==='ALL'){
        apidata()
    }
    else{
        changedata(optionselected)
    }






  }






  return (
    <>


       <select value={filter} onChange={handlechange}>

        {
            alldata.map((eachname)=>{
                return(<option value={eachname.name}>{eachname.name}</option>)

            })
        }




       </select>
      <h1 className="title">Recipes</h1>
      <div className="container">
        {data.map((eachrecipe) => (
          <div className="recipe-card" key={eachrecipe.id}>
            <img
              src={eachrecipe.image}
              alt={eachrecipe.name}
              className="recipe-img"
              height={200}
              width={200}/>
            <h2>{eachrecipe.name}</h2>
            <p><strong>Cuisine:</strong> {eachrecipe.cuisine}</p>
            <p><strong>Difficulty:</strong> {eachrecipe.difficulty}</p>
            <p><strong>Prep Time:</strong> {eachrecipe.prepTimeMinutes} minutes</p>
            <p><strong>Cook Time:</strong> {eachrecipe.cookTimeMinutes} minutes</p>
            <p><strong>Servings:</strong> {eachrecipe.servings}</p>
            <p><strong>Calories per Serving:</strong> {eachrecipe.caloriesPerServing}</p>
            <p><strong>Rating:</strong> {eachrecipe.rating} ({eachrecipe.reviewCount} reviews)</p>
            <h3>Ingredients:</h3>
            <ul>
              {eachrecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {eachrecipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <p><strong>Tags:</strong> {eachrecipe.tags.join(', ')}</p>
            <p><strong>Meal Type:</strong> {eachrecipe.mealType.join(', ')}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DropDown2;
