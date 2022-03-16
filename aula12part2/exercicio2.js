function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.getElementById('foto')
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.src = 'imagens/menino.jpg'
            }
            else if(idade < 21){
                //jovem
                img.src = 'imagens/jovemhomem.jpg'
            }
            else if(idade < 60){
                //adulto
                img.src = 'imagens/adultohomem.jpg'
            }
            else{
                //idoso
                img.src = 'imagens/idoso.jpg'
            }
        }
        else if(fsex[1].checked) {
            gen = 'Mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.src = 'imagens/menina.jpg'
            }
            else if(idade < 21){
                //jovem
                img.src = 'imagens/jovemmulher.jpg'
            }
            else if(idade < 60){
                //adulta
                img.src = 'imagens/adultomulher.jpg'
            }
            else{
                //idosa
                img.src = 'imagens/idosa.jpg'
            }
        }
    }
    res.innerHTML = `Você é um(a) ${gen} de ${idade} anos.`
}