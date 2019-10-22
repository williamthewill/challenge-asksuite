import puppeteer from 'puppeteer'
export async function scrape(host: string, url: string) {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
    const page = await browser.newPage()

    await page.goto(url)

    await page.waitForSelector('#bookingEngineForm #rooms_results .roomName .roomExcerpt .sincePrice .sincePriceContent h6.bestPriceTextColor')

    await page.waitForFunction('document.querySelector("#bookingEngineForm #rooms_results .roomName .roomExcerpt .sincePrice .sincePriceContent h6.bestPriceTextColor:not(:empty)")')

    const rooms = await page.evaluate((host) => {
        const rooms = Array.from(document.querySelectorAll('body #bookingEngineForm .wrapRoomsResults #rooms_results .maintable .roomName'))
        const roomsReservations: any = rooms.map((room) => {
            let descriptionTitle: any = room.querySelector('.roomName .roomExcerpt .excerpt h5 a')
            descriptionTitle = descriptionTitle && descriptionTitle.textContent

            let description: any = room.querySelector('.roomName .roomExcerpt .excerpt p .description')
            description = description && description.textContent

            let price: any = room.querySelector('.roomName .roomExcerpt .sincePrice .sincePriceContent h6.bestPriceTextColor')
            price = price && price.textContent

            let priceDetail: any = room.querySelector('.roomName .roomExcerpt .sincePrice .sincePriceContent  p:last-child')
            priceDetail = priceDetail && priceDetail.textContent

            let installments: any = room.querySelector('.roomName .roomExcerpt .sincePrice .plots .fancybox')
            installments = installments && installments.textContent

            let images: any = Array.from(room.querySelectorAll('.roomName .roomExcerpt .thumb .slide img'))
            images = images && images.map((image: any) => `${host}${image.getAttribute('src')}`)

            return {
                descriptionTitle,
                description,
                price,
                priceDetail,
                installments,
                images
            }
        })

        return roomsReservations
    }, host)
    await browser.close()

    return rooms
}
