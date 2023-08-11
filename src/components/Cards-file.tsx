import { DeckList, ICard } from "../types";

export default function CardsFile({ deckList, refLink }: { deckList: DeckList, refLink: React.RefObject<HTMLDivElement> }) {
    const cardsOnPageNumber = 9

    const deckPagesArray: ICard[][] = []
    const pagesCount = Math.ceil(deckList.length / cardsOnPageNumber)

    for (let i = 0; i < pagesCount; i++) {
        deckPagesArray.push(deckList.slice(i * 9, i * 9 + 9))
    }
    return (
        <div ref={refLink} className="deck-file-wrapper" >
            {deckPagesArray.map((page, i) => <DeckPage key={i} cardsList={page} />)}
        </div>
    )
}

function DeckPage({ cardsList }: { cardsList: ICard[] }) {


    return (
        <div className="cards-page">
            {cardsList.map(card => <img key={card.image} className="file-card" src={card.image}></img>)}
        </div>
    )
}