$(document).ready(function(){
	$("#submit").click(function(e){
		e.preventDefault();
		$.post('/newDeal', $("#newDeal_form").serialize());
		console.log($("#newDeal_form").serialize());
	});
});