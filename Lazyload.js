  /*
   * Lazy Loading for Images
   * Uses Intersection Observer API for performance
   */document.addEventListener("DOMContentLoaded",function() {
    var lazyloadImages = document.querySelectorAll("img.lazyload");
    var imageObserver = new IntersectionObserver(function(entries,observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazyload");
          observer.unobserve(image);
        }
      });
    }
    );
    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    }
    );
  }
  );