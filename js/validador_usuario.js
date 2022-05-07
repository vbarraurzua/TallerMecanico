
/**validador correo al dar click en el boton */

$(".uno").hide();
$(".dos").hide();


$('#validate').click(function() {

var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

if (regex.test($('#email').val().trim())) {
alert('Correo validado');
$(".uno").hide();
$(".dos").show();

} else {
alert('La direccón de correo no es válida');
      
        $(".uno").show();
}
});

/**<div class="container">
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            <div class="well">
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" class="form-control">
                </div>
              <span class="uno">no valido</span>
                            <span class="dos">valido</span>
                <div class="form-group">
                    <button type="button" id="validate" class="btn btn-primary">
                        Validar
                    </button>
                </div>
            </div>
        </div>
    </div>
</div> */