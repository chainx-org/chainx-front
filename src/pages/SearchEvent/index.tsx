/** @format */

import React, {useState, useEffect, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {Input, Popover} from 'antd'
import {ContainerEvent, SearchBox, Wrapper} from '../../components/CardBox/style'
import pulldown from '../../assets/icon-pulldown.svg'
import problem from '../../assets/problem.svg'
import Event from './searchEvent'
import Exc from './searchExc'
import styled from 'styled-components'

const CircleIndex = styled.div`
   {
    width: 12px;
    height: 12px;
    display: inline-flex;
    justify-content: center;
    border-radius: 50%;
    background: black;
    position: relative;
    margin-right: 2px;
  }
`
export default function SearchEvent() {
  const {t} = useTranslation()
  const ref = useRef()
  const {Search} = Input
  const [nowSearch, setNowSearch] = useState('Event')
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setInputValue('')
  }, [nowSearch])
  const onSearch = async (value: any) => {
    if (value ?? '' !== '') {
      setLoading(true)
      setInputValue(value)
    }
  }

  const popWithCopy = (
    <div>
      <span>
        <CircleIndex />
        {t('popMessage1')}
      </span>
      <br />
      <span>
        <CircleIndex />
        {t('popMessage2')}
      </span>
      <br />
      <span>
        <CircleIndex />
        {t('popMessage3')}
      </span>
      <br />
      <span>
        <CircleIndex />
        {t('popMessage4')}
      </span>
    </div>
  )
  return (
    <div className='Container'>
      <ContainerEvent>
        <div className='flex flex-row'>
          <span className='selectiveText'>{t('selective type')}</span>
          <div className='toolSearch'>
            <div className='showSelect'>
              <span>{nowSearch}</span>
            </div>
            <div className='selectBtn'>
              <img
                src={pulldown}
                alt=''
                style={{width: '16px', height: '16px', display: 'inline-block', margin: 'auto 0'}}
              />
            </div>
            <ul className='toolList cursor-pointer'>
              <li
                onClick={() => {
                  setNowSearch('Event')
                }}
              >
                <div>{t('Search Event')}</div>
              </li>
              <li
                onClick={() => {
                  setNowSearch('Extrinsic')
                }}
              >
                <div>{t('Search Extrinsic')}</div>
              </li>
            </ul>
          </div>
          <Popover content={popWithCopy} style={{top: '-20px'}}>
            <div className='helpMessage'>
              <img className='selectiveText' src={problem} alt='' style={{width: '16px'}} />
              <span className='selectiveText'>{t('Help')}</span>
            </div>
          </Popover>
        </div>
      </ContainerEvent>
      <SearchBox className='my-4'>
        <Search
          className={'Home_pageSearch'}
          placeholder={t('Please select the type before searching')}
          onSearch={onSearch}
          onPressEnter={onSearch}
          enterButton
          disabled={loading}
          loading={loading}
        />
      </SearchBox>
      <div className='pt-8 pb-16 bg-gray-bgWhite screen:px-4 medium:px-4'>
        <Wrapper>
          {nowSearch === 'Event' ? (
            <Event value={inputValue} setLoading={setLoading} />
          ) : (
            <Exc value={inputValue} setLoading={setLoading} />
          )}
        </Wrapper>
      </div>
    </div>
  )
}
