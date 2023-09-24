
export function msg(type: MsgType, data: any, reply: number | null = null) {
  return JSON.stringify({ type, data, reply })
}

export enum MsgType {
  Reply,
  SaveMap,
  GetMap,
  GetDevices
}

export interface Message {
  type: MsgType,
  data: any,
  reply: number | null
}
