import React from "react"
import { Switch, Route } from "react-router-dom"
import RoutesConfig from "./RoutesConfig"

const Routes = () => {
  return (
      <Switch>
        {RoutesConfig.map(({ exact, path, component }, index) => (
          <Route key={`route-${index}`} exact={exact} path={path} component={component} />
        ))}
      </Switch>
  )
}

export default Routes
