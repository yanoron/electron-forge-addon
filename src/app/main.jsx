import React, { useState, useEffect } from "react";

import S from './main.module.css'

console.log(window)

export default function Main() {

    const [count, setCount] = useState(0)
    const [msg, setMsg] = useState("")

    useEffect(() => {
        const removePong = window.e.ipc.on('pong', handleClick)
        const removeException = window.e.ipc.on('exception-catch-ok', handleException)
        
        return () => {
            removePong()
            removeException()
        }
    }, [])

    const handleException = (e) => {
        setMsg(e ? "OK" : "NOT OK")
    }

    const handleClick = (e) => {
        setCount(x => x+1)
    }

    const handlePing = () => {
        window.e.api.ping()
    }

    return (
        <div>
            <div> 
                Main {count} / {msg}
            </div>
            <button className={S.test} onClick={handleClick}>Click Me</button>
            <button onClick={handlePing}>Ping</button>
        </div>
    )
}

