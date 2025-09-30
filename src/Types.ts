export type WaitTime = {
  id: string,
  name: string,
  waitTimeInMinutes: number,
  waitTimeForDisplay?: string,
  patientsInQueue?: number,
  patientsInPastFourHours?: string,
  patientsInPastTwelveHours?: string,
  patientsInPastTwentyFourHours?: string,
}