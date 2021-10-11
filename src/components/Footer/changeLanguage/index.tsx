import React from "react";
import { useTranslation } from "react-i18next";

function ChangeLanguage(){
    const { i18n } = useTranslation();

    return (
        <div 
            className='flex justify-between items-center px-2.5 py-1.2 mr-8 w-28 cursor-pointer'
        >
            <div onClick={()=> i18n.changeLanguage(i18n.language = "zh") } className={i18n.language==='zh'?'text-black-darker':''}>English</div> 
            / 
            <div onClick={()=> i18n.changeLanguage(i18n.language = "en") } className={i18n.language==='en'?'text-black-darker':''}>中文</div>
        </div>
    )
}
export default ChangeLanguage;