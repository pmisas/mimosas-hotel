
         function mostrar(){
          document.getElementById('menu').style.display = 'block';
          document.getElementById('labelcheck1').style.display = 'block';
          document.getElementById('labelcheck').style.display = 'none';
        }
        function ocultar(){
          document.getElementById('menu').style.display = 'none';
          document.getElementById('labelcheck').style.display = 'block';
          document.getElementById('labelcheck1').style.display = 'none';
        }
  
        function pantallagrande(){
          document.getElementById('menu').style.display = 'block';
          document.getElementById('labelcheck').style.display = 'none';
          document.getElementById('labelcheck1').style.display = 'none';
        }
        function pantallapequeña(){
          document.getElementById('labelcheck').style.display = 'block';
        }
        $(function(){
        $("[data-bs-toggle='tooltip']").tooltip();
        $("[data-bs-toggle='popover']").popover();

        $('#comenta').on('show.bs.modal', function (e){
        	console.log('la reserva se esta mostrando');

            $('#comentar').removeClass('btn-comenta');
            $('#comentar').addClass('btn-primary');

        	});

        $('#comenta').on('shown.bs.modal', function (e){
          console.log('la reserva se esta haciendo');
          });

        $('#comenta').on('hide.bs.modal', function (e){
          console.log('la reserva se esta ocultando');
          });

          $('#comenta').on('hidden.bs.modal', function (e){
          console.log('la reserva ya se esta ocultó');

          $('#comentar').removeClass('btn-primary');
           $('#comentar').addClass('btn-comenta');

          });
      })