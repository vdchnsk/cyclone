export interface SyntheticEvent {
  bubbles: boolean
  cancelable: boolean
  currentTarget: EventTarget
  defaultPrevented: boolean
  eventPhase: number
  isTrusted: boolean
  nativeEvent: Event
  preventDefault(): void
  stopPropagation(): void
  timeStamp: Date
  type: string
}
