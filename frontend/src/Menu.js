import { useState, useEffect } from "react";
const Menu = () => {
    const [dishes, setDishes] = useState([]);
    useEffect(async () => {
        let response = await fetch("http://localhost:1337/api/dishes?populate=*");
        let json = await response.json();
        console.log(json.data);
        setDishes(json.data);
    },[])

    return (
    <div style={{border:"2px double white",padding:"20px"}}>
    <h2>Menu</h2>
        <ul>
            {dishes.map(({attributes,id}) => {
                let {Name,price,categories} = attributes;
                return (<li key={id}>
                            <p>{Name} {price}kr</p>
                            {categories.data.map(category => <span key={category.id} style={{border:"2px solid white"}}>
                                {category.attributes.title}
                            </span>)}
                        </li>)}
            )}
        </ul>
    </div>)
}

export default Menu