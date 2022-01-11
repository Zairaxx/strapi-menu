import { useState, useEffect } from "react";

const AlternativeMenu = () => {

    const [categories, setCategories] = useState([]);
    useEffect(async () => {
        let response = await fetch("http://localhost:1337/api/categories?populate=*");
        let json = await response.json();
        console.log(json.data);
        setCategories(json.data);
    },[])

    return(<div style={{border:"2px double white",padding:"20px"}}>
    <h2>Alternative Menu</h2>
        <ul>
            {
                categories.map( ({attributes, id}) => {
                    let {title,dishes} = attributes;
                    return (<li key={id}>
                        <h3>{title.toUpperCase()}</h3>
                        {dishes.data.map(dish => {
                            return(<p key={dish.id}>{dish.attributes.Name} {dish.attributes.price}kr</p>)
                        })}</li>)
                })
            }
        </ul>
    </div>)
}

export default AlternativeMenu