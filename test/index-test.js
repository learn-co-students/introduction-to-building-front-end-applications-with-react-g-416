

describe('index', function() {
  it('runs', function() {
    expect(true).toEqual(true)
  })
})

describe('app', function() {
  it('exists', function() {
    expect(app).toEqual("I don't do much.")
  })
})

describe('me', function() {
  it('is me', function() {
    expect(me).toEqual("Laura")
  })
})

describe('me', function() {
  it('is not Emily', function() {
    expect(me).toNotEqual("Emily")
  })
})