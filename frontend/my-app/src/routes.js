export const PAGE_CABINET = 'cabinet'
export const PAGE_FLOOR = 'floor'
export const PAGE_BUILDING = 'building'

export default [
    { name: PAGE_BUILDING, path: '/index' },
    { name: PAGE_FLOOR, path: '/floor/:id' },
    { name: PAGE_CABINET, path: '/cabinet/:id' },
]
