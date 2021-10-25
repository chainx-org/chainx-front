import React from 'react'

// @ts-ignore
export default function jsonformat({ json }) {

  const filterStyle = (value:any)=>{
    if(typeof value==='string'){
      return {color:'red'}
    }else if(typeof value==='number'){
      return {color:'yellow'}
    }else if(value===null){
      return {color:'purple'}
    }
  }
  const filterInner = (value:any)=>{
    if(value===null){
      return 'null'
    }else if(typeof value!=='string'){
      return value
    }else{
      return `"${value}"`
    }
  }
  const filterJson = (query:any,deep:number)=>{
    const keys = Object.keys(query)
    return (
      <div style={{marginLeft:(deep-1)*60+'px'}}>
        <span>{`{`}</span>
        {
          keys.map((key:string)=>{
            if(Object.prototype.toString.call(query[key])==='[object Object]'){
              return filterJson(query[key],deep+1)
            }else{
              const value = query[key]
              return (
                <div>
                  <span>{`"${key}"`}</span>
                  <span>:</span>
                  <span style={filterStyle(value)}>{filterInner(value)}</span>
                </div>
              )
            }
          })
        }
        <span>{`}`}</span>
      </div>
    )
  }
  return (
    <pre
      style={{
        textAlign: 'left',
        backgroundColor: 'unset',
        padding: 0,
        color: '#959595'
      }}
    >
      {/*{JSON.stringify(json, null, 2)}*/}
      <div>
      {
        filterJson(json, 1)
      }</div>
    </pre>
  )
}
