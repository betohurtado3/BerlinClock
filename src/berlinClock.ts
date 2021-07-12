
export function validatetimestamp(str: string): boolean {
    const validTimePattern = /^(([01][0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]$/gm
    return validTimePattern.test(str);
}

export function checkTopLight(str: string): string {
    let sec = str.split(":")[2];
    if (Number(sec) % 2 === 0)
        return "Y"
    else
        return "O"
}

export function checkTopHour(str: string): string {
    let hours: number = parseInt(str.split(":")[0]);
    let fiveHoursCount: number = Math.trunc(hours / 5);
    return 'R'.repeat(fiveHoursCount).padEnd(4, "O");
}

export function checkBottomHour(str: string): string {
    let hour: number = parseInt(str.split(":")[0]);
    let hourCount: number = hour%5;
    return 'R'.repeat(hourCount).padEnd(4,"O");
}

export function checkTopMinutes(str: string): string {
    let minute: number = parseInt(str.split(":")[1]);
    let topMinutes = "";
    
    for (let i = 1; i <= minute/5; i++) {
        const isMultipleOf15 = ((i * 5) % 15 === 0)
        topMinutes += isMultipleOf15 ? 'R' : 'Y'
    }
    return topMinutes.padEnd(11, "O");
}

export function checkBottomMinutes (str: string): string {
    let minutes: number = parseInt(str.split(":")[1]);
    let minutesCount: number = minutes%5;
    return 'Y'.repeat(minutesCount).padEnd(4,"O");
}

export function checkRepresentation (str: string):string {
    if(validatetimestamp(str))
    {
        return checkTopLight(str) + "\n" + checkTopHour(str) +"\n" + checkBottomHour(str) + "\n" + checkTopMinutes(str) + "\n" + checkBottomMinutes(str);
         
    }
    return "TimeIsNotValid";  
}