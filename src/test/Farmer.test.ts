import { assert } from "chai"

import Farmer from "../models/Farmer"

describe("Farmer", () => {
  let p = new Farmer()

  it("should be an object", () => {
    assert.typeOf(p, "object")
  })
})
