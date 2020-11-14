function compareDOB(direction = 1) {
    return function (employeeRecord1, employeeRecord2) {
        const age1 = `${employeeRecord1.dob.age}`
        const age2 = `${employeeRecord2.dob.age}`
        let result = 0;
        if(age1 > age2) {
            result = 1;
        } else if (age1 < age2) {
            result = -1;
        }
        return result * direction;
    }
}
export default compareDOB;