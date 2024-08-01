$(document).ready(function(){

    $('header button').click(()=>{
        $('form').slideDown();
    })

    $('#botao-c').click(()=>{
        $('form').slideUp()
    })

    $('form').on('submit', (e)=>{
        e.preventDefault();

        const urlImg = $('#url-img').val();
        const novoImg = $('<li style="display:none;"></li>');
        $(`<img src='${urlImg}'>`).appendTo(novoImg);

        $(`<div class="overlay-img">
            <a href="${urlImg}" target="_blank">var img full</a>
        </div>`).appendTo(novoImg);
        $(novoImg).appendTo('ul');
        $(novoImg).fadeIn();
        $('#url-img').val('');
    })
})