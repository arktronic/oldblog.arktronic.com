(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
;r.type="text/javascript";r.async=true
;r.src="https://cdn.amplitude.com/libs/amplitude-4.5.2-min.gz.js"
;r.onload=function(){if(e.amplitude.runQueuedFunctions){
e.amplitude.runQueuedFunctions()}else{
console.log("[Amplitude] Error: could not load SDK")}}
;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
;function s(e,t){e.prototype[t]=function(){
this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
var o=function(){this._q=[];return this}
;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
;return this}
;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut",
"setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify",
"clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","logEventWithTimestamp",
"logEventWithGroups","setSessionId","resetSessionId"]
;function v(e){function t(t){e[t]=function(){
e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
e=(!e||e.length===0?"$default_instance":e).toLowerCase()
;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
;e.amplitude=n})(window,document);

var apiKey = null;
if (document.location.hostname == 'staging.arktronic.com') {
    apiKey = 'd259d910f02eda76e1d5a1bee7471fe3';
}
if (document.location.hostname == 'arktronic.com' || document.location.hostname == 'www.arktronic.com') {
    apiKey = '60ec86d4aaa416d9af33502b6d5fb86f';
}

amplitude.getInstance().init(apiKey, null, { saveEvents: true, includeReferrer: true }, function() {
    var optOutInfoEl = document.getElementById('is-opted-out-of-amplitude');
    if (optOutInfoEl) {
        optOutInfoEl.innerHTML = amplitude.getInstance().options.optOut;
    }
});

amplitude.getInstance().logEvent('pageLoad', { 'location': document.location.href });



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
