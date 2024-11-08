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

export function convertMinuteToHour(minute) {
  const hour = Math.floor(minute / 60) 
  const min = minute % 60
  if(minute === 0) return '0m'
  if(hour === 0) return min + 'm'
  if(min === 0) return hour + 'h'

  return Math.floor(minute / 60) + 'h' + (minute % 60)
}

export function formatNumber(number) {
  return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}