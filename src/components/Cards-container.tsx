import { useState } from 'react'

import { DeckList, ICard } from "../types";
import cards, { aa, pf } from "../utils/cards";

export default function CardsContainer({ deckList, value, setValue }: { deckList: DeckList, value: string, setValue: Function }) {

    const cards = deckList.map((card, i) => <Card value={value} setValue={setValue} card={card} i={i} />)
    return (
        <div className="cards-container">
            {cards}
        </div>
    )
}

function Card({ card, i, value, setValue }: { card: ICard, i: number, value: string, setValue: Function }) {
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
                setValue(`${value}`
                    .replaceAll(new RegExp(`${card.name} пф`, 'ig'), card.name)
                    .replaceAll(new RegExp(`${card.name} аа`, 'ig'), card.name))
                break;
            case 'pf':
                setImage(pf[`${card.name}`])
                setIsAA(false)
                setIsPF(true)
                setValue(`${value}`.replaceAll(card.name, `${card.name} пф`))
                break;
            case 'aa':
                setImage(aa[`${card.name}`])
                setIsAA(true)
                setIsPF(false)
                setValue(`${value}`.replaceAll(card.name, `${card.name} аа`))
                break;
        }
    }

    return (
        <figure key={`${card.image}${i}`} className="card">
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
        <select value={isAA ? 'aa' : isPF ? 'pf' : 's'} onChange={(e) => onOptionClick(e.target.value)}>
            <option value="s">Обычная</option>
            {aa[`${name}`] && <option value="aa">Альтернативная</option>}
            {pf[`${name}`] && <option value="pf">Полноформатная</option>}
        </select >
    )
}