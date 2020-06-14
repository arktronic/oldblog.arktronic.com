if (document.location.hostname == 'oldblog.arktronic.com') {
    window.goatcounter = {
        endpoint: 'https://count-oldblog.arktronic.com/count',
    }
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//count-oldblog.arktronic.com/count.js';
    document.getElementsByTagName('head')[0].appendChild(s);
}


function trackingAnalyticsAgree() {
    document.cookie = 'trackingAnalyticsAgreed=true;path=/;max-age=31536000';
    var privacyNoticeEl = document.getElementById('global-privacy-notice');
    privacyNoticeEl.style.display = 'none';
}
function trackingAnalyticsShow() {
    var privacyNoticeEl = document.createElement('div');
    privacyNoticeEl.setAttribute('id', 'global-privacy-notice');
    privacyNoticeEl.setAttribute('style', 'position: fixed; bottom: 0px; left: 0px; margin: 0; border: 0; width: 100%; background-color: #000; color: #999; text-align: center; padding: 8px 0;');
    privacyNoticeEl.innerHTML = '<div style="padding-bottom: 8px;">This website uses tracking technologies. See <a href="/privacy.html">privacy policy</a>. Your use of this website constitutes agreement to terms. Please navigate away if you do not agree.</div> <button onclick="trackingAnalyticsAgree()">I agree</button>';
    document.body.appendChild(privacyNoticeEl);
}
window.onload = function() {
    var agreed = false;
    document.cookie.split(';').forEach(function(c) {
        if (c.indexOf('trackingAnalyticsAgreed=true') > -1) {
            agreed = true;
        }
    });
    if (!agreed) {
        trackingAnalyticsShow();
    }
}
