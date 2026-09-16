import { useEffect, useState } from 'react'
import './contador.css'

export default function Contador({Minus, Plus}) {
  const [contador, setContador] = useState(0)
  return (
    <div className='contador-main'>
      <button onClick={() => setContador(contador - 1)}>
        <Minus size={32} />
      </button>
      <span>{contador}</span>
      <button onClick={() => setContador(contador + 1)}>
        <Plus size={32} />
      </button>
    </div>
  )

}
