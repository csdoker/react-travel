import React, { createElement, useEffect } from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, SignIn, Register, Detail, Search, ShoppingCart } from './pages'
import { Redirect } from 'react-router-dom'
import { useSelector } from './redux/hooks'
import { useDispatch } from 'react-redux'
import { getShoppingCart } from './redux/shoppingCart/slice'

const PrivateRoute = ({
  component,
  isAuthenticated,
  ...rest
}) => {
  const routeComponent = (props) => {
    return isAuthenticated ? createElement(component, props) : <Redirect to={{ pathname: '/signIn' }} />
  }
  return <Route render={routeComponent} {...rest} />
}

function App () {
  const jwt = useSelector(s => s.user.token)
  const dispatch = useDispatch()
  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt))
    }
  }, [jwt])
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route path='/detail/:touristRouteId' component={Detail} />
          <Route path='/search/:keywords?' component={Search} />
          <PrivateRoute isAuthenticated={jwt !== null} path='/shoppingCart' component={ShoppingCart} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
