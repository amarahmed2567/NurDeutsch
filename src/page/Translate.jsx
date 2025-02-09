import React, { useState} from 'react'
import styles from "./Translate.module.css"
import TranslateButton from '../components/TranslateButton/TranslateButton'
import TranslateResult from '../components/TranslateResult/TranslateResult'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const {InputText} = styles
function Translate() {
  const [inputValue,setInputValue] = useState("");
  const [transResult,setTransResult] = useState("");
  const [loading,setLoading] = useState(false);

  return (
    <>
    <div className={InputText}>
        <input type="text" placeholder='Translate To Deutsch' onChange={(e)=>{setInputValue(e.target.value)}}/>
        <TranslateButton inputValue={inputValue} setTransResult= {setTransResult}  setLoading = {setLoading}/>
    </div>
    {transResult ? 
    loading ? <div className='loading-contanenr'> <AiOutlineLoading3Quarters className='loading' color='#FDFDC8' /> </div> : <TranslateResult tranResult = {transResult}/> :null }
    </>
  )
}

export default Translate