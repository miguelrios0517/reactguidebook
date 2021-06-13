import React, { useState, useEffect, useRef } from 'react'


export default function UseRefTutor() {
    const[name, setName ] = useState('')
    const renderCount = useRef(1) 
    //const [renderCount, setRenderCount] = useState()
    
    //use useRef to reference elements inside of HTML. You can reference an <input> element
    const inputRef = useRef('')
    
    //use useRef to keep track of a previous value of html element
    const prevName = useRef('')

    useEffect(() => {
        //setRenderCount(prevRender)
        /*
        Using useState to set a value inside of useEffect() could cause the program
        to run in an infinite loop if the program renders indefinitely (i.e., rendering 
            for each input character in text entry) Instead to track the most dynamic states
            use useRef(). We could call our useRef value inside of useEffect and  modify and it
            will never cause our program to re-render 
        */
        renderCount.current = renderCount.current + 1      
    } ) 

    useEffect(() => {
        prevName.current = name
    }, [name])

    function focus() {
        console.log(inputRef.current.value) //use: grab current value inside of html
        inputRef.current.focus()  //bring focus to your html (i.e, select textbox, ready to edit)
        
    }


 
  return (
    <div className = "widget">
        <div className ="tutorial"> 
            <input ref={inputRef} value={name} onChange ={e=>  setName(e.target.value)}/>
            <div>My name is {name} and it used to be {prevName.current}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick ={focus}>Focus</button>
        </div> 
        <div className ="notes">
            <a href="https://www.youtube.com/watch?v=t2ypzz6gJm0&t=190s">tutorial: Learn useRef in 11 minutes by Web Dev Simplified</a> 
        </div>
    </div>
  );
}

