import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCode = () => {

    const [qrCode, setQrCode] = useState("");

    const [input, setInput] = useState("");
  return (
    <div>
        <h1>QR CODE GENERATOR</h1>
        <div>
            <input onChange={(e)=>setInput(e.target.value)} type="text" name='qr-code' placeholder='enter your qr code' />
            <button onClick={()=>setQrCode(input)}>Generate Button</button>
        </div>
        <QRCode id='qr-code-value' value={qrCode} size={400}/>
    </div>
  )
}

export default QrCode