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

  // Booking: show Microsoft Bookings in a dialog instead of leaving the site.
  // The dialog is only used when #booking-dialog has a data-embed-url, which
  // must be a page Microsoft allows other sites to frame (a shared Bookings
  // page's embed URL). Personal "Bookings with me" links send
  // frame-ancestors limited to Microsoft's own sites, so they cannot be
  // embedded. Without an embed URL, without JavaScript or without <dialog>
  // support, the links simply open the booking page in a new tab.
  var dialog = document.querySelector("#booking-dialog");
  var frame = document.querySelector("#booking-iframe");
  var embedUrl = dialog ? dialog.getAttribute("data-embed-url") : "";
  if (dialog && frame && embedUrl && typeof dialog.showModal === "function") {
    var lastTrigger = null;
    document.querySelectorAll("[data-booking]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        lastTrigger = link;
        dialog.showModal();
        document.documentElement.classList.add("booking-open");
        // Load the calendar on first open only, so page visits that never
        // book don't pull in Microsoft's booking app. Set it after showModal:
        // a frame given its src while the dialog is hidden may not load.
        if (!frame.getAttribute("src")) {
          frame.addEventListener("load", function () { dialog.classList.add("is-loaded"); }, { once: true });
          frame.setAttribute("src", embedUrl);
        }
      });
    });
    dialog.querySelector("[data-booking-close]").addEventListener("click", function () { dialog.close(); });
    // Clicking the dimmed backdrop (outside the dialog box) closes it.
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) { dialog.close(); }
    });
    dialog.addEventListener("close", function () {
      document.documentElement.classList.remove("booking-open");
      if (lastTrigger) { lastTrigger.focus(); }
    });
  }
})();
