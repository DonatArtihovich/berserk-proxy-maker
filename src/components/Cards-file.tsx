import { DeckList, ICard } from "../types";

export default function CardsFile({ deckList }: { deckList: DeckList }) {
    const cardsOnPageNumber = 9

    const cardsArray: ICard[] = deckList.reduce((prev: ICard[], { count, name, image }: ICard) => {
        const currentArray = Array(count).fill({ name, image })

        return [...prev, ...currentArray]
    }, [])

    const deckPagesArray: ICard[][] = []
    const pagesCount = Math.ceil(cardsArray.length / cardsOnPageNumber)

    for (let i = 0; i < pagesCount; i++) {
        deckPagesArray.push(cardsArray.slice(i * 9, i * 9 + 9))
    }
    return (
        <>
            <div className="deck-file-wrapper" >
                {deckPagesArray.map((page, i) => <DeckPage key={i} cardsList={page} />)}
            </div>
        </>
    )
}

function DeckPage({ cardsList }: { cardsList: ICard[] }) {


    return (
        <>
            <div className="cards-page">
                {cardsList.map((card, i) => <CardImage key={i} src={card.image} />)}
            </div>
            <div className="html2pdf__page-break" />
        </>
    )
}

function CardImage({ src }: { src: string }) {

    return (
        <img className="file-card" src={src} />
    )
}