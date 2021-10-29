import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Popover } from 'antd';

export default function TimeStatus(content: any) {
  const {t} = useTranslation();


  const originTime = (
    <div>
      {moment(Number(content.content)).format('YYYY-MM-DD HH:mm:ss')}
    </div>
  );
  const [TimeData, setTimeData] = useState('');
  function getDuration() {
    let duration: string = '';
    let stopTime = new Date().getTime();
    let startTime = content.content;
    let second = moment.duration(moment(stopTime).valueOf() - moment(startTime).valueOf()).as('seconds');
    let days = Math.floor(second / 86400);
    let hours = Math.floor((second % 86400) / 3600);
    let minutes = Math.floor(((second % 86400) % 3600) / 60);
    let seconds = Math.floor(((second % 86400) % 3600) % 60);
    if (days > 0) duration = moment(Number(content.content)).format('YYYY-MM-DD HH:mm:ss');
    else if (hours > 0) duration = ' ' + hours + ' ' + t('Hours') + ' ' + minutes + ' ' + t('Minutes') + ' ' + t('ago');
    else if (minutes > 0) duration = ' ' + minutes + ' ' + t('Minutes') + seconds + ' ' + t('Seconds') + ' ' + t('ago');
    else if (seconds > 0) duration = ' ' + seconds + ' ' + t('Seconds') + ' ' + t('ago');
    setTimeData(duration);
    return duration;
  }

  useEffect(() => {
    getDuration();
  }, []);

  return (
    <Popover content={originTime}>
      {/*<Normal state={TimeData}/>*/}
      <div style={{
        fontSize:'14px',
        color:'rgba(0,0,0,0.65)',
        cursor:'pointer'
      }}>{TimeData}</div>
    </Popover>);
}