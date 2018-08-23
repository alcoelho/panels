$(document).ready(function(){

  $('input[type=file]').on('change', function(event){
    var reader = new FileReader()
    var target = $(event.target) //alvo do evento é o input de upload
    reader.onload = function(event){
      var data = reader.result
      //input de upload -> parent -> irmão(img) == imagem correspondente
      target.parent().siblings('img').attr('src', data)
      // input de upload -> parent == form
      target.parent().hide()
    }

    reader.readAsDataURL( event.target.files[0] )
  })
})