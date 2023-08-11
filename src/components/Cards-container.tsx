import { DeckList } from "../types";

export default function CardsContainer({ deckList }: { deckList: DeckList }) {
    console.log('deckList: ', deckList)

    const cards = deckList.map(card => {
        return (
            <figure className="card">
                <div className="card-image-wrapper">
                    <img className="card-image" src={card.image} alt={card.name} />
                </div>
                <figcaption className="card-caption">{card.count} {card.name[0].toUpperCase() + card.name.slice(1)}</figcaption>
            </figure>
        )
    })
    return (
        <div className="cards-container">
            {cards}
        </div>
    )
}