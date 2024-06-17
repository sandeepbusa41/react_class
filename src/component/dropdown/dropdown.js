import axios from "axios";
import { useEffect, useState } from "react";
import './dropdown.css';
import { Link } from "react-router-dom";

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
    
    const updatedata=response.data.map((product)=>({
      ...product,
      description:reduceDescription(product.description)
      

    }))
    setData(updatedata);
  };
  console.log(data.description)




  const reduceDescription=(desc)=>{
    return desc.length>70?desc.slice(0,70)+'.....':desc
    

  }

  const categoryapi=async()=>{
    const categorys=await axios.get('https://fakestoreapi.com/products/categories')
    setCategory([...category,...categorys.data])
    // reduceDescription(data.description)

  }

  const catapi=async(cat)=>{

    const response=await axios.get(`https://fakestoreapi.com/products/category/${cat}`)

    const updatedata=response.data.map((product)=>({
      ...product,
      description:reduceDescription(product.description)
      

    }))
    setData(updatedata);
    //  reduceDescription(data.description)
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
              <button>
                <Link  to={`${eachproduct.category}/${eachproduct.id}`} style={{color:'white',textDecoration:'none'}}>See More</Link>
                
                </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DropDown;



    
