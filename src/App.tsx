import { useCallback, useEffect, useState } from 'react'
import './App.css'
import type { WaitTime } from './Types'
import DashboardItem from './DashboardItem'
import { data } from './data'

type FetchDataRes = {
  waitTimes: WaitTime[],
  lastUpdate: string
}

/**
 * Fetches data from the API endpoint
 */
const fetchData = async () => {
  const url = "https://api.tend.nz/recruitment/clinical-wait-time";
  const apiKey = "cameron_probert"; // Secret in actual app
  return fetch(url, {
    mode: "cors",
    headers: {
      "x-api-key": apiKey,
      'Access-Control-Allow-Origin':'https://api.tend.nz'
    },
  })
}

function App() {
  const [error, setError] = useState<string>()
  const [lastUpdated, setLastUpdated] = useState<string>()
  const [waitTimes, setWaitTimes] = useState<WaitTime[]>()

  const getData: () => Promise<void> = useCallback(async () => {
    // Ideally fetch here, but I'm having issues with CORS and don't have
    // the time to sort it out within the given time frame.
    
    // const resp = await fetchData();
    // console.log("Text", await resp.text())
    // if (!resp.ok) {
    //   setError(resp.statusText)
    //   console.error("Error", resp.status)
    //   return;
    // }

    // const data: FetchDataRes = await resp.json()
    // console.log("Data", data)

    setWaitTimes(data.data.waitTimes)

    const lastUpdatedDate = new Date(data.data.lastUpdate)
    setLastUpdated(lastUpdatedDate.toLocaleString())
  }, [])

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <div className='main'>
      <h1>Tend Health</h1>
      {!!error && <p>Error: {error}</p>}
      {!!waitTimes?.length && <div className='wait-time-container'>
        {waitTimes.map(waitTime => 
        <DashboardItem info={waitTime} key={waitTime.id} />
      )}
      </div>
      }
      {!!lastUpdated && <p className="last-updated">
        Last updated: {lastUpdated}
      </p>}
    </div>
  )
}

export default App
