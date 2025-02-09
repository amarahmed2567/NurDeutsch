import React, { useState } from 'react'
import styles from "./TranslateButton.module.css"
import Send from '../../assets/Send'
import axios from 'axios'
const {TranslateBtn} = styles

function TranslateButton({inputValue,setTransResult,setLoading}) {
 
    const TranslateFun = ()=>{
        setLoading(true)
        axios.post("http://localhost:5000/translate",{
            text:inputValue
        }).then((res)=>{
        setLoading(false)
            console.log(res)
            setTransResult(res.data?.translation )
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (

    <button className={TranslateBtn} onClick={TranslateFun}>
        <Send />    
    </button>
  )
}

export default TranslateButton