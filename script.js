$(function() {
    const fechaHoy = new Date();
    const fechaNacimiento = new Date(1995, 9, 30);
    const fechaPrimeraExperienciaLaboral = new Date(2018, 0, 1);

    function write(elementId, msg, phrase, index) {
      if (index == msg.length) return;
    
      phrase += msg[index];
      $(elementId).text(phrase);
      
      setTimeout(function() {
        write(elementId, msg, phrase, ++index);
      }, 120);
    }

    const aniosEntreFechas = (fechaMayor, fechaMenor) => {
      const diferencia = fechaMayor.getTime() - fechaMenor.getTime();
      return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
    }

    // efecto de escritura en el saludo
    $('#saludo').text(''); 
    write('#saludo', "Hi, I'm Guille", '', 0);
    
    // efecto subtitulo
    $("#subtitulo").hide();
    $("#subtitulo").slideDown( "slow" );

    // calcula y muestra la edad actual
    const edadActual = aniosEntreFechas(fechaHoy, fechaNacimiento);
    $('#edad').text(edadActual);

    // calcula y muestra anios experiencia laboral
    const aniosExperiencia = aniosEntreFechas(fechaHoy, fechaPrimeraExperienciaLaboral);
    $('#experiencia').text(aniosExperiencia);
    
  });