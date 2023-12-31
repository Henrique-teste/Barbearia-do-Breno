$(document).ready(function(){
})
$('form button').click(function(){
    $('thead th').slideDown();
})
$('form button').click(function(){
    $('tfoot th').slideDown();
})
$('form').on('submit',function(e){
    e.preventDefault();
    const nomeCliente = $('#nome-cliente').val();
    const numeroCliente = $('#telefone-cliente').val();
    const emailCliente = $('#email-cliente').val();
    const dataCliente = $('#horario-cliente').val();
    const infoClientes = $('<tr></tr>')
    $(`                
    <tr>
        <td>
        ${nomeCliente} -
        ${dataCliente}
        ${emailCliente} -
        ${numeroCliente}
        </td> 
    </tr>
    `).appendTo(infoClientes)
    $(infoClientes).appendTo('tbody')
        $('#nome-cliente').val('');
    $('#telefone-cliente').val('');
    $('#email-cliente').val('');
    $('#horario-cliente').val('');
    
})
