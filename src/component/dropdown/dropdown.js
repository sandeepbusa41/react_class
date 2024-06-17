import axios from "axios";
import { useEffect, useState } from "react";
import './dropdown.css';

function DropDown() {
  const [data, setData] = useState([]);
  const [category,setCategory]=useState(['ALL']);
  const [filter,setFilter]=useState('ALL')

  useEffect(() => {
    categoryapi();
    apidata();
    
  }, []);


  const apidata = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    setData(response.data);
  };

  const categoryapi=async()=>{
    const categorys=await axios.get('https://fakestoreapi.com/products/categories')
    setCategory([...category,...categorys.data])

  }

  const catapi=async(cat)=>{

    const {data}=await axios.get(`https://fakestoreapi.com/products/category/${cat}`)
     setData(data)
  }
  function handlechange(event){
    const optionselected=event.target.value
    console.log(optionselected)
    setFilter(optionselected)
    if(optionselected==='ALL'){
        apidata()
    }
    else{
        catapi(optionselected)
    }
  }
  
  return (
    <>
      <h1 className="title">hello</h1>

      <select  value={filter}   onChange={handlechange}>
        {
        category.map((eachcat)=>{
            return(
                
            <option value={eachcat}>{eachcat}</option>
            )

        })
        }
    
      </select>
      <div className="container">
        {
        data.map((eachproduct) => {
          return (
            <div className="product" key={eachproduct.id}>
              <img
                src={eachproduct.image}
                alt={eachproduct.title}
                className="product-img"
                height={200}
                width={200}
              />
              <h1>{eachproduct.title}</h1>
              <p>{eachproduct.description}</p>
              <p>${eachproduct.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DropDown;



    
