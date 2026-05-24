import React , {useState}from 'react'

const App = () => {

  //////////////Basic////////////
  // const [num, setNum] = useState(0)

  // function increaseNum(){
  //   setNum(num+1)
  // }
  // function decreaseNum(){
  //   setNum(num-1)
  // }
  // function jump5Num(){
  //   setNum(num+5)
  // }


//////////////////////working with object //////////////////
// const [num, setNum] = useState({user:'akash' , age:22})

// const btnClicked=()=>{
//   const newNum={...num};
//   newNum.user='aman'
//   newNum.age=17
//   setNum(newNum)
// }


//////////////working with array ///////////////
// const [num, setNum] = useState([10,20,30])
// const btnClicked=()=>{
//   const newNum=[...num]
//   newNum.push(99)
//   setNum(newNum)
// }


/////////////new method ///////////
const [num, setNum] = useState({user:'akash' , age:20})
const btnClicked=()=>{
  setNum(prev=>({...prev , age:23}))
  
}
  return(
    <div>
      {/* BASIC-<h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump by 5</button> */}


      {/* OBJECT-<h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}> click</button> */}


      {/* <h1>{num}</h1>
      <button onClick={btnClicked}>click</button> */}


      <h1>{num.user} , {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App