$(document).ready(function(){
    $('#form-tarefa').submit(function(e){
        e.preventDefault()

        $('main').css('display', 'block')
        
        const novaTarefa = $('#nova-tarefa')
        let tarefa = $(`<li>${novaTarefa.val()}</li>`).appendTo('ul')
        $('li').slideDown()

        novaTarefa.val('')
    })

    $('main ul').on('click', 'li', function () {
        $(this).toggleClass('line-through')
})
})