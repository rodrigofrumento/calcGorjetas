function calcTip(e) {
    e.preventDefault()
    let bill = document.getElementById('bill').value
    let service = document.getElementById('service').value
    let people = document.getElementById('people').value

    if(bill == '' | service == 0){
        alert('preencha os valores')
        return
    }

    if(people == '' | people <= 1) {
        people = 1
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * service) / people
    total = total.toFixed(2)
    document.getElementById('tip').innerHTML = total
    document.getElementById('totalTip').style.display = "block"

}

document.getElementById('totalTip').style.display = "none"
document.getElementById('each').style.display = "none"

document.getElementById('tipsForm').addEventListener('submit', calcTip)