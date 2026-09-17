
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { CustomerioAppSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CustomerioAppSDK.test()
    equal(null !== testsdk, true)
  })

})
