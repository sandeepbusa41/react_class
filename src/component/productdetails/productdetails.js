import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './product.css';

function Productdetails() {
    const [data, setData] = useState({});

    const params = useParams();
    useEffect(() => {
        apidata();
    }, [params.id]);

    async function apidata() {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setData(data);
    }

    return (
        <div className="product-details-container">
            <h1 className="product-title">Product Details</h1>

            {Object.keys(data).length > 0 ? (
                <div className="product-details">
                    <h2 className="product-name">{data.title}</h2>
                    <img className="product-image" src={data.image} alt={data.title}  height={300} width={300}/>
                    <h3 className="product-price">${data.price}</h3>
                    <p className="product-description">{data.description}</p>
                    <p className="product-category">Category: {data.category}</p>
                    <div className="product-rating">
                        <span>Rating: {data.rating.rate} </span>
                        <span>({data.rating.count} reviews)</span>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <button className="back-button">
                <Link to={'/'} className="back-link">Go back</Link>
            </button>
        </div>
    );
}

export default Productdetails;
