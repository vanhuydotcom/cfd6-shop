import { Route, Switch } from "react-router-dom"
import routers from '../routers'
import PrivateRoute from "./PrivateRoute"
export function RouterConfig(routers, parrentPath = '') {
    return <Switch>
        {
            routers.map(e => {
                let { exact, path, component: Component, routers: childRouters, auth } = e
                if (!path) path = ''
                path = parrentPath + '/' + path
                path = path.replace(/\/+/g, '/')
                let child = null
                if (childRouters) {
                    child = RouterConfig(childRouters, path)
                }
                // if (auth) {
                //     return <PrivateRoute exact={exact} path={path} component={(prop) => <Component {...prop}>{child}</Component>} />
                // }

                return <Route exact={exact} path={path} component={(prop) => <Component {...prop}>{child}</Component>} />
            })
        }
    </Switch>
}