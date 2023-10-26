import React from "react";
export default function Home(props){
    const {name,location} = props;
    const text= `My name is ${name} from ${location}`;


    return(
        <>
        <h1>{text}</h1>
        </>
    );

}