import { useState } from 'react'
import { DeckList, ICard } from "../types";
import cards, { aa, pf } from "../utils/cards";

export default function CardsContainer({ deckList, setValue }: { deckList: DeckList, setValue: Function }) {

    const cards = deckList.map(card => <Card setValue={setValue} card={card} deckList={deckList} />)
    return (
        <div className="cards-container">
            {cards}
        </div>
    )
}

function Card({ card, setValue, deckList }: { card: ICard, setValue: Function, deckList: DeckList }) {
    const [image, setImage] = useState(card.image)
    const [isPF, setIsPF] = useState(card.isPF)
    const [isAA, setIsAA] = useState(card.isAA)

    card.image = image
    card.isAA = isAA
    card.isPF = isPF

    function onOptionClick(version: 's' | 'pf' | 'aa') {
        switch (version) {
            case 's':
                setImage(cards[`${card.name}`])
                setIsAA(false)
                setIsPF(false)
                card.isAA = false
                card.isPF = false
                setValue(deckList
                    .map(card => `${card.count} ${card.name}${card.isPF ? ' (ПФ)' : card.isAA ? ' (АА)' : ''}`)
                    .join('\n'))
                break;
            case 'pf':
                setImage(pf[`${card.name}`])
                setIsAA(false)
                setIsPF(true)
                card.isAA = false
                card.isPF = true
                setValue(deckList
                    .map(card => {
                        console.log(card)
                        return `${card.count} ${card.name}${card.isPF ? ' (ПФ)' : card.isAA ? ' (АА)' : ''}`
                    })
                    .join('\n'))
                break;
            case 'aa':
                setImage(aa[`${card.name}`])
                setIsAA(true)
                setIsPF(false)
                card.isAA = true
                card.isPF = false
                setValue(deckList
                    .map(card => `${card.count} ${card.name}${card.isPF ? ' (ПФ)' : card.isAA ? ' (АА)' : ''}`)
                    .join('\n'))
                break;
        }
    }

    return (
        <figure key={Object.keys(cards).indexOf(card.name)} className="card">
            <div className="card-image-wrapper">
                <img className="card-image" src={image} alt={card.name} />
            </div>
            <figcaption className="card-caption">{card.count} {card.name[0].toUpperCase() + card.name.slice(1)}</figcaption>
            <Toggler name={card.name} isPF={isPF} isAA={isAA} onOptionClick={onOptionClick} />
        </figure>
    )
}

function Toggler({ name, isAA, isPF, onOptionClick }: { name: string, isAA: boolean, isPF: boolean, onOptionClick: Function }) {
    return (
        !(aa[`${name}`] || pf[`${name}`])
            ? <span className="simple">Обычная</span>
            : <select className={isAA ? 'aa' : isPF ? 'pf' : 'simple'} value={isAA ? 'aa' : isPF ? 'pf' : 's'} onChange={(e) => onOptionClick(e.target.value)}>
                <option value="s">Обычная</option>
                {aa[`${name}`] && <option value="aa">Альтернативная</option>}
                {pf[`${name}`] && <option value="pf">Полноформатная</option>}
            </select >
    )
}