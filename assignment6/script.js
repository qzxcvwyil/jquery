// ===== Task 0: Setup =====
$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h1").css("color", "#29231f");          
  $("#name").css("font-size", "32px");      
  $(".intro").css("font-style", "italic");  

  $("#change-greeting").click(function () {
    $("#headline").text("Future Full-Stack Developer");
    $("#welcome-title").html("Welcome to <em>My jQuery</em> Portfolio");
  });

  $("#reset-greeting").click(function () {
    $("#headline").text("Front-End Developer in the making");
    $("#welcome-title").text("Welcome to My Portfolio");
  });

  $("#dark-btn").click(function () {
    $("body").css({ "background-color": "#1f1a17", "color": "#f5f0e8" });
    $(".part1, .part3").css("background-color", "#29231f");
    $(".part2").css("background-color", "#332b26");
    $(".form-box, .status, .panel, .live-output").css({ "background-color": "#3a322c", "color": "#f5f0e8" });
    $("h1").css("color", "#ffffff");
    $(".headline, #social-link").css("color", "#e08a70");
    $("nav, footer").css("background-color", "#120f0d");
  });

  $("#light-btn").click(function () {
    $("body").css({ "background-color": "#f5f0e8", "color": "#29231f" });
    $(".part1").css("background-color", "#ffffff");
    $(".part2").css("background-color", "#ebe2d3");
    $(".part3").css("background-color", "#f5f0e8");
    $(".status, .panel").css({ "background-color": "#ffffff", "color": "#29231f" });
    $(".form-box").css({ "background-color": "#ffffff", "color": "#29231f" });
    $("header .form-box, .live-output").css({ "background-color": "#f5f0e8", "color": "#29231f" });
    $("h1").css("color", "#29231f");
    $(".headline, #social-link").css("color", "#b75d45");
    $("nav, footer").css("background-color", "#29231f");
  });

  $("#hide-btn").click(function () {
    $("#status, #fun-facts").hide();
  });

  $("#show-btn").click(function () {
    $("#status, #fun-facts").show();
  });

  $("#toggle-btn").click(function () {
    $("#status, #fun-facts").toggle();
  });

  $("#fade-in-btn").click(function () {
    $(".gallery-img").fadeIn(800);
  });

  $("#fade-out-btn").click(function () {
    $(".gallery-img").fadeOut(800);
  });

  $("#fade-toggle-btn").click(function () {
    $(".gallery-img").fadeToggle(800);
  });

  $(".accordion-title").click(function () {
    $(this).next(".panel").slideToggle();
  });

  $("#open-all-btn").click(function () {
    $(".panel").slideDown();
  });

  $("#close-all-btn").click(function () {
    $(".panel").slideUp();
  });

  $("#add-skill-btn").click(function () {
    var skill = $("#skill-input").val().trim();
    if (skill === "") {
      $("#skill-message").text("Please enter a skill first!");
    } else {
      $("#skills-list").append("<li>" + skill + "</li>");
      $("#skill-input").val("");
      $("#skill-message").text("");
    }
  });

  $("#prepend-skill-btn").click(function () {
    var skill = $("#skill-input").val().trim();
    if (skill === "") {
      $("#skill-message").text("Please enter a skill first!");
    } else {
      $("#skills-list").prepend("<li>" + skill + "</li>");
      $("#skill-input").val("");
      $("#skill-message").text("");
    }
  });

  $("#remove-skill-btn").click(function () {
    if ($("#skills-list li").length === 0) {
      $("#skill-message").text("There are no skills to remove.");
    } else {
      $("#skills-list li:last").remove();  
      $("#skill-message").text("");
    }
  });

  var isGithub = true;

  $("#change-link-btn").click(function () {
    if (isGithub) {
      $("#social-link").attr("href", "https://www.linkedin.com");
      $("#social-link").text("LinkedIn");
      $(this).text("Change link to GitHub");
    } else {
      $("#social-link").attr("href", "https://github.com");
      $("#social-link").text("GitHub");
      $(this).text("Change link to LinkedIn");
    }
    $("#link-url").text($("#social-link").attr("href"));
    isGithub = !isGithub;
  });

  $("#name-input").keyup(function () {
    $("#name-output").text($("#name-input").val());
  });

  $("#email-input").keyup(function () {
    $("#email-output").text($("#email-input").val());
  });
  var barsAreFull = false;
  $("#animate-btn").click(function () {
    if (barsAreFull === false) {
      $("#bar-html").animate({ width: "90%" }, 1200);
      $("#bar-css").animate({ width: "75%" }, 1200);
      $("#bar-js").animate({ width: "60%" }, 1200);
      $("#bar-python").animate({ width: "45%" }, 1200);
      $(this).text("Reset Skills");
      barsAreFull = true;
    } else {
      $(".bar").animate({ width: "0%" }, 1200);
      $(this).text("Animate My Skills");
      barsAreFull = false;
    }
  });
});
