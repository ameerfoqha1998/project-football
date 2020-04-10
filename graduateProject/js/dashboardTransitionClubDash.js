$(document).ready(function () {
  $(".dashboard-view").load("profile.html");

  $(".profile-link").click(function () {
    $(".dashboard-view").load("profile.html");
  });

  $(".player-link").click(function () {
    $(".dashboard-view").load("players.html");
  });

  $(".matches-link").click(function () {
    $(".dashboard-view").load("matches.html");
  });

  $(".payment-link").click(function () {
    $(".dashboard-view").load("payment.html");
  });
});
