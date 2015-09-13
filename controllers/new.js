/**
 * GET /
 * Deals page.
 */

exports.index = function(req, res) {
  res.render('new', {
    title: 'New Deal'
  });
};
