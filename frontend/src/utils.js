export const timeToString = (time) => {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    
    const pad = v => v.toString().padStart(2, '0');
    return `${pad(hour)}:${pad(minutes)}`;
}

export const timeInMinutes = time => {
    const rawMinutes = (Math.round(time) / (60 *  1000));
    return Math.round(rawMinutes);
}

export const addMinutesToTime = (time, minutes) => {
    return new Date(time.getTime() + minutes * 60 * 1000);
}

export const hourToString = (hr, mins = 0) => {
    const pad = v => v.toString().padStart(2, '0');
    return `${pad(hr)}:${pad(mins)}`
}

export const getDateOfHours = (hr, mins = null) => {
    const date = new Date();
    date.setHours(hr);
    if(mins) {
        date.setMinutes(mins);
    }
    return date;
}