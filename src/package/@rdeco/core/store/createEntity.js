/* eslint-disable no-undef */
import { combination } from './combination'
import { createStore } from './createStore'
import { createSubscriptions } from '../subscribe/createSubscriptions'
import { validate } from '../utils/validate'

export function createEntity(entity) {
  const symbol = validate(entity.name)
  entity.baseSymbol = symbol
  const entityStore = createStore(entity)
  const notificationSubject = combination.$register(symbol, entityStore)
  createSubscriptions(entityStore, notificationSubject)
  return { symbol }
}