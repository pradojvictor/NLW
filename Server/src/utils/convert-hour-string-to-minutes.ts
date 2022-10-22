//convert ex: 18:00 => ["18", "00"] => [18,00] "horus string to minutes"

export function converteHourToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(':').map(Number)

    const minutesAmount = hours * 60 + minutes;

    return minutesAmount;
}