import React, { useState } from "react";


const Countries = [
    {'Name':  'India', 'Capital': 'Delhi'},
    {'Name':  'USA', 'Capital': 'Washington D.C'},
    {'Name':  'Germany', 'Capital': 'Berlin'},
    {'Name':  'France', 'Capital': 'Paris'}
]



function CountriesList(){
    let [color, setColor] = useState("skyblue");
    return(
        <div style={{backgroundColor : color}}>
            {Countries.map((country)=>(
                <h4>{country.Name} -- {country.Capital}</h4>
            ))}

            <button onClick={()=> setColor(color !=' blue' ? 'blue' : 'red' )}>Click</button>
        </div>
    )
}


export default CountriesList;
