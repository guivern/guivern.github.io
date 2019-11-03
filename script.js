$(function() {
    let idsaludo = '#saludo';
    $(idsaludo).text(''); //delete the previous text
    
    function write(elementId, msg, phrase, index) {
      if (index == msg.length) return;
    
      phrase += msg[index];
      $(elementId).text(phrase);
      
      setTimeout(function() {
        write(elementId, msg, phrase, ++index);
      }, 120);
    }
    
    write(idsaludo, "Hi, I'm Guille", '', 0);
    //write(idSaludo2, "Hola, soy Guille", '', 0);

    $("#subtitulo").hide();
    $("#subtitulo").slideDown( "slow" );
    
  });