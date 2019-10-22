import { Room } from '#schemas/types'
import { scrape } from './scrapping'
import { mountUrl } from '#utils/index'
import { config, leCantorParams } from './config'
type CheckIn = { checkIn: number, checkOut: number }

export async function getRooms(hotelId: number, { checkIn, checkOut }: CheckIn): Promise<Array<Room>> {
    const params = {
        q: hotelId,
        CheckIn: checkIn,
        CheckOut: checkOut,
        NRooms: 1,
        ad: 1,
        ch: 0
    }
    const url = mountUrl(config.host, config.pathSearch, params)

    return await scrape(config.host, url)
}
