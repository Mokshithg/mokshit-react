import React from 'react'

export default function About(props) {
   let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor : props.mode === 'dark'?'#343a40':'white'
   }
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-2 mx-2'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Text Analyzer</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Text analyzer is an online tool for complete text analysis. Check the number of characters, spaces, words, sentences, paragraphs, shortest and longest words used in your text or article.Sometimes we all need to analyze whatever we have written, especially if you work as a writer. You need to check and count characters, spaces, words, sentences, and other things in your text to fulfill all guidelines.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Easy to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Well, with our Text Analyzer tool, this has never been easier. All you need to do is paste your text into the toolbox, and it will analyze the text for you. 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      In short, it is your one-stop-solution to all your text analysis needs. You can then modify your content accordingly and check again through our tool. 
It is a free and extremely powerful tool in analyzing the text in no time. No more worrying about not getting your work done on time or missing any guidelines. 
With this tool, you will know everything you need to about your content. What are you waiting for then? Paste some text now and see for yourself how easy and amazing our tool is. Once you use it, you will never look back. 
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
