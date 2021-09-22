import React, { useState } from 'react'

const Textinputs = (props) => {
    const updateInput = (event) => {
        setinptext(event.target.value)
    }
    const capitalizeInput = () => {
        const newText = inptext.toUpperCase()
        setinptext(newText)
    }
    const lowercaseInput = () => {
        setinptext(inptext.toLowerCase())
    }
    const clearText = () => {
        setinptext("")
    }
    const copyText = () => {
        navigator.clipboard.writeText(inptext)
    }
    const [inptext, setinptext] = useState("")
    return (
        <>
            <div className="my-3 container">
                <div>
                    <h1 className={`text-center mb-5 text-${props.style === "light" ? "dark" : "light"}`}>Enter the text click button and analyze your text</h1>
                </div>
                <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.style === "light" ? "dark" : "light"}`}>Enter Your Text Below :</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={inptext} onChange={updateInput}></textarea>
                <div className="d-flex justify-content-center mt-3">
                    <button type="button" className="btn btn-outline-secondary mx-2" onClick={capitalizeInput}>Text Uppercase</button>
                    <button type="button" className="btn btn-outline-secondary mx-2" onClick={lowercaseInput}>Text Lowercase</button>
                    <button type="button" className="btn btn-outline-secondary mx-2" onClick={clearText}>Clear Text</button>
                    <button type="button" className="btn btn-outline-secondary mx-2" onClick={copyText}>Copy Text</button>
                </div>
            </div>
            <div className="container">
                <h2 className={`text-${props.style === "light" ? "dark" : "light"}`}>Your text summary</h2>
                <p className={`text-${props.style === "light" ? "dark" : "light"}`}>{inptext.length === 0 ? 0 : inptext.split(" ").length} words and {inptext.length} charecters</p>
            </div>
        </>
    )
}

export default Textinputs

