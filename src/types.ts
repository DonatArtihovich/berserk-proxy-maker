export type DeckList = ICard[]

export interface ICard {
    count: number
    name: string
    image: string
    isPF: boolean
    isAA: boolean
}