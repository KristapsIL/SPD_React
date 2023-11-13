import {useState,useEffect} from "react";
import Quote from "./Quote";

function  QuoteList(props){
    const [quot, setQuot] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function getData(){
            const response = await fetch("https://dummyjson.com/quotes");
            const data = await response.json();
            setQuot(data.quotes);
            setLoading(false);
        };
        getData()
    },[])
    const quotJSX = quot.map((thequote, index)=>{
       return <Quote key={index} {...thequote}/>
    });
    return(
        <>
        {loading ? <p>Loading</p> : quotJSX}
        </>
    )
}
export default QuoteList;