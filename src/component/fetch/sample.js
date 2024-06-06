
import { Component } from "react";

class Productss extends Component {
    state = {
        recepielist: [],
        issucess: false,
    }

    fetchproducts = () => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then((response) => {
                const { recipes } = response;  // Assuming the API response has a `recipes` key
                this.setState({
                    recepielist: recipes,
                    issucess: true,
                }, () => {
                    console.log(this.state.recepielist);
                });
            });
    }

    render() {
        return (
            <>
                <h1>Hello world!</h1>
                <button onClick={this.fetchproducts}>Click me</button>
                {
                    this.state.issucess ?
                        this.state.recepielist.map((eachitem) => {
                            return (
                                <>
                                    <h1>{eachitem.name}</h1>
                                </>
                            );
                        }) : <h3>Loading</h3>
                }
            </>
        );
    }
}

export default Productss;
