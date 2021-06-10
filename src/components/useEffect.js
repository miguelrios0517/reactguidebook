import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'


export default function useEffect() {

  const [resourceType,  setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)


  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }


  // wheneber a button below (inside return()) is selected, react re-renders, 
  // and the console prints 'render' 
  console.log('render')

  // this is another way of using useEffect, rather than passing a variable, we can 
  // add an event listener inside the function that tracks things not in react such as
  // the whether the window was resized
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // the problem with this method is that if the app gets deleted, the listner is still
    // in storage and can cause slow downs if mulitple listners are added. This can be 
    // resolved by including a return statements which executes whenever the useEffect
    // is deleted

    //returns are executed first to clean up the values from last time the useEffect was called
    //in this case the removeEventListner is called first to clean up the eventListner from the previous
    //execution
    return () => {
      windowWidth.removeEventListener('resize', handleResize)
    }
  }, [])
  

  // useEffect is useful in litsening to weather certain variables in your code change 
  // takes in two parameters...
  //    1) a callback function that executes everytime a variable changes 
  //    2) array of variables to look out for
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

 
  return (
    <>
      <div>{windowWidth}</div>
      <div>
        <button onClick ={() => setResourceType('posts')}>Posts</button>
        <button onClick ={() => setResourceType('users')}>Users</button>
        <button onClick ={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
        {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })}
    </>
  );
}

