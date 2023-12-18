
(function() {
    window.localStorage.clear();
    window.onload = function() {
      toogleChat = function() {
        builder.toogleChat()
      }
      buildChat = function() {
        builder = new BlipChat()
          .withAppKey('cm90ZWFkb3JiaW9mYXN0Ojg4MDgwNDBlLTQ4ZDYtNDc4OC05N2Q5LWRhOTI0ZmViYzIzMg==')
          .withCustomCommonUrl('https://telek.chat.blip.ai/')
          .withButton({"color":"#2CC3D5","icon":""})
        builder.build()
        builder.sendMessage("ola")
      }
      buildChat()
    }
})()
