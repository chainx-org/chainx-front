import { useEffect } from 'react'

//点击ref以外区域关闭
export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
}

//数字种添加·，·号
export function reName(num){
  let type = Object.prototype.toString.call(num)
  let str = ''
  if (type === '[object String]') {
    str = num
  } else if (type === '[object Number]') {
    str = num.toString()
  } else {
    str = ''
  }

  if (/\./.test(str)) {
    return str.replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(/\d{3}(?![,.]|$)/g, '$&,')
  } else {
    return str.replace(/\d(?=(\d{3})+$)/g, '$&,')
  }
}

//精度转化工具
export function accuracy(num) {
  let type = Object.prototype.toString.call(num)
  let resultParse
  if (type === '[object Number]') {
    let accuracyNum = num / Math.pow(10,8)
    let header = parseInt(accuracyNum)
    let end = (accuracyNum - header)
    let endstr = end.toFixed(4).substring(2)
    let headerSplit = reName(header)
    resultParse = headerSplit.concat('.' + endstr)
    return resultParse
  } else if (type === '[object String]') {
    return accuracy(Number(num))
  } else {
    return '-'
  }
}

export function accuracyInt(num) {
  let type = Object.prototype.toString.call(num)
  if (type === '[object Number]') {
    let accuracyNum = num / (100000000)
    let header = parseInt(accuracyNum)
    return header
  } else if (type === '[object String]') {
    return accuracy(Number(num))
  } else {
    return '-'
  }
}