//负责全局的message提示，包括进行了copy操作
import React from 'react';

import { message } from 'antd';



export function MessageXsuccess (content:string):void{
  message.success(`This is a success message${content}`)
}

export function MessageXerror(content: string) {
  return (message.error('This is an error message'));
};

export function MessageXwarning(content: string) {
  return (message.warning('This is a warning message'));
};

