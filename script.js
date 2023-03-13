var sumbit = document.getElementById('submit')
var text = document.getElementById('text')
var box = document.getElementById('box')
var buttoned = document.getElementById('button')
var refresh = document.getElementById('refresh')
const alertContainer = document.querySelector("[data-alert-container]")



sumbit.addEventListener("click", function (e) {
    e.preventDefault()

    var task = document.createElement('div')
    task.textContent = text.value
    box.appendChild(task)

    if (!text.value) {
        showAlert('Please type a task')
    }

    function showAlert(message, duration = 1000) {
        const alert = document.createElement("div")
        alert.textContent = message
        alert.classList.add("alert")
        alertContainer.prepend(alert)
        if (duration == null) return

        setTimeout(() => {
            alert.classList.add("hide")
            alert.addEventListener("transitionend", () => {
                alert.remove()
            })
        }, duration);

    }

    localStorage.setItem('tasks', text.value)
    console.log(localStorage.getItem('tasks'))



    refresh.addEventListener("click", function () {
        task.remove()
    })




});



