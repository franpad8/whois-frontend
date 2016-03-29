 $(document).ready(function(){
 	$('.color-preview').on('click', function(){
 		$('#shirtDiv').css('background', $(this).css('background-color'));
 	});
 	$('.cloth-type').on('click', function(){
 		$('#tshirtFacing').attr("src", 'img/shirt_front_'+$(this).val()+'.png');
 	});
 });