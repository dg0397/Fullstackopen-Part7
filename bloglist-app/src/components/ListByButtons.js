import React from 'react'

const ListByButtons = ({ handleListSort }) => {

  return (
    <div>
      <h3>List By Likes:</h3>
      <div id = "btn-list">
        <button onClick={handleListSort} id = "order-up">↑</button>
        <button onClick={handleListSort}>Normal</button>
        <button onClick={handleListSort}>↓</button>
      </div>
    </div>
  )
}

export default ListByButtons
