import React from 'react'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
function RestDetails() {
    const [restuarntsList,setRestuarantsList]=useState([])
    const params=useParams()
    // for madal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // collapse
    const [open, setOpen] = useState(false);

    // async n await
        async function fetchData(){
        await fetch('/restaurants.json')
        .then(results=>results.json()
        .then(data=>{
            setRestuarantsList(data.restaurants)
        })
        )
    }
    useEffect(()=>{
        fetchData()
    },[])
    const restuarant=restuarntsList.find(restDetails=>restDetails.id==params.id)

    console.log(restuarant);
  return (
    <>
    {
        restuarant?
    (<Row className='my-3'>
        <Col md={4}>
        <Image className='p-3' src={restuarant.photograph} fluid/>
        </Col>
        <Col md={8} className='p-3'>
        <ListGroup>
      <ListGroup.Item>
        <h2>{restuarant.name}</h2>
        <p>{restuarant.neighborhood}</p>
        </ListGroup.Item>        
      <ListGroup.Item>{restuarant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>{restuarant.address}</ListGroup.Item>
    </ListGroup>
    {/* operating Hours*/}
    <Button className='my-3' variant="dark" onClick={handleShow}>
    Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday:{restuarant.operating_hours['Monday']}</ListGroup.Item>
      <ListGroup.Item>Tuesday:{restuarant.operating_hours['Tuesday']}</ListGroup.Item>
      <ListGroup.Item>Wednesday:{restuarant.operating_hours['Wednesday']}</ListGroup.Item>
      <ListGroup.Item>Thursday:{restuarant.operating_hours['Thursday']}</ListGroup.Item>
      <ListGroup.Item>Friday:{restuarant.operating_hours['Friday']}</ListGroup.Item>
      <ListGroup.Item>Saturday:{restuarant.operating_hours['Saturday']}</ListGroup.Item>
      <ListGroup.Item>Sunday:{restuarant.operating_hours['Sunday']}</ListGroup.Item>

    </ListGroup>
        </Modal.Body>  
      </Modal>
      <br></br>
      {/* reviews */}
      <Button variant='dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click here to view the reviews
      </Button>
      <Collapse in={open}>
        <div className='py-3' id="example-collapse-text">
          {
            restuarant.reviews.map(item=>(
              <div>
                <h6>{item.name}:<span>({item.date})</span></h6>
                <p>Rating:{item.rating}</p>
                <p>Comments:{item.comments}</p>
              </div>
            ))
          }
        </div>
      </Collapse>
        </Col>
    </Row>):'null'
}
</>
  )
}

export default RestDetails