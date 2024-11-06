import moment from 'moment'
import { authStore } from '../store'
export function convertDateFromTimezoneToTimeStamp(date, zone, hasHour) {
  const { shop } = authStore()
  if (!moment(date).isValid) return null
  if (zone == null) zone = '+07:00'

  let s = ''
  if (hasHour) s = moment(date).format('YYYY-MM-DDTHH:mm:ss') + zone
  else s = moment(date).format('YYYY-MM-DDT00:00:00') + zone

  return Date.parse(s) / 1000
}

export function convertDateToTimeZone(date_local) {
  const { shop } = authStore()
  let timezone = shop?.timezone || 7
  let tmp = moment(date_local).utcOffset(timezone)
  let date_timezone = new Date(tmp.year(), tmp.month(), 1, tmp.hour(), tmp.minute(), tmp.second())

  return date_timezone
}
