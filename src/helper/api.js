import { get } from '../hooks/useApi'

export default function api(a, window ,setLoading) {

  const tryExc = async(value, window)=>{
    try {
      const res1 = await get(`/extrinsics/${value}`, ``)
      if (res1) {
        window.location.href = `/#/extrinsicDetails/${value}`
        setLoading(false)
      } else {
        window.location.href = `/#/Nodata`
        setLoading(false)
      }
    } catch (e) {
      window.location.href = `/#/Nodata`
      setLoading(false)
    }
  }
  const getBlockData = async (value, window) => {
    value = value.trim()
    try {
      const res = await get(`/blocks/${value}`, ``)
      if (res) {
        window.location.href = `/#/blockDetails/${value}`
        setLoading(false)
      } else {
        tryExc(value,window)
      }
    } catch (e) {
      tryExc(value,window)
    }
  }

  const getAccountData = async (value, window) => {
    value = value.trim()
    try {
      const res = await get(`/accounts/${value}/assets`, ``)
      if (res) {
        window.location.href = `/#/addressDetails/${value}`
        setLoading(false)
      } else {
        window.location.href = `/#/Nodata`
      }
    } catch (e) {
      window.location.href = `/#/Nodata`
    }
  }

  async function search(input, window) {
    input = input.trim()
    if (input === '') {
      return `/`
    } else {
      if (/^[0-9]*$/.test(input)) {
        const res = await get(`/blocks/${input}`, ``)
        res ? window.location.href = `/#/blockDetails/${input}`
          : window.location.href = `/#/Nodata`
      } else {
        //判断是交易hash还是地址
        if(input.length>48){
          return getBlockData(input, window)
        }else {
          return getAccountData(input, window)
        }

      }
    }
  }
  return search(a, window)
}

