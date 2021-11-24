import {useState, useEffect} from 'react'

export default function effects(){
  const [count, setCount] = useState(0);

  function tick(){
    console.log(count)
    // setCount(count + 1) - this won't work because count always return default value which defined so use prevCount
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    let timer = setInterval(tick, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      {count}
    </div>
  )
}
