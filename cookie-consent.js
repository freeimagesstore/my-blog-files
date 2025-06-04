  /*
   * Cookie Consent Banner Logic
   */document.addEventListener("DOMContentLoaded",function() {
    var banner = document.getElementById('cookieConsentBanner');
    var acceptButton = document.getElementById('acceptCookieConsent');
    var cookieName = 'cookieConsentAccepted';
    var cookieExpiryDays = 365;
    function setCookie(name,value,days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days * 24 * 60 * 60 * 1000));
        expires = ";
        expires = "+date.toUTCString();
      }
      document.cookie = name+" = "+(value || "")+expires+";
      path = /;
      SameSite = Lax";
    }
    function getCookie(name) {
      var nameEQ = name+" = ";
      var ca = document.cookie.split(';
      ');
      for (var i = 0;
      i < ca.length;
      i++) {
        var c = ca[i];
        while (c.charAt(0 )== ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ )== 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }
    if (!getCookie(cookieName)) {
      banner.style.display = 'flex';
      setTimeout(function() {
        banner.classList.add('show');
      }
      ,100);
    }
    if (acceptButton) {
      acceptButton.addEventListener('click',function() {
        setCookie(cookieName,'true',cookieExpiryDays);
        banner.classList.remove('show');
        banner.style.display = 'none';
      }
      );
    }
  });