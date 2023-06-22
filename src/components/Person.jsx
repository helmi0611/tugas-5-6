import React from 'react'

const Person = ({id,name,age}) => {
  return (
    
      <div style={{
        border:"4px solid",
        height:150,
        width:150,
        padding:'10px',
        margin:"10px",
        backgroundColor:"black",
        fontFamily:"monospace",
        color:'white',
        borderRadius:'15px',
    }}>
        <p>{id}</p>
        <p>{name}</p>
        <p>{age}</p>
      </div>
  )
}

export default Person
