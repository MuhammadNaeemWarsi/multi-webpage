import React from "react"
import Header from"@/components/header"
export default function Cars(){

const carData=[
    {id:1,name:"Honda",price:8000000,description:"luxury Car",image:"/honda city.jpeg"},
    {id:2,name:"Civic",price:7000000,description:"Civic Car",image:"/honda civic.jpeg"},
    {id:3,name:"Suzuki",price:7500000,description:"SuzukiCar",image:"/suzuki.jpeg"},
    {id:4,name:"Corolla",price:9000000,description:"Toyota Car",image:"/toyota corolla.jpeg"},
    {id:5,name:"Vitz",price:8500000,description:"Vitz Car",image:"/toyota vitz.jpeg"},
    {id:6,name:"Yaris",price:7800000,description:"Yaris Car",image:"/toyota yaris.jpeg"}
]

    return(
        <div>
        {/* <div className="cars w-[100px] h-[100px]"> */}
        <div className="cars ">
            {carData.map((car)=>( 
        <div key={car.id} className="car-card">
        <img src={car.image} alt={car.name}/>
        <h3>{car.name}</h3>
        <p>{car.description}</p>
        <div className="price">${car.price}</div>
        <button>Add to cart</button>


        </div>

            ))}
        </div>
    
    
     </div>
     )

}