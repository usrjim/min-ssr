import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Body } from './Body'
import { Blog } from './Blog'
import { Bookmarks } from './Bookmarks'

export const Router = () => (
  <Switch>
    <Route path="/" exact>
      <Body />
    </Route>
    <Route path="/blog">
      <Blog />
    </Route>
    <Route path="/bookmarks">
      <Bookmarks />
    </Route>
  </Switch>
)
