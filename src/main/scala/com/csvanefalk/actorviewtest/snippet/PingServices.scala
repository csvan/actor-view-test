package com.csvanefalk.actorviewtest
package snippet

import scala.xml.{NodeSeq, Text}
import net.liftweb.util._
import net.liftweb.common._
import net.liftweb.http.S
import net.liftmodules.ng.Angular._
import java.util.Date
import Helpers._

class PingServices {
  def services = renderIfNotAlreadyDefined(
    angular.module("PingServices").factory("pingService", jsObjFactory()
    .jsonCall("startOuterPing", {
      S.session.map { _.sendCometActorMessage("OuterPingActor", Empty, "start") }
      Empty
    })
    .jsonCall("stopOuterPing", {
      S.session.map { _.sendCometActorMessage("OuterPingActor", Empty, "stop") }
      Empty
    })
      .jsonCall("startInnerPing", {
      S.session.map { _.sendCometActorMessage("InnerPingActor", Empty, "start") }
      Empty
    })
      .jsonCall("stopInnerPing", {
      S.session.map { _.sendCometActorMessage("InnerPingActor", Empty, "stop") }
      Empty
    })
  ))
}

