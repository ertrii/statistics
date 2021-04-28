export default function hours(hour: number, min: number = 0): number {
  const min_to_hour = min / 60
  return hour + min_to_hour
}

export function hours_format(hour: number) {
  const only_hour = Math.floor(hour)
  const min = Math.round((hour % 1) * 60)
  return `${only_hour} hrs ${min} mins`
}
