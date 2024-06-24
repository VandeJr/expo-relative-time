package expo.modules.relativetime

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.os.SystemClock

class ExpoRelativeTimeModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoRelativeTime")

    Function("getRelativeTime") {
      return@Function SystemClock.elapsedRealtime()
    }
  }
}
