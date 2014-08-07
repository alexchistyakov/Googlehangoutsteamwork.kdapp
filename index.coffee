class GoogleHangoutsTeamworkMainView extends KDView

  constructor:(options = {}, data)->
    options.cssClass = 'GoogleHangoutsTeamwork main-view'
    super options, data

  viewAppended:->
    @addSubView new KDView
      partial  : "Welcome to Google Hangouts Teamwork app!"
      cssClass : "welcome-view"

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