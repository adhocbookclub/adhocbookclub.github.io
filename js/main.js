// activate tooltips for members page
$(function () {
  $('#members [data-toggle="tooltip"]').tooltip({
    placement: "bottom",
    html: true,
    trigger: "click hover"
  });
});

$('#nomination').on('show.bs.modal', function (event) {
  var cover = $(event.relatedTarget); // Button that triggered the modal
  var title = cover.data('title');
  var author = cover.data('author');
  var summary = cover.data('summary');
  var goodreads = cover.data('goodreads');
  var amazon = cover.data('amazon');

  var modal = $(this);
  modal.find('.modal-title').html(title + ' <small>' + author + '</small>');
  modal.find('.modal-body').html(summary);
  modal.find('.modal-footer').html('<a href="http://bit.ly/' + goodreads + '" target="_blank">Goodreads</a> &middot; <a href="http://amzn.to/' + amazon + '" target="_blank">Amazon</a>');
})
