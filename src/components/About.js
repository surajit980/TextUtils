import React from 'react'

const About = (props) => {
    return (
        <div className="container mt-5">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Text uppercase
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.style} text-${props.style === "light" ? "dark" : "light"}`}>
                            After clicking <strong>Text Uppercase</strong> button your full text will be in uppercase then you can use it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Text Lowercase
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.style} text-${props.style === "light" ? "dark" : "light"}`}>
                            After clicking <strong>Text Lowercase</strong> button your full text will be in lowercase then you can use it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Clear Text
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.style} text-${props.style === "light" ? "dark" : "light"}`}>
                            After clicking <strong>Clear Text</strong> button your full text will be cleared then you can write new text for utilize.
                        </div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Copy Text
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.style} text-${props.style === "light" ? "dark" : "light"}`}>
                            After clicking <strong>Copy Text</strong> button full text will be copied then you can paste this text anywhere.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
