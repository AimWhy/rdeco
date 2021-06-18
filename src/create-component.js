import React from 'react'
import { createStore } from './create-store'

export function createComponent(component, membrane = {}) {
  const copy = { ...component }
  copy.membrane = membrane
  return function HookComponent(props) {
    const useComponent = createStore(copy)
    const store = useComponent(props)
    return <>{store.view.render()}</>
  }
}

export function enhanceCreateComponent(enhances) {
  return function createComponent(component, membrane = {}) {
    const copy = { ...component }
    copy.membrane = membrane
    return function HookComponent(props) {
      const useComponent = createStore(copy, enhances)
      const store = useComponent(props)
      return <>{store.view.render()}</>
    }
  }
}