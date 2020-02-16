import createRouter from 'router5'
import routes from './routes'

export default function configureRouter() {
    return createRouter(routes, {
        defaultRoute: 'index'
    })
}
