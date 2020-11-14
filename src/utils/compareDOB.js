function compareDOB(direction = 1) {
    return function (employeeRecord1, employeeRecord2) {
        const date1 = `${employeeRecord1.dob.date}`
        const date2 = `${employeeRecord2.dob.date}`
        let result = 0;
        if(date1 > date2) {
            result = 1;
        } else if (date1 < date2) {
            result = -1;
        }
        return result * direction;
    }
}
export default compareDOB;