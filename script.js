var a=document.getElementById("name")
var b=document.getElementById("age")
var d=document.getElementById("course")
var e=document.getElementById("email")

var f=document.getElementById("table2")
var g=document.getElementById("One")
function Save()
{
    var c=document.querySelector('input[name="Gender"]:checked')
    var row=document.createElement("tr")
    row.innerHTML=`<td>${a.value}</td><td>${b.value}</td><td>${c.value}</td><td>${d.value}</td><td class="email">${e.value}</td><td><button id=delete onclick="Delete(this)">Delete</button></td>`
    f.append(row)
    g.reset()
}

function Delete(btn)
{
    btn.closest("tr").remove()
}