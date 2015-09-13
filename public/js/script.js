$(document).ready(function(){
	$("#submit").click(function(e){
		e.preventDefault();
		$.post('/newDeal', $("#newDeal_form").serialize());
		console.log($("#newDeal_form").serialize());
    	window.location.href = "/deals";
	});

	$("#rm_btn").click(function(e){
		e.preventDefault();
		var id = $(this).data('id');
		$.post('/rmDeal', {
			'id':id
		});
		location.reload();
	});
});