import ExpoModulesCore
import Foundation

public class ExpoRelativeTimeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoRelativeTime")

    Function("getRelativeTime") { () -> Int in
        return Int(clock_gettime_nsec_np(CLOCK_MONOTONIC_RAW) / 1_000_000)
    }
  }
}
