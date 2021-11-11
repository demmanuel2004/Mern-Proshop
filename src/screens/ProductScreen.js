import React from "react";
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


const ProductScreen = ( {match} ) => {
    const product = products.find((p) => p._id === match.params.id)
  
  
    return (
      <>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>
      <Row>

        <col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </col>
        <col md={3}>
          <ListGroup variant= 'flush'></ListGroup>
          <ListGroup.item>
            <h2>{product.name}</h2>
          </ListGroup.item>
          <ListGroup.item>
          
          </ListGroup.item>
          
          <ListGroup.Item>
            Price: ${product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description: ${product.description}
          </ListGroup.Item>
        </col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                      Price: 
                  </Col>
                  <Col>
                  <strong>${product.price}</strong>
                  </Col>
                </Row>

              </ListGroup.Item>
              <Row>
                <Col>Status:
                </Col>
                <Col>
                {product.countInStock > 0 ? 'in stock' : 'out of stock'}
                </Col>
              </Row>
              <ListGroup.item>
                <Button className='btn-block' type='button'>
                  Add to cart
                </Button>
              </ListGroup.item>
              
            </ListGroup>
          </Card>
        </Col>

      </Row>
    )
    </>
    )
};

export default ProductScreen;
