$(()=>{
    
    $('#seeEvent').click(()=>{
      $('#formEvent').show()
     })
  
     $('#dismissEvent').click(()=>{
      $('#formEvent').hide()
     })
  
     $('#dismissEventSend').click(()=>{
       $('#formEvent').hide()
      })
              
      //nao funciona... da hide mesmo quando clico dentro do modal..
     //$('.w3-modal').click(function(){
       //$('#formPub').hide();
     //})           
     
  })

  $(document).on("click", ".open-AddId", function () {
     var myId = $(this).data('id');
     $(".modal-body #myId").val( myId );
     // As pointed out in comments, 
     // it is unnecessary to have to manually call the modal.
     // $('#addBookDialog').modal('show');
});
  