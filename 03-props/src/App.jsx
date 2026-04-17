import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Akash" age={21} />
      <Card user="Aditya" age={18} />
    </div>
  )
}

export default App