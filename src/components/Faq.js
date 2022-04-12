import React from 'react'
import {Accordion,Card} from 'react-bootstrap'

export const Faq = () => {
    return (
            <section className="faq" id="Faq">
                <div className="container text-center">
                    <h1 className="title title-faq">FREQUENTLY ASKED QUESTIONS</h1>
                    <div className="row faq-row">
                    <div className="accordion" id="accordionExample">
                    <Accordion className="faq">
                        <Card className="accordion-item faq-body">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                               <h2 className="accordion-header faq-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Do we get the project after payment?
                                </button>
                                </h2>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="accordion-body faq-text">
                                    <strong>YES</strong>, 100% you will get the project. Once the payment is done 
                                    <strong>within an hour</strong> we will send the compressed project fail to your mail id.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                       <Card className="accordion-item faq-body">
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                               <h2 className="accordion-header faq-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Is it a safe Website?
                                </button>
                                </h2>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="accordion-body faq-text">
                                    <strong>YES</strong>,it is fully safe website. We are here to help you not to scam you.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="accordion-item faq-body">
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                <h2 class="accordion-header faq-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Is these are the only project present?
                                </button>
                                </h2>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body className="accordion-body faq-text">
                                    <strong>NO</strong>, We will <strong>update</strong> 
                                    the project in every section now and then.So you will get <strong>multiple project</strong> to showcase.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                </div>
                {/* <div class="row question-sec">
                    <h1 className="text-center">ASK YOUR QUESTION</h1>
                    <form className="question-form">
                        <div className="form-group text-center">
                        <input type="email" className="form-control" id="Email-faq" aria-describedby="emailHelp" placeholder="Enter email" name="Email" required/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" id="question" placeholder="Type your question" name="Question" required/>
                        </div>
                        <button type="submit" className="btn-submit btn-primary">Submit</button>
                    </form>
                </div>   */}
                </div>
            </section>       
    )
}
