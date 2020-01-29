$(function() {
    var cont = 1

    $("#mais1").click(e => {
        e.preventDefault()
        cont++
        var campo = $('<div></div>', {class: 'w3-container', id: 'f'+cont})
        var desc = $('<div></div>', {class: 'w3-cell-row', id: 'desc'+cont})
        var descLabel = $('<label class="w3-cell">Description:</label>')
        var descInput = $('<input/>', {class: 'w3-input w3-cell', type: "text", name: "desc"})
        var ficheiro = $('<div></div>', {class: 'w3-cell-row', id: 'ficheiro'+cont})
        var ficheiroLabel = $('<label class="w3-cell">File:</label>')
        var ficheiroInput = $('<input/>', {class: 'w3-input w3-cell', type: "file", name: "file"})
        $("#lista").append(campo)
        $("#f"+cont).append(desc)
        $("#desc"+cont).append(descLabel, descInput)
        $("#f"+cont).append(ficheiro)
        $("#ficheiro"+cont).append(ficheiroLabel, ficheiroInput)
    })
})





function show_me(linha, f){
    if(f.mimetype == 'image/png' || f.mimetype == 'image/jpeg')
        var ficheiro = $('<img src="/ficheiros/' + f.name + '" width="100%"/>')
    else
        var ficheiro = $('<p>' + JSON.stringify(f) + '</p>')
        
    $("#display").empty()
    $('#display').append(ficheiro)
    $('#display').modal()
}