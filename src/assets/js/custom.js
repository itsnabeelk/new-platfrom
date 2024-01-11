function bootstrapToUnr() {
  var tour = new Tour({
    steps: [
      {
        element: "#panel1",
        title: "Subscription Packages",
        content: "panel details",
        placement: "bottom"
      },
      {
        element: "#panel2",
        title: "Article Search Field",
        content: "This is the second panel",
        placement: "bottom"
      },
      {
        element: "#panel3",
        title: "Main Menu",
        content: "This is the third panel",
        placement: "left"
      }
    ],
    backdrop: true, // Enable backdrop overlay
    storage: false,
    onEnd: function (tour) {
      var popover = document.querySelector('.popover');
      var backdrops = document.querySelectorAll('.tour-backdrop');
      if (popover) {
        popover.parentNode.removeChild(popover);
      }
      if (backdrops) {
        backdrops.forEach(function(backdrop) {
          backdrop.style.setProperty('display', 'none', 'important');
        });
      }
    }
  });

  tour.init();
  tour.start();

  // Select the target node
  var targetNode = document.querySelector('body');

  // Create a new observer instance
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (!mutation.target.classList.contains('modal-open')) {
        var popover = document.querySelector('.popover');
        if (popover && !popover.classList.contains('modal')) {
          popover.style.setProperty('opacity', '1', 'important');
        }
      }
    });
  });

  // Configuration of the observer
  var config = { attributes: true, attributeFilter: ['class'] };

  // Start observing the target node for attribute changes
  observer.observe(targetNode, config);

  // Select the popover close button
  var popoverCloseButton = document.querySelector('.popover .close');
  if (popoverCloseButton) {
    popoverCloseButton.addEventListener('click', function() {
      var popover = document.querySelector('.popover');
      var backdrops = document.querySelectorAll('.tour-backdrop');
      if (popover) {
        popover.parentNode.removeChild(popover);
      }
      if (backdrops) {
        backdrops.forEach(function(backdrop) {
          backdrop.style.setProperty('display', 'none', 'important');
        });
      }
    });
  }
}

bootstrapToUnr();