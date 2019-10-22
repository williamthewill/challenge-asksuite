import { makeHandler } from '#utils/api'
import { ListReservationsSchema } from '#schemas/index'
import { getRooms } from '../modules/myreservations-scrapper/'
import { leCantorParams } from '../modules/myreservations-scrapper/config'

export const ListReservations = makeHandler(ListReservationsSchema, async (req, res) => {
	const { checkin, checkout } = req.body
	const rooms = await getRooms(leCantorParams.q, { checkIn: checkin, checkOut: checkout })
	res.status(200).json({ ok: true, rooms })
})
