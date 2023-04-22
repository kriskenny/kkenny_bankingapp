import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from './PNW.png';
import pic from './deposit.png'
import picture from './withdraw.png'



function Home(){
 
  return (
    <main>
      <Container>
        <Row className='px-4 my-5'>
          <Col className='text-center'>
            <h1 className='font-weight-light mt-5 typewriter' style={{fontSize: '48px', color: 'blueviolet'}}>
              Bad Bank of the PNW
            </h1>
            <p className="mt-4" style={{fontSize: '24px', color: 'info'}}>
              No security doesn't seem like our problem
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '18rem' } } className='text-center' >
              <Card.Img variant="top" src= {Image} />
              <Card.Body>
                <Card.Title>Create Account</Card.Title>
                <Card.Text>
                  Click here to get started!
                </Card.Text>
                <Button
                  variant="primary"
                  href="/createaccount/"
                  style={{
                    backgroundColor: 'blueviolet' ,
                    display: "block",
                    margin: "0 auto",
                    boxShadow: "0 5px 10px rgba(0,0,0,.2)",
                    border: "1px solid black",
                    transition: "all 0.3s ease",
                  }}
                  className="hover-button"
                >
                  Create Account
                </Button>
                <style jsx>{`
                  .hover-button:hover {
                    background-color: #ff8dcf;
                    color: black;
                    border: 1px solid #ff8dcf;
                  }
                `}</style>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className='text-center'>
              <Card.Img variant="" src= {pic} />
              <Card.Body>
                <Card.Title>Deposit</Card.Title>
                <Card.Text>
                  Deposit your money "safely" right here!
                </Card.Text>
                <Button
                  variant="primary"
                  href="/deposit"
                  style={{
                    backgroundColor: 'blueviolet',
                    display: "block",
                    margin: "0 auto",
                    boxShadow: "0 5px 10px rgba(0,0,0,.2)",
                    border: "1px solid black",
                    transition: "all 0.3s ease",
                  }}
                  className="hover-button"
                >
                  Deposit
                </Button>
                <style jsx>{`
                  .hover-button:hover {
                    background-color: #ff8dcf;
                    color: black;
                    border: 1px solid #ff8dcf;
                  }
                `}</style>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className='text-center'>
              <Card.Img variant="top" src= {picture} />
              <Card.Body>
                <Card.Title>Withdraw</Card.Title>
                <Card.Text>
                  There's probably money left in your account to take out!!
                </Card.Text>
                <Button
                  variant="primary"
                  href="/Withdraw"
                  style={{
                    backgroundColor: 'blueviolet',
                    display: "block",
                    margin: "0 auto",
                    boxShadow: "0 5px 10px rgba(0,0,0,.2)",
                    border: "1px solid black",
                    transition: "all 0.3s ease",
                  }}
                  className="hover-button"
                >
                  Withdraw
                </Button>
                <style jsx>{`
                  .hover-button:hover {
                    background-color: #ff8dcf;
                    color: black;
                    border: 1px solid #ff8dcf;
                  }
                `}</style>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );  
}

export default Home;
