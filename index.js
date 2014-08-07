/* Compiled by kdc on Thu Aug 07 2014 18:47:58 GMT+0000 (UTC) */
(function() {
/* KDAPP STARTS */
/* BLOCK STARTS: /home/alexchistyakov/Applications/Googlehangoutsteamwork.kdapp/index.coffee */
var GoogleHangoutsTeamworkController, GoogleHangoutsTeamworkMainView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GoogleHangoutsTeamworkMainView = (function(_super) {
  __extends(GoogleHangoutsTeamworkMainView, _super);

  function GoogleHangoutsTeamworkMainView(options, data) {
    if (options == null) {
      options = {};
    }
    options.cssClass = 'GoogleHangoutsTeamwork main-view';
    GoogleHangoutsTeamworkMainView.__super__.constructor.call(this, options, data);
  }

  GoogleHangoutsTeamworkMainView.prototype.viewAppended = function() {
    var _this = this;
    this.addSubView(new KDHeaderView({
      title: "Google Hangouts Teamwork",
      type: "big"
    }));
    this.addSubView(this.input = new KDInputView({
      placeholder: "Teamwork session link",
      cssClass: "input"
    }));
    this.addSubView(this.container = new KDCustomHTMLView({
      cssClass: "container",
      tagName: "div"
    }));
    return this.container.addSubView(new KDButtonView({
      title: "Submit",
      cssClass: "button",
      callback: function() {
        var inputText, link;
        inputText = _this.input.getValue();
        inputText = inputText.replace(/:/, "%3A");
        inputText = inputText.replace(/\//, "%2F");
        inputText = inputText.replace(/\?/, "%3F");
        inputText = inputText.replace(/\=/, "%3D");
        link = "https://plus.google.com/hangouts/_?gid=318240128533&gd=" + inputText;
        return window.open(link, "_blank");
      }
    }));
  };

  return GoogleHangoutsTeamworkMainView;

})(KDView);

GoogleHangoutsTeamworkController = (function(_super) {
  __extends(GoogleHangoutsTeamworkController, _super);

  function GoogleHangoutsTeamworkController(options, data) {
    if (options == null) {
      options = {};
    }
    options.view = new GoogleHangoutsTeamworkMainView;
    options.appInfo = {
      name: "Google Hangouts Teamwork",
      type: "application"
    };
    GoogleHangoutsTeamworkController.__super__.constructor.call(this, options, data);
  }

  return GoogleHangoutsTeamworkController;

})(AppController);

(function() {
  var view;
  if (typeof appView !== "undefined" && appView !== null) {
    view = new GoogleHangoutsTeamworkMainView;
    return appView.addSubView(view);
  } else {
    return KD.registerAppClass(GoogleHangoutsTeamworkController, {
      name: "Googlehangoutsteamwork",
      routes: {
        "/:name?/Googlehangoutsteamwork": null,
        "/:name?/alexchistyakov/Apps/Googlehangoutsteamwork": null
      },
      dockPath: "/alexchistyakov/Apps/Googlehangoutsteamwork",
      behavior: "application"
    });
  }
})();

/* KDAPP ENDS */
}).call();