import { get } from '../hooks/useApi'

export default function api(a, window) {

  const getBlockData = async (value, window) => {
    try {
      const res = await get(`/extrinsics/block?=${value}`, ``)
      if (res) {
        window.location.href = `/blockDetails/${value}`
      } else {
        try {
          const res1 = await get(`/extrinsics/${value}`, ``)
          if (res1) {
            window.location.href = `/extrinsics/${value}`
          } else {
            // window.location.href = `/`
          }
        } catch (e) {
          // window.location.href = `/`
        }

      }
    } catch (e) {
      // window.location.href = `/`
    }

  }

  function search(input, window) {
    if (input === '') {
      return `/`
    } else {
      if (/^[0-9]*$/.test(input)) {
        console.log(window)
        window.location.href = `/blockDetails/${input}`
      } else {
        return getBlockData(input, window)
      }
    }


  }

  return search(a, window)
}

