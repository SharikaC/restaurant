import React from 'react'
import {useState,useEffect} from 'react';
import RestuarantCard from './RestuarantCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import restuarntList from '../actions/restAction'

function Home() {
    const [restuarntsList,setRestuarantsList]=useState([])
    // async n await
        async function fetchData(){
        await fetch('/restaurants.json')
        .then(results=>results.json()
        .then(data=>{
            setRestuarantsList(data.restaurants)
        })
        )
    }
    // const dispatch = useDispatch()
    useEffect(()=>{
        fetchData()
        // dispatch(restuarntList())
    },[])
    console.log(restuarntsList);
  return (
    <Row>
        {
           restuarntsList.map(restuarant=>(
            <Col className='py-3' sm={12} md={6} lg={4} xl={3}>
            <RestuarantCard data={restuarant}/>
            </Col>
           )) 
        }
        </Row>
  )
}

export default Home