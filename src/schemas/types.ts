import * as t from 'io-ts'

export const Room = t.type({
    name: t.string,
    description: t.string,
    value: t.Integer,
    images: t.array(t.string)
}, 'Room')

export type Room = typeof Room['_A']