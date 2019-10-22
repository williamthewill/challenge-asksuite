import * as t from 'io-ts'
import { makeResponse } from '#utils/api'
import { Room } from './types'

export const ListReservationsSchema = {
	body: {
		checkin: t.Integer,
		checkout: t.Integer,
	},
	response: makeResponse({ rooms: t.array(Room) })
}
