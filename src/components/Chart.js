import React from 'react'
import * as d3 from 'd3'
import Select from './Select'

const inputChange = e => {
  console.log(e)
}

const Chart = () => {
  return (
    <div>
      Chart
      <Select onChange={inputChange} />
    </div>
  )
}

export default Chart