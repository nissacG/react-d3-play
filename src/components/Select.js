import React from 'react'

const Select = ({ onChange }) => {
  return (
    <div>
      <select name='location' onChange={onChange}>
        <option value='first'>1</option>
        <option value='second'>2</option>
        <option value='third'>3</option>
        <option value='forth'>4</option>
      </select>
    </div>
  )
}

export default Select