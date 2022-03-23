function Contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '[ERROR] Número inicial não pode ser 0.'
    }
    else {
        res.innerHTML = 'Contando: '
        var ini = Number(inicio.value)
        var end = Number(fim.value)
        var pas = Number(passo.value)

        if (ini < end) {
            for (var c = ini; c <= end; c += pas) {
                res.innerHTML += ` ${c} `
            }
        }
        else {
            for (var c = ini; c >= end; c -= pas) {
                res.innerHTML += ` ${c} `
            }
        }
        res.innerHTML += '-Fim-'
    }
}