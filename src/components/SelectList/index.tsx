import React from 'react';
import styled from 'styled-components';

interface SelectListProps {

}

export default function SelectList({}: SelectListProps) {
  const ListBox = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0.1rem 0.5rem 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    >div{
      
    }
  `;
  return (
    <ListBox>
      <div><span></span></div>
    </ListBox>);
}