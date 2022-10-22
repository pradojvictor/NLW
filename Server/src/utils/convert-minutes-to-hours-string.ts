//convert ex: 1080 => 18:00  "minutes to hours string"

export function converteMinutesTohours(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const minute = minutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}