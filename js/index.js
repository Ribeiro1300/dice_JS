function exec()
{
    var display = document.querySelector("h1")
    var n1 = Math.floor(Math.random() * 6)+1
    var n2 = Math.floor(Math.random() * 6)+1
    var x = document.querySelector("#img1")
    var y = document.querySelector("#img2")
    x.setAttribute("class", "img"+n1)
    y.setAttribute("class", "img"+n2)

    if (n1>n2)
    {
        display.innerHTML = "Player 1 Ganhou!"
    }
    else if (n1<n2)
    {
        display.innerHTML = "Player 2 Ganhou!"
    }
    else if (n1 == n2)
        display.innerHTML = "Deu empate!"



}