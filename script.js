function calculateAttendance() {
    let totalperiods = parseInt(document.getElementById("totalperiods").value);
    let absentperiods = parseInt(document.getElementById("absentperiods").value);

    if (isNaN(totalperiods) || isNaN(absentperiods) || totalperiods <= 0 || absentperiods < 0 || absentperiods > totalperiods) {
        document.getElementById("result").innerHTML = "⚠️ Please enter valid numbers.";
        return;
    }

    let attendedperiods = totalperiods - absentperiods;
    let currentAttendance = (attendedperiods / totalperiods) * 100;
    currentAttendance = currentAttendance.toFixed(2);

    let maxAbsentFor80 = Math.floor(totalperiods * 0.20);
    let maxAdditionalLeave = maxAbsentFor80 - absentperiods;

    let message = `Your Current Attendance: <b>${currentAttendance}%</b><br>`;

    if (currentAttendance >= 80) {
        message += `✅ You can take <b>${maxAdditionalLeave}</b> more periods of leave and stay above 80%.`;
    } else {
        let neededAttendance = Math.ceil(totalperiods * 0.80) - attendedperiods;
        message += `❌ You need to attend <b>${neededAttendance}</b> more periods to reach 80%.`;
    }

    document.getElementById("result").innerHTML = message;
}
