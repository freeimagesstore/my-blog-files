  /*
   * Main JavaScript for theme specific functionalities
   *-Handles the dynamic download link for single posts
   */document.addEventListener("DOMContentLoaded",function() {
    //---Image Download Button Logic (for single post) - --var singlePostDownloadBtn = document.getElementById('single - post - download - btn');
    if (singlePostDownloadBtn) {
      var mainFeaturedImage = document.getElementById('main - featured - image');
      if (mainFeaturedImage && mainFeaturedImage.dataset.downloadSrc) {
        singlePostDownloadBtn.href = mainFeaturedImage.dataset.downloadSrc;
      }
      //Ensure the download attribute is present (it should be from XML,but good to be sure)
              singlePostDownloadBtn.setAttribute('download','');
    }
  });