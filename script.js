(function () {
  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });
  }

  // Contact form: the site is static, so the form opens the visitor's email app
  var form = document.querySelector("#contact-form");
  var note = document.querySelector("#contact-form-note");
  if (form && note) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var fields = new FormData(form);
      var value = function (name) { return String(fields.get(name) || "").trim(); };
      var subject = [value("company") || value("name") || "Website enquiry", "Devopty enquiry"].join(" | ");
      var body = [
        "Hello Devopty,",
        "",
        "Name: " + (value("name") || "Not provided"),
        "Email: " + (value("email") || "Not provided"),
        "Company: " + (value("company") || "Not provided"),
        "",
        "What we are trying to automate:",
        value("message") || "Please contact me.",
        ""
      ].join("\n");
      window.location.href = "mailto:hello@devopty.com?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      note.textContent = "Opening your email app with the message filled in.";
    });
  }
})();
