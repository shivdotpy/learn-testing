import React, { useState } from 'react'

export const Button = () => {
    const [data, setData] = useState('')
  return (
    <div>
        <h1>Text data on button click</h1>
        <button onClick={() => setData('Updated data')}>Update data</button>
        <h2>{data}</h2>
    </div>
  )
}
