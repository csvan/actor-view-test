package com.csvanefalk.actorviewtest.comet

import net.liftmodules.ng.AngularActor
import net.liftweb.util.Schedule

/**
 * Created by christopher on 24/08/14.
 */
class OuterPingActor extends AngularActor {
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
        println("Sending outer ping to client!")
        scope.broadcast("broadcast-message", "Outer broadcast ping received")
        scope.emit("emit-message", "Outer emitted ping received")
      }
  }
}
