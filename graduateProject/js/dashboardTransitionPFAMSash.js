/*global load*/
$(document).ready(function () {
  $(".dashboard-view").load("club.html");

  $(".club-link").on("click", function () {
    $(".dashboard-view").load("club.html");
  });

  $(".player-link").click(function () {
    $(".dashboard-view").load("players.html");
  });

  $(".matches-link").click(function () {
    $(".dashboard-view").load("matches.html");
  });

  $(".laws-link").click(function () {
    $(".dashboard-view").load("law.html");
  });

  $(".jug-link").click(function () {
    $(".dashboard-view").load("judgment.html");
  });

  $(".payment-link").click(function () {
    $(".dashboard-view").load("payment.html");
  });
});
