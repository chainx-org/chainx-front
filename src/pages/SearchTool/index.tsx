import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardTitle, Container, SpliteLine, Wrapper } from '../../components/CardBox/style';
import arrowChangeIcon from '../../assets/icon_awitch.svg';
import leakageIcon from '../../assets/icon_search event.svg';
import pulldown from '../../assets/icon-pulldown.svg';
import { Button, Input } from 'antd';
import { get } from '../../hooks/useApi';
import noDataIcon from '../../assets/noData.svg';
import Icon from '../../assets/img_switch.png';


export default function Tools() {
  const {Search, TextArea} = Input;
  const {t} = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const [listValue, setListValue] = useState<any>('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isCorrectValue, setIsCorrectValue] = useState('');
  const [nowSearch, setNowSearch] = useState('Event');
  const [loading, setLoading] = useState(false);
  const textInput = (e: any) => {
    const value = e.target.value;
    setLoading(false)
    setInputValue(value);
    setListValue('')
  };
  const getData = async () => {
    if (nowSearch === 'Event') {
      try {
        let res: any = await get(`/search/${inputValue}?page=${page}&page_size=${pageSize}`, ``);
        setListValue(res);
        setLoading(false);
      }catch (e) {
        setIsCorrectValue('No Data');
        setLoading(false);
      }
    } else {
      try {
        let res: any = await get(`/searchExtrinsic/${inputValue}?page=${page}&page_size=${pageSize}`, ``);
        setListValue(res);
        setLoading(false);
      } catch (e) {
        setIsCorrectValue('No Data');
        setLoading(false);
      }
    }
  }
  const searchFun = () => {
    setLoading(true);
    getData();
  };

  useEffect(() => {
    setListValue('');
    setInputValue('');
  }, [nowSearch]);

  return (
    <>
      <div className="Container">
        <Wrapper>
          <CardTitle>
            <img src={leakageIcon} alt=""/>
            <span>{t('Search Events/Extrinsics')}</span>
          </CardTitle>
          <SpliteLine/>
          <Container>
            <div className="items-center my-auto mx-0 text-start">
              <div className="flex flex-col mb-12">
                <div className="flex flex-row">
                  <span className="inline-block mr-1">{t('selective type')}</span>
                  <span className="inline-block">{'?'}</span>
                </div>
                <div className="toolSearch">
                  <div className="showSelect"><span>{nowSearch}</span></div>
                  <div className="selectBtn">
                    <img src={pulldown} alt="" style={{width:'24px',height:'24px',display:'inline-block',margin:'auto 0'}}/>
                    <ul className="toolList">
                      <li>
                        <div onClick={() => {setNowSearch('Event');}}>{t('Search Event')}</div>
                      </li>
                      <li>
                        <div onClick={() => {setNowSearch('Extrinsic');}}>{t('Search Extrinsic')}</div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className="flex flex-col mb-12">
                <span className="inline-block mr-1">{t('Please enter Hash / Name to search')}</span>
                <div className="border">
                  <TextArea
                    value={inputValue}
                    onChange={textInput}
                    placeholder={t('Please enter Hash / Name to search')}
                    autoSize={{minRows: 6, maxRows: 10}}
                    bordered={true}
                  />
                </div>
              </div>
              <Button block style={{background: 'black', borderRadius: '4px', cursor: 'pointer'}}
                      className="toolsBtn w-overSpread h-12 bg-topBar-black text-topBar-white mt-12 items-center text-center"
                      onClick={searchFun} disabled={loading} loading={loading}>{!loading &&
              <span className="inline-block mx-auto my-auto">{t('Search')}</span>}</Button>
            </div>
            <div className="items-center my-auto mx-auto text-center">
              <img className='arrowChange' src={arrowChangeIcon} alt=""/>
            </div>
            <div
              className="bg-white-darker border bor items-center my-auto ml-0 text-center mr-6 bg-topBar-gray h-overSpread flex justify-center items-center"
              style={{
                background: '#F9F9F9',
                borderRadius: '10px',
                border: '1px solid #DBDBDB',
                maxHeight: '34rem'
              }}>
              {listValue || listValue.length > 0 ?
                <div className="overflow-scroll w-overSpread h-overSpread"
                     style={{background: 'white', borderRadius: '10px'}}>
                  {/*{<JsonApi json={listValue}/>}*/}
                  <pre
                    style={{
                      textAlign: 'left',
                      backgroundColor: 'white',
                      padding: 0,
                      color: '#959595'
                    }}
                  >
                  {JSON.stringify(listValue, null, 2)}</pre>
                </div> : <>
                  {loading ?
                    <img src="https://scan.chainx.org/static/media/loading.80f33db6.png" alt=""/> : <>{!isCorrectValue ?
                      <div className="flex flex-col">
                        <img className="inline-block w-18 my-0 mx-auto" src={Icon} alt=""/>
                        <div>{t('Enter the Event or Extrinsic for conversion')}</div>
                      </div> :
                      <div className="flex flex-col">
                        <img className="inline-block w-18 my-0 mx-auto" src={noDataIcon} alt=""/>
                        <div>{t(`${isCorrectValue}`)}</div>
                      </div>
                    }</>}
                </>}
            </div>
          </Container>
        </Wrapper>
      </div>
    </>
  );
}
