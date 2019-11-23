export const timeToString = (time) => {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    
    const pad = v => v.toString().padStart(2, '0');
    return `${pad(hour)}:${pad(minutes)}`;
}

export const timeInMinutes = time => {
    return Math.round(time) / (60 *  1000).toPrecision(2);
}

export const addMinutesToTime = (time, minutes) => {
    return new Date(time.getTime() + minutes * 60 * 1000);
}