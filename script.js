var a = document.getElementById("name")
var b = document.getElementById("email")
var c = document.getElementById("password")

var d = document.getElementById("Ername")
var e = document.getElementById("Eremail")
var f = document.getElementById("Erpassword")

var g = document.getElementById("eye")
var h = document.getElementById("btn")
var i = document.getElementById("form")
h.disabled = true

d.style.display = "none"
e.style.display = "none"
f.style.display = "none"

a.addEventListener("input", function () {
    if (a.value == "") {
        d.style.display = "block"
    }
    else {
        d.style.display = "none"
    }
    checked()
})
b.addEventListener("input", function () {
    if (b.value == "") {
        e.style.display = "block"
    }
    else {
        e.style.display = "none"
    }
    checked()
})
c.addEventListener("input", function () {
    if (c.value == "") {
        f.style.display = "block"
    }
    else {
        f.style.display = "none"
    }
    checked()
})

g.addEventListener("click", function () {
    if (c.type == "password") {
        c.type = "text"
    }
    else {
        c.type = "password"
    }
})

function checked() {
    if (a.value.length >= 3 && b.value.length >= 8 && c.value.length >= 8) {
        h.disabled = false
    }
    else {
        h.disabled = true
    }
}
h.addEventListener("click", function () {
    alert("Account created Successfully🎉")
    i.reset()
    h.disabled = true
})
