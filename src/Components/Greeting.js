import React from 'react'


function Greeting(){
    return(
        <h1>Hello Viren !</h1>
    );
}

// We can Pass Default values 
Ching.defaultProps = {
    name : "default"
}

function Ching(props){
    return(
        <h3>Ching Ching {props.name}</h3>
    );
}

export {
    Greeting,
    Ching
}

// export default Greeting;