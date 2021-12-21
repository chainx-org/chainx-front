/** @format */

import React from 'react'
import styled from 'styled-components'

interface SelectListProps {}
const ListBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 0.1rem 0.5rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  > div {
  }
`
export default function SelectList({}: SelectListProps) {
  return (
    <ListBox>
      <div>
        <span></span>
      </div>
    </ListBox>
  )
}
