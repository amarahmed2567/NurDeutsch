import React from 'react'

function Send({color}) {
  return (
    <>
        <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.847168 21.5119V0.981888L25.2266 11.2469L0.847168 21.5119ZM3.41342 17.6625L18.6185 11.2469L3.41342 4.83127V9.32221L11.1122 11.2469L3.41342 13.1716V17.6625ZM3.41342 17.6625V11.2469V4.83127V9.32221V13.1716V17.6625Z" fill={color ? color: "#1D1B20"}/>
        </svg>
    </>
  )
}

export default Send