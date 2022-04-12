import React from 'react'

function TeeCard( {teetime} ) {

  return (
    <div>
      <p>{teetime.golf_course}, {teetime.location}</p>
    <p>{teetime.time}</p>
    <p>{teetime.number_of_holes} holes</p>
    <p>Posted by: {teetime.user.name}</p>
    </div>
  )
}

export default TeeCard