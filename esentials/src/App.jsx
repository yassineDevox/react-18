import React, { useState, useTransition } from 'react'
import { startTransition } from 'react'
const LIST_SIZE = 2000

const App = () => {

  //state
  const [inpt, setInpt] = useState("")
  const [list, setlist] = useState([])

  //all states are hight priority by default and with Automatic Batching react will wait until the last 
  // set and compute all the changes before rendering the page 
  //for us it's a problem because the input will not show up instantly which is bad for user experience
  //solution is to use usetransition and tel to react that the part of list is low priority compared to the input
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    setInpt(e.target.value)
    //add the input value to the list 2000 times
    startTransition(() => {
      const copyList = []
      for (let i = 0; i < LIST_SIZE; i++) copyList.push(e.target.value)
      setlist(copyList)
    })
  }
  return (
    <>
      <input type="search" onChange={handleChange} placeholder='type something' />
      <ul>
        {isPending && "loading ..."}
        {!isPending && list.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </>
  )
}

export default App