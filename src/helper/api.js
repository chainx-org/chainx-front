import { get } from '../hooks/useApi'

export default function api(a, window) {

  const getBlockData = async (value, window) => {
    value.trim()
    try {
      const res = await get(`/blocks/${value}`, ``)
      if (res) {
        window.location.href = `/blockDetails/${value}`
      } else {
      }
    } catch (e) {
      try {
        const res1 = await get(`/extrinsics/${value}`, ``)
        if (res1) {
          window.location.href = `/extrinsicDetails/${value}`
        } else {
          window.location.href = `/Nodata`
        }
      } catch (e) {
        window.location.href = `/Nodata`
      }
    }



  }

  async function search(input, window) {
    input.trim()
    if (input === '') {
      return `/`
    } else {
      if (/^[0-9]*$/.test(input)) {
        // console.log(window)
        const res = await get(`/blocks/${input}`, ``)
        res ? window.location.href = `/blockDetails/${input}`
          : window.location.href = `/Nodata`
      } else {
        return getBlockData(input, window)
      }
    }
  }
  return search(a, window)
}

