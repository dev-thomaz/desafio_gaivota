import { actionsTypes } from '../constants/locations'
const actions = { 
    create: () => ({
        type: actionsTypes.LOCATION_CREATE
    }),
    delete: () => ({
        type: actionsTypes.LOCATION_DELETE
    })
}

export { actions }