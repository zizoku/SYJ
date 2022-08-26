$(document).ready(function(){

//--SOMBREADO PRIMER BOTON
	$('.panel .categoryitem[category="all"]').addClass('active');

//--FILTRANDO PRODUCTOS	
	$('.categoryitem').click(function(){
		var catproduct = $(this).attr('category'); 
		console.log(catproduct);

//--AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
	$('.categoryitem').removeClass('active');
	$(this).addClass('active');

//--OCULTANDO PRODUCTOS
$('.card').css('transform', 'scale(0)');
	function hideProduct(){
	$('.card').hide();
	}	setTimeout(hideProduct,400);

//--MOSTRANDO PRODUCTOS		
	function showProduct(){
	$('.card[category="'+catproduct+'"]').show();
	$('.card[category="'+catproduct+'"]').css('transform','scale(1)');
	} setTimeout(showProduct,400);
	});

//--MOSTRANDO PRODUCTOS ALL
$('.categoryitem[category="all"]').click(function(){
	function showAll(){
		$('.card').show();
		$('.card').css('transform', 'scale(1)');
	} setTimeout(showAll,400);
	});
});
