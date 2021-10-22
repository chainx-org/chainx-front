import {useEffect } from "react";

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
  let str = num.toString()
  if(/\./.test(str)){
    return str.replace(/\d(?=(\d{3})+\.)/g, "$&,").replace(/\d{3}(?![,.]|$)/g, "$&,");
  }else{
    return str.replace(/\d(?=(\d{3})+$)/g, "$&,");
  }
}