import { useState } from 'react'
// css in js
import styles from './box.module.css'

const Box = () => {
    const [open, setopen] = useState(false)
    return (
      <div>
        <button onClick={() => setopen(!open)}>
            {open ? 'Close' : 'Open'}
        </button>
        <div className={`${styles.box} ${open?styles.open:''}`}></div>
      </div>
    )
}

export default Box