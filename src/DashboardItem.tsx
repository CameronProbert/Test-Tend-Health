import type { WaitTime } from "./Types";

export default function DashboardItem({info}: {info: WaitTime}) {
    const showPatients = info.patientsInQueue !== null && info.patientsInQueue !== undefined
    
    return <div className="wait-time">
        <h2 className="title">{info.name}</h2>
        <p>Wait time: {info.waitTimeForDisplay}</p>
        {showPatients && (
            <><h3>Patients:</h3>
                <p>Currently {info.patientsInQueue} in queue</p>
                <p>Past 4 hours: {info.patientsInPastFourHours}</p>
                <p>Past 12 hours: {info.patientsInPastTwelveHours}</p>
                <p>Past 24 hours: {info.patientsInPastTwentyFourHours}</p>
            </>)}
    </div>
}