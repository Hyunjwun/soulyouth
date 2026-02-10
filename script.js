$(document).ready(function () {
  const envelope = $("#envelope");

  $("#open").click(function () {
    envelope.removeClass("close").addClass("open");
  });

  $("#reset").click(function () {
    envelope.removeClass("open").addClass("close");
  });

  envelope.click(function () {
    envelope.toggleClass("open close");
  });
});
