import React, {  useState } from 'react';
import { Container, Row, Col, Button,  Form }  from "react-bootstrap"
import "./PostAd.css"
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

function PostAdvertisement()  {
    const [ generalFormValidated, setGeneralFormValidated] = useState(false);

    const handleGeneralFormSubmit = (event) => {
        const generalForm = event.currentTarget;
        if (generalForm.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setGeneralFormValidated(true);
      };

    const [ misFormValidated, setMisFormValidated ] = useState(false);
    const handleMisFormSubmit = (event) => {
        const misForm = event.currentTarget;
        if (misForm.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setMisFormValidated(true);
      };

      const useStyles = makeStyles({
        dividerColor: {
            background: '#000000',
            marginLeft: "15%",
            marginRight: "15%",
            marginTop: "2%",
            marginBottom: "2%",
            height: "1px"
        }
       });
    
    const classes = useStyles();
    return ( 
        <div id="main__container">
                <h3 className="container__heading">Post Advertisement</h3>
                <Container>
                    <h4>General Details</h4>
                    <Row>
                        <Col></Col>
                        <Col sm={12}>
                            <Form noValidated validated={generalFormValidated} onSubmit={handleGeneralFormSubmit}>
                                <Form.Group as={Col}  controlId="validationCustom01">
                                        <Form.Label>Ad Title</Form.Label>
                                        <Form.Control 
                                            required
                                            type="text"
                                            placeholder="Ad Title"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Field can't be left empty 
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                    <Form.Label>Select Property Type</Form.Label>
                                        <Form.Control 
                                            as="select" defaultValue="Apartment">
                                            <option>Condo</option>
                                            <option>Room</option>
                                            <option>Apartment</option>
                                            <option>House</option>
                                        </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="validationCustom01">
                                    <Form.Label>Property Address</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Address"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                            Field can't be left empty 
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom05">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="text" placeholder="Zip" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Select City</Form.Label>
                                        <Form.Control as="select" defaultValue="City">
                                            <option>Halifax</option>
                                            <option>Toronto</option>
                                            <option>Calgary</option>
                                            <option>Sydney</option>
                                        </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Button md="2" variant="secondary" type="submit">Save Details</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                <Divider classes={{root: classes.dividerColor }}/>
                <Container>
                    <h4>Miscelleneous Details</h4>
                    <Row>
                        <Col></Col>
                        <Col sm={12}>
                            <Form noValidate validated={misFormValidated} onSubmit={handleMisFormSubmit}>
                                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Property Description: </Form.Label>
                                            <Form.Control required as="textarea" rows="5"  />
                                        <Form.Control.Feedback type="invalid">
                                            Field can't be left empty 
                                        </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Rent Amount</Form.Label>
                                        <Form.Control required type="number" placeholder="Rent Amount" />
                                            <Form.Control.Feedback type="invalid">
                                                Field can't be left empty 
                                            </Form.Control.Feedback>
                                </Form.Group>



                                <Form.Group as={Col}> 
                                <Form.Label>Pet Friendly</Form.Label>
                                    <Form.Row>
                                        <Form.Check type="radio" label="yes" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                        <Form.Check type="radio" label="no" name="formHorizontalRadios" id="formHorizontalRadios2" />
                                    </Form.Row>
                                </Form.Group>


                                <Form.Group as={Col}>
                                    <Form.Label>Lease Length</Form.Label>
                                        <Form.Control required type="number" placeholder="lease length" />
                                        <Form.Control.Feedback type="invalid">
                                            Field can't be left empty 
                                        </Form.Control.Feedback> 
                                    </Form.Group>
                                <Button variant="secondary" type="submit">Save Details</Button>
                            </Form>              
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                <Divider classes={{root: classes.dividerColor }}/>
                <Container>
                    <h4>Other Details</h4>
                    <Row>
                        <Col></Col>
                        <Col sm={12}>
                            <Form>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Upload any attachment" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contact Timing </Form.Label>
                                    <Form.Control name="contactNumber" placeholder="Contact" />
                                </Form.Group>
                                <Button variant="secondary" type="submit">Save Details</Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
              
            <a href="/postad" className="postAd__Button">Post Advertisement</a>

            </div>
        );
}
 
export default PostAdvertisement;
