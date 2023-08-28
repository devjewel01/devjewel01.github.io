import React from 'react'

const List = ({listItem }) => {
  return (
    <ul>
      {listItem.map((item, index) => (
        <li key={index} className='py-1'>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default List