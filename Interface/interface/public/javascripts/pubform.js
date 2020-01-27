$(()=>{
    
    $('#seePub').click(()=>{
      $('#formPub').show()
     })

    
     $('#dismiss').click(()=>{
      $('#formPub').hide()
     })
  
     $('#dismissSend').click(()=>{
       $('#formPub').hide()
      })
              

      //nao funciona... da hide mesmo quando clico dentro do modal..
     //$('.w3-modal').click(function(){
       //$('#formPub').hide();
     //})

  })
  
    $(function () {
        $('#datetimepicker1').datetimepicker();
    }); 

    $(function () {
        $('#datetimepicker7').datetimepicker();
        $('#datetimepicker8').datetimepicker({
            useCurrent: true
        });
        $("#datetimepicker7").on("change.datetimepicker", function (e) {
            $('#datetimepicker8').datetimepicker('minDate', e.date);
        });
        $("#datetimepicker8").on("change.datetimepicker", function (e) {
            $('#datetimepicker7').datetimepicker('maxDate', e.date);
        });
    });



  $(function() {
       var cont = 1
   
       $("#add").click(e => {
           e.preventDefault()
           cont++
           var campo = $('<div></div>', {class: 'w3-container', id: 'f'+cont})
           var desc = $('<div></div>', {class: 'w3-cell-row', id: 'desc'+cont})
           var descLabel = $('<label class="w3-cell">Descrição:</label>')
           var descInput = $('<input/>', {class: 'w3-input w3-cell', type: "text", name: "desc"})
           var ficheiro = $('<div></div>', {class: 'w3-cell-row', id: 'ficheiro'+cont})
           var ficheiroLabel = $('<label class="w3-cell">Ficheiro:</label>')
           var ficheiroInput = $('<input/>', {class: 'w3-input w3-cell', type: "file", name: "ficheiro"})
           $("#lista").append(campo)
           $("#f"+cont).append(desc)
           $("#desc"+cont).append(descLabel, descInput)
           $("#f"+cont).append(ficheiro)
           $("#ficheiro"+cont).append(ficheiroLabel, ficheiroInput)
       })
   })