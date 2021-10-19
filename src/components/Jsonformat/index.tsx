import React from 'react'

// @ts-ignore
export default function jsonformat({ json }) {
  return (
    <pre
      style={{
        textAlign: 'left',
        backgroundColor: 'unset',
        padding: 0,
        color: '#959595'
      }}
    >
      {JSON.stringify(json, null, 2)}
    </pre>
  )
}
