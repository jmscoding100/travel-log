import { useState, useEffect } from "react"


import Header from "./components/Header"
import Main from "./components/Main"


import data from "./data"

const App =()=>{


// useState[container, setter fuction]
const [myData, setMyData] = useState([])

// useEffect(callback function, dependency arryay)
useEffect(()=>{
    setMyData(data)
},[])




    return(
        <>
        <Header />
        <Main data={myData} />
        </>
    )
}

export default App