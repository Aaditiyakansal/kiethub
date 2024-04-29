export namespace MemeApplicationEvent {
  export namespace MemeCreated {
    export const key = 'meme.application.meme.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
