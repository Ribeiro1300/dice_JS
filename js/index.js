function exec()
{
    var display = document.querySelector("h1")
    var n1 = Math.floor(Math.random() * 6)+1
    var n2 = Math.floor(Math.random() * 6)+1
    var x = document.querySelector("#img1")
    var y = document.querySelector("#img2")
    var src1 = x.getAttribute("src")
    var src2 = y.getAttribute("src")

    src1 = src1.slice(0,8)+n1+src1.slice(9)
    src2 = src2.slice(0,8)+n2+src2.slice(9)
    
    x.setAttribute("src", src1)
    y.setAttribute("src", src2)

    var p1 = document.querySelector("#p1")
    var p2 = document.querySelector("#p2")
    var name1 = p1.value
    var name2 = p2.value

    if (n1>n2)
    {
        display.innerHTML = name1 +" Ganhou!"
    }
    else if (n1<n2)
    {
        display.innerHTML = name2 + " Ganhou!"
    }
    else if (n1 == n2)
        display.innerHTML = "Deu empate!"



}