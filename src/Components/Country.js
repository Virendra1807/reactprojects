import React from "react";


const Countries = [
    {'Name':  'India', 'Capital': 'Delhi'},
    {'Name':  'USA', 'Capital': 'Washington D.C'},
    {'Name':  'Germany', 'Capital': 'Berlin'},
    {'Name':  'France', 'Capital': 'Paris'}
]


function CountriesList(){
    return(
        <div>
            {Countries.map((country)=>(
                <h4>{country.Name} -->{country.Capital}</h4>
            ))}
        </div>
    )
}


export default CountriesList;
