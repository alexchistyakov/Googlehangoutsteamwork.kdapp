class GoogleHangoutsTeamworkMainView extends KDView

  constructor:(options = {}, data)->
    options.cssClass = 'GoogleHangoutsTeamwork main-view'
    super options, data

  viewAppended:->
    @addSubView new KDHeaderView
      title: "Google Hangouts Teamwork"
      type: "big"
    @addSubView @input = new KDInputView
      placeholder: "Teamwork session link"
      cssClass: "input"
    @addSubView @container = new KDCustomHTMLView
      cssClass: "container"
      tagName: "div"
    @container.addSubView new KDButtonView
      title: "Submit"
      cssClass: "button"
      callback: =>
        inputText = @input.getValue()
        inputText = inputText.replace /:/,"%3A"
        inputText = inputText.replace /\//,"%2F"
        inputText = inputText.replace /\?/,"%3F"
        inputText = inputText.replace /\=/,"%3D"
        link = "https://plus.google.com/hangouts/_?gid=318240128533&gd=#{inputText}"
        window.open link, "_blank"
      

class GoogleHangoutsTeamworkController extends AppController

  constructor:(options = {}, data)->
    options.view    = new GoogleHangoutsTeamworkMainView
    options.appInfo =
      name : "Google Hangouts Teamwork"
      type : "application"

    super options, data

do ->

  # In live mode you can add your App view to window's appView
  if appView?
    view = new GoogleHangoutsTeamworkMainView
    appView.addSubView view

  else
    KD.registerAppClass GoogleHangoutsTeamworkController,
      name     : "Googlehangoutsteamwork"
      routes   :
        "/:name?/Googlehangoutsteamwork" : null
        "/:name?/alexchistyakov/Apps/Googlehangoutsteamwork" : null
      dockPath : "/alexchistyakov/Apps/Googlehangoutsteamwork"
      behavior : "application"