function clean() {
    document.getElementById('tela').value = ' '
}

function maius() {
    var dadosMaius = document.getElementById('tela').value
    document.getElementById('tela').value = dadosMaius.toUpperCase()
}

function minus() {
    var dadosMinus = document.getElementById('tela').value
    document.getElementById('tela').value = dadosMinus.toLowerCase()

}

function primMaius(str) {
    var str = document.getElementById('tela').value

    convers = str.toLowerCase().replace(/(?:^|\s)\S/g, function (i) {
        return i.toUpperCase()
    })

    return document.getElementById('tela').value = convers

}