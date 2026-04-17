import React from 'react'

const Card = (props) => {
  console.log(props)

  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1775507685032-579ab21cdfa3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile"
      />
      
      <h1>{props.user}</h1>
      <p>Age: {props.age}</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card