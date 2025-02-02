import { useState, useEffect } from 'react';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';

import ban1 from "../images/b1.jpg";
import ban2 from "../images/b2.jpg";
import ban3 from "../images/b3.jpg";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const WomenCollection=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();

 const loadData=()=>{
   
    let api="http://localhost:3000/shopping/?category=women";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);


 const cartDataAdd=(id, name, price, categ, desc, myimg)=>{
  dispatch(addToCart({id:id, name:name, price:price, category:categ, description:desc, image:myimg, qnty:1}))
 }



 const ans=mydata.map((key)=>{
   return(
    <>
    
    <Card style={{width:"380px", marginTop:"10px"}}>
        <img src={key.image} style={{height:"300px"}}  />
      <Card.Body>
        <Card.Title> {key.name} for {key.category}</Card.Title>
        <Card.Text>
            {key.description} 
            <br/>
            <span style={{color:'red', fontWeight:'bold'}}>Price : Rs. {key.price}/-</span>  
        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{cartDataAdd(key.id, key.name, key.price, key.category, key.description, key.image)}}>add to cart</Button>
      </Card.Body>
    </Card>

    
    </>
   )

 })

    return(
        <>
       <h1>Women Collection</h1>
       <div id="cardData">
         {ans}     
      
       </div>

        </>
    )
}

export default WomenCollection;