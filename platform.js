// Bridge between the game and the Android app. In a normal browser this file does nothing.
// NOT TESTED on a real device yet: it needs the Android build, an AdMob account and a Google Play account.
(function () {
  var C = window.Capacitor;
  if (!C || !C.isNativePlatform || !C.isNativePlatform()) return;
  var P = C.Plugins || {};
  // Rewarded ads (plugin: @capacitor-community/admob). The id below is Google's public TEST ad; put your own in window.VAULT_AD_UNIT.
  if (P.AdMob) {
    try { P.AdMob.initialize({}); } catch (e) {}
    window.VaultAds = { showRewarded: function (done) {
      P.AdMob.prepareRewardVideoAd({ adId: window.VAULT_AD_UNIT || 'ca-app-pub-3940256099942544/5224354917' })
        .then(function () { return P.AdMob.showRewardVideoAd(); })
        .then(function (reward) { done(!!reward); })
        .catch(function () { done(false); });
    } };
  }
  // Google Play Billing: connect a billing plugin here. The game calls VaultBilling.buy(productId, done) and expects done(true) only after a confirmed purchase.
  // window.VaultBilling = { buy: function (productId, done) { ... } };
})();
