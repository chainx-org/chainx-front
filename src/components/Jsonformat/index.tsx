import React from 'react';
import styled from 'styled-components';
import CopyText from '../copyText';
import JsonApi from '../../components/Jsonformat';

const JsonContainer = styled.div`
  background: #F9F9F9;
  border-radius: 10px;
  padding: 2px 4px;
  border: 1px solid #DBDBDB;
  position: relative;
`;
// @ts-ignore
export default function Jsonformat({ json }) {
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
    if(query===null||query===undefined){
      return (
        <div></div>
      )
    }
    console.log(Object.prototype.toString.call(query));

    const keys = Object.keys(query)
    return (
      <div style={{marginLeft:(deep-1)*60+'px'}}>
        <span>{`{`}</span>
        {
          Object.keys(query).map((key:string)=>{
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
        <div className="flex flex-row justify-end absolute" style={{right: '0'}}><CopyText children={''} text={JSON.stringify(json, null, 2)}/></div>
        {
          filterJson(json, 1)
        }</JsonContainer>
    </pre>
  )
}
