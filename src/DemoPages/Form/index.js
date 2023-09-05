import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Col, Row, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input
} from 'reactstrap';

function AddNew() {
  return (
    <>
     <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Add New Task</CardTitle>
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail11">Title</Label>
                                                    <Input type="text" name="title"
                                                        placeholder="Scrapy Task"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword11">Client Name</Label>
                                                    <Input type="text" name="client"
                                                        placeholder="George Bush"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Communicator</Label>
                                                <Input type="select" name="communicator">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                                <Label>Developer</Label>
                                                <Input type="select" name="developer">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                            <FormGroup>
                                                <Label>Helper Developer</Label>
                                                <Input type="select" name="helperdeveloper">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                            <FormGroup>
                                                <Label>Status</Label>
                                                <Input type="select" name="status">
                                                    <option>Pending</option>
                                                    <option>Progress</option>
                                                    <option>Complete</option>
                                                </Input>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword11">Estimated Hours</Label>
                                                    <Input type="number" name="hours"
                                                        placeholder="24"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword11">Platform</Label>
                                                    <Input type="text" name="plaform"
                                                        placeholder="Upwork..."/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword11">Started Date</Label>
                                                    <Input type="date" name="startdate"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword11">Estimated Completion Date</Label>
                                                    <Input type="date" name="enddate"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                            <FormGroup>
                                                <Label>Team</Label>
                                                <Input type="select" name="team">
                                                    <option>Pending</option>
                                                    <option>Progress</option>
                                                    <option>Complete</option>
                                                </Input>
                                            </FormGroup>
                                            </Col>
                                        </Row>

                                        <Button color="primary" className="mt-2">Submit</Button>
                                    </Form>

                                </CardBody>
                            </Card>
    </>
  )
}

export default AddNew