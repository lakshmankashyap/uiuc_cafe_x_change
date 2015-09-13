var Deals = require('../models/Deals');


exports.index = function(req, res) {
	var foundDeals = [];
  	Deals.find({}, 
  	function (err, docs){
     	// debug(JSON.stringify(docs));
		if (!docs)
		{
			foundDeals = [];
		}
		else
		{
			foundDeals = docs;
		}

		res.render('deals', {
			title: 'Deals',
			deals: foundDeals
		});
	});
};

exports.newDeal = function(req, res, next){
	// console.log('hey');
	console.log(req.body);
	Deals.create({
		venmoUsername: req.body.venmoUsername,
		credits: req.body.credits,
		dollars: req.body.dollars,
		ihave: req.body.ihave,
		email: req.body.email
	}, function(err){
		if (err) throw err;
	});

	// res.window.location('/deals');

	// var deal = new Deals({
	//   venmoUsername: req.venmoUsername,
	//   credits: req.credits,
	//   dollars: req.dollars,
	//   ihave: req.ihave
	// });e

	// deal.save(function(err){
	//   if (err) throw err;

	//   console.log('deal saved');
	// });
};

exports.rmDeal = function(req, res, next) {
	console.log(req.body);
	Deals.findById(req.body.id, function(err, doc){
		if (err) throw err;
		if (doc)
		{
			doc.remove();
		}
	});
};