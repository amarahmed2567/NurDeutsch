import React from 'react'
import styles from "./TranslateResult.module.css"
const {TranslateResultContinar,TranslateResultText,TranslateResultSubText,TranslateResuubltMainText,TranslateResultIntoSentence,TranslateResultIntoSentenceSubText,TranslateResultIntoSentenceMainText} = styles

function TranslateResult({tranResult}) {
    
  return (
    <div className={TranslateResultContinar}>
        <div className={TranslateResultText}>
            <h5 className={TranslateResultSubText}>Beduetung</h5>
            <div className={TranslateResuubltMainText}>
            {tranResult}
            </div>
        </div>   
    </div>
  )
}

export default TranslateResult