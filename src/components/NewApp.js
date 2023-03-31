import React, {useState, useEffect} from "react";

const NewApp = () => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setNum(2)
    }, 1000)
  })

  return(
    <h1>
      {num}
    </h1>
  )
}

export default NewApp