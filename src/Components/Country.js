import React, { useState } from "react";


const Countries = [
    {'Name':  'India', 'Capital': 'Delhi'},
    {'Name':  'USA', 'Capital': 'Washington D.C'},
    {'Name':  'Germany', 'Capital': 'Berlin'},
    {'Name':  'France', 'Capital': 'Paris'}
]



function CountriesList(){
    let [color, setColor] = useState(true);
    let [color2, setColor2] = useState('skyblue');
    return(
        <div style={{backgroundColor : color2, padding: '50px', borderRadius: '20px'}}>
            {Countries.map((country)=>(
                <h4>{country.Name} -- {country.Capital}</h4>
            ))}

            <button onClick={()=>setColor(() => !color ? setColor2('green') : setColor2('violet'))}>Click</button>

        </div>
    )
}


export default CountriesList;
