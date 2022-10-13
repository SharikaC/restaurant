import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function RestuarantCard({data}) {
  return (
    <Link style={{textDecoration:'none',color:'white'}} to={`restuarant/${data.id}`}>
    <>
        <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" className='p-3' src={data.photograph} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <p> Cuisine:{data.cuisine_type}</p> 
        </Card.Text>
        <Card.Text>
          <p> Neighborhood:{data.neighborhood}</p> 
        </Card.Text>
      </Card.Body>
    </Card>
    </>
    </Link>
  )
}

export default RestuarantCard