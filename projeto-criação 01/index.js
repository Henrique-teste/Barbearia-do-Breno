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
        ${numeroCliente}
        ${emailCliente} -
        ${dataCliente}
        </td> 
    </tr>
    `).appendTo(infoClientes)
    $(infoClientes).appendTo('tbody')
    
})
