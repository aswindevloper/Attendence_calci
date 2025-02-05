function calculateAttendance() {
    let totalHours = parseInt(document.getElementById("totalHours").value);
    let absentHours = parseInt(document.getElementById("absentHours").value);

    if (isNaN(totalHours) || isNaN(absentHours) || totalHours <= 0 || absentHours < 0 || absentHours > totalHours) {
        document.getElementById("result").innerHTML = "⚠️ Please enter valid numbers.";
        return;
    }

    let attendedHours = totalHours - absentHours;
    let currentAttendance = (attendedHours / totalHours) * 100;
    currentAttendance = currentAttendance.toFixed(2);

    let maxAbsentFor80 = Math.floor(totalHours * 0.20);
    let maxAdditionalLeave = maxAbsentFor80 - absentHours;

    let message = `Your Current Attendance: <b>${currentAttendance}%</b><br>`;

    if (currentAttendance >= 80) {
        message += `✅ You can take <b>${maxAdditionalLeave}</b> more hours of leave and stay above 80%.`;
    } else {
        let neededAttendance = Math.ceil(totalHours * 0.80) - attendedHours;
        message += `❌ You need to attend <b>${neededAttendance}</b> more hours to reach 80%.`;
    }

    document.getElementById("result").innerHTML = message;
}
