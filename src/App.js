import axios from "axios";
import {useState, useEffect} from "react";
import Page from "./components/Page";




function App() {

  const [monthData, setMonthData] = useState([]); 

  useEffect(() => {
    const getMonthData = async () => {
      const dataFromApi = await fetchMonthData()
      console.log(dataFromApi)
      setMonthData(dataFromApi)
    }

    // getMonthData()
  }, [])

  // fetch month data
  const fetchMonthData = async (month="July") => {
    const res = await fetch("https://v1.igpods.com/api/social_calendar/get/" + month)
    const data = await res.json()
    return data;
  }


  return (
    <Page />
  );
}



export default App;
