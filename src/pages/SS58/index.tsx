import React, { useState } from 'react';
import CardBox from '../../components/CardBox';
import { useTranslation } from 'react-i18next';
import blockLeakage from '../../assets/icon_Account switch.svg';
import searchIcon from '../../assets/img_switch.png';
import { encodeAddress } from '@polkadot/keyring';
import decodeAddress from '../../helper/encodeAddress';
const {hexToU8a, isHex} = require('@polkadot/util');

export default function SS58(props:any) {
  const {t} = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const [listValue, setListValue] = useState<any>([]);
  const [isCorrectValue,setIsCorrectValue] = useState('')
  const [searchNoData,setSearchNoData] = useState(false)
  const BoxContainer = {
    title: t('Enter the address of block leakage for query'),
    container: t('Enter the address or public key for conversion'),
    icon: searchIcon,
    result: t('Enter the address or public key for conversion')

  }
  let typeList = [
    {name: 'Chainx (Prefix: 44)', id: 44, value: ''},
    {name: 'Polkadot (Prefix: 0)', id: 0, value: ''},
    {name: 'Kusama (Prefix: 2)', id: 2, value: ''},
    {name: 'Darwinia (Prefix: 18', id: 18, value: ''},
    {name: 'Crab (Prefix: 42)', id: 42, value: ''},
    {name: 'Westend (Prefix: 42)', id: 42, value: ''},
    {name: 'Edgeware (Prefix: 7)', id: 7, value: ''},
    {name: 'Centrifuge (Prefix: 36)', id: 36, value: ''},
    {name: 'Mandala (Prefix: 42)', id: 42, value: ''},
    {name: 'Phala (Prefix: 42)', id: 42, value: ''},
    {name: 'Bifrost (Prefix: 6)', id: 6, value: ''},
    {name: 'Plasm (Prefix: 5)', id: 5, value: ''},
    {name: 'Stafi (Prefix: 20)', id: 20, value: ''},
    {name: 'Kulupu (Prefix: 16)', id: 16, value: ''},
    {name: 'Crust (Prefix: 42)', id: 42, value: ''},
    {name: 'Laminar (Prefix: 42)', id: 42, value: ''},
    {name: 'Karura (Prefix: 8)', id: 8, value: ''},
    {name: 'Reynolds (Prefix: 9)', id: 9, value: ''},
    {name: 'Acala (Prefix: 10)', id: 10, value: ''},
    {name: 'Polymath (Prefix: 12)', id: 12, value: ''},
    {name: 'Robonomics (Prefix: 32)', id: 32, value: ''},
    {name: 'Substrate (Prefix: 42)', id: 42, value: ''}
  ];
  const [loading,setLoading] = useState(false)
  const changeAddress = (value:string)=>{
    setListValue('')
    var input = value.trim();
    setInputValue(input)
    if(input){
      setIsCorrectValue('')
      setLoading(false)
    }
  }

  const selectAddress = () => {
    setLoading(true)

    const getAddressList = (value:string) => {
      typeList.reduce((acc, cur) => {
        if (typeList.length) {
          cur.value = encodeAddress(value, cur.id);
          // @ts-ignore
          acc.push(cur);
        }
        typeList.length--;
        return acc;
      }, []);
      setListValue(typeList);
      setLoading(false)
      return true;
    };
    if (inputValue.includes('0x')) {
      let recordResult = encodeAddress(
        isHex(inputValue)
          ? hexToU8a(inputValue)
          : decodeAddress(inputValue)
      );
      getAddressList(recordResult);
    } else {
      try {
        return getAddressList(inputValue);
      } catch (error) {
        setLoading(false)
        setIsCorrectValue('Transformation failed. Address or public key not found')
        return false;
      }
    }
  };

  return (
    <>
      <CardBox cardBoxTitleIcon={blockLeakage} cardBoxTitleName={t('Transform Address/Public Key')}
               cardBoxTitleContainer={BoxContainer} inputValue={inputValue} listValue={listValue}
               selectAddress={selectAddress} inputValueFun={changeAddress} correctValue={isCorrectValue} loading={loading}/>
    </>

  );
}