
(function() {
    window.localStorage.clear();
    window.onload = function() {
      toogleChat = function() {
        builder.toogleChat()
      }
      buildChat = function() {
        builder = new BlipChat()
          .withAppKey('dGVsZWtyb3V0ZXI6NDE1NGIzOTMtZDM0Yi00N2UxLThlZDAtZGFjZmNlMDNiNjg4')
          .withCustomCommonUrl('https://telek.chat.blip.ai/')
          .withButton({"color":"#2CC3D5","icon":""})
        builder.build()
        builder.sendMessage("biofast")
      }
      buildChat()
    }
})()