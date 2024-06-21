import { getLux, createTests, Matcher } from "./e2etestlib"
import { HealthAPI } from "../src/apis/health/api"
import Lux from "src"

describe("Info", (): void => {
  const lux: Lux = getLux()
  const health: HealthAPI = lux.Health()

  // test_name          response_promise               resp_fn                 matcher           expected_value/obtained_value
  const tests_spec: any = [
    [
      "healthResponse",
      () => health.health(),
      (x) => {
        return x.healthy
      },
      Matcher.toBe,
      () => true
    ]
  ]

  createTests(tests_spec)
})
