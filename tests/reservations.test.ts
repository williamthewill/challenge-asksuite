require('require-rewrite')(__dirname)
require('dotenv-safe').config()
import test from 'ava'
import { testHandler } from '#utils/express-test'
import * as handler from '#handlers/reservations'

test(`ListReservations errors when not given body`, async (t: any) => {
	const req = {
		body: {}
	}
	const { code, response } = await testHandler(handler.ListReservations, req)
	t.is(code, 400)
})

test(`ListReservations success`, async (t: any) => {
	const req = {
		body: {
			checkin: 22102019,
			checkout: 23102019
		}
	}
	const { code, response } = await testHandler(handler.ListReservations, req)
	t.is(code, 200)
})
