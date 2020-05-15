$(document).ready(function(){
    //setup
    let counter = 0;
    $('.counted').html(counter);

    $('.start').hide();
    $('.again').hide();
    $('.save').hide();
    $('.scores').hide();

    $('.displayscores').hide();


    $('.again').click(function(){
        location.reload();
    });

    //pseudo display
    $('.okpseudo').click(function(){
        let pseudo = $('.pseudo').val();
        $('.player').html(pseudo);
        console.log(pseudo);
    });

    $('.okpseudo').click(function(){
        if($('.pseudo').val()!=''){
            $('.start').show();
        }
    });

    //clicker
    $(".start").click(function(){
        $('.start').html('CLICK !!');
        setTimeout(function(){
            $('.start').attr("disabled","disabled");
            $('.start').html('TIME OVER!');
            $('.again').show();
            $('.save').show();
            $('.scores').show();
        }, 30000);
        counter++;
        $('.counted').html(counter);
        console.log(counter);
        return counter;
    });

    //AJAX !!!

    //GETSCORES
    $('.scores').click(function(){
        $('.displayscores').show();

        $.get( "http://localhost:3000/results", function( data ) {
            console.log(data);
            $('.result').html('');
            data.forEach(row => {
                console.log('ROW');
                console.log(row);
                $( ".result" ).append('<li> pseudo : '+ row['pseudo']+' | nbClick : '+ row['nbClick'] + '</li>');
            });
        });
    });
    //SAVE
    $('.save').click(function(){
        $.ajax({
            url: 'http://localhost:3000/results',
            type: 'POST',
            data: {
                pseudo : $('.pseudo').val(),
                nbClick : $('.counted').html()
            },
            success: function(){
                console.log('successs !');
            },
            error: function(){
                console.log('nop :(');
            },
        });
        console.log('executed');
    });
});




















