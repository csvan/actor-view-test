package com.csvanefalk.actorviewtest
package comet

import net.liftmodules.ng._
import net.liftweb.util.Schedule
import java.util.Date

class InnerPingActor extends AngularActor {
  self =>
  var activated = false

  def schedule: Unit = Schedule(() => {
    self ! "ping";
    schedule
  }, 1000)

  schedule

  override def lowPriority = {
    case "start" => activated = true
    case "stop" => activated = false
    case "ping" =>
      if (activated) {
        println("Sending inner ping to client!")
        scope.broadcast("broadcast-message", "Inner broadcast ping received")
        scope.emit("emit-message", "Inner emitted ping received")
      }
  }
}
