import ActionTypes from './constants/card'

export default function someAction(someData: any) {
  return {
    type: ActionTypes.SOME_ACTION,
    text: 'Action',
    someData: someData
  }
}