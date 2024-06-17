import { useEffect, useState } from "react"
import axios from "axios"
import './style.css'

function UseEffect(){
    const [count1, setCount1] = useState(1)
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [category, setCategory] = useState("men's clothing")

    useEffect(() => {
        fetch()
    }, [count1, category])

    const increaseCount1 = () => {
        setCount1(count1 + 1)
    }

    const fetch = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products`)
            setData(response.data)
        } catch (err) {
            setError('api error')
        }
    }

    return (
        <div className="container">
            <h1>Hello World!</h1>
            <h3>Count: {count1}</h3>
            {error && <h1>Api fetching Error</h1>}
            <div className="buttons">
                <button onClick={increaseCount1}>Increase Count</button>
                <button onClick={() => setCategory("men's clothing")}>Men's Clothing</button>
                <button onClick={() => setCategory("women's clothing")}>Women's Clothing</button>
                <button onClick={() => setCategory("electronics")}>Electronics</button>
                <button onClick={() => setCategory("jewelery")}>Jewelery</button>
            </div>
            <div className="products">
                {
                    data.map((eachelement) => {
                        if (eachelement.category === category) {
                            return (
                                <div className="product" key={eachelement.id}>
                                    <h2>{eachelement.title}</h2>
                                    <img src={eachelement.image} alt={eachelement.title} />
                                    <h3>${eachelement.price}</h3>
                                    <p>{eachelement.description}</p>
                                </div>
                            )
                        }
                        return null
                    })
                }
            </div>
        </div>
    )
}
export default UseEffect
