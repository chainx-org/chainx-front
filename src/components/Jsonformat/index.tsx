import React from 'react'
import styled from 'styled-components';

// @ts-ignore
export default function jsonformat({ json }) {
  const JsonContainer = styled.div`
    background: #F9F9F9;
    border-radius: 10px;
    padding:2px 4px;
    border: 1px solid #DBDBDB;
  `;
  const filterStyle = (value:any)=>{
    if(typeof value==='string'){
      return {color:'#F55D8F'}
    }else if(typeof value==='number'){
      return {color:'#5CD0A7'}
    }else if(value===null){
      return {color:'blue'}
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
        backgroundColor: 'white',
        padding: 0,
        color: '#959595'
      }}
    >
      {/*{JSON.stringify(json, null, 2)}*/}
      <JsonContainer>
      {
        filterJson(json, 1)
      }</JsonContainer>
    </pre>
  )
}
