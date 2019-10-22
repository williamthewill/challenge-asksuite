export const config = {
    host: 'https://myreservations.omnibees.com',
    pathSearch: 'default.aspx',
    pathImage: 'Handlers/ImageLoader.ashx'
}

export const messageViolations = {
    parameters: (param: string) => `${param} is required`
}


/*  
    These parameters are the ones that will be passed by get in scrape url
    
    To example le Cantor uri params
    q=5462&CheckIn=22102019&CheckOut=23102019&NRooms=1&ad=1&ch=0
*/
export let leCantorParams = {
    q: 5462,
    CheckIn: '',
    CheckOut: '',
    NRooms: 1,
    ad: 1,
    ch: 0
}

export let acquaParams = {
    q: 4055,
    CheckIn: '',
    CheckOut: '',
    NRooms: 1,
    ad: 1,
    ch: 0
}