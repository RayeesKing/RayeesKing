const display = (num) => {
    document.getElementById("input-value").value = document.getElementById("input-value").value + num
}
function cleardisplay() {
    document.getElementById("input-value").value = " "
}
const calculate = () => {
    const val = document.getElementById('input-value').value
    const result = eval(val)
    document.getElementById("input-value").value=result
}