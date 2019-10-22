import { Router } from 'express'
import * as handler from '#handlers/reservations'

export function register(router: Router) {
	router.route('/buscar')
		.post(handler.ListReservations)
}
