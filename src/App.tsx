import { useState } from 'react'
import './App.scss'
import { DeckList } from './types'
import CardsContainer from './components/Cards-container'
import ErrorsContainer from './components/Errors-container'
import Button from './components/Button'
import cards from './utils/cards'

console.log(cards)
function App() {
  const [deckList, setDeckList] = useState('')

  const [deckArray, errorNames] = parseDeckList(deckList)

  return (
    <>
      <h1>Berserk Proxy Maker</h1>
      <label htmlFor="decklist">Введите карты:</label>
      <div className="decklist-wrapper">
        <textarea className="decklist" name="decklist" value={deckList} onChange={e => setDeckList(e.target.value)}
          placeholder={'3 Берсерк\n3 Кшар'}></textarea>

        <ErrorsContainer errorList={errorNames} />
      </div>

      <Button deckList={deckArray} />

      <CardsContainer deckList={deckArray} />
    </>
  )
}

function parseDeckList(deckList: string): [DeckList, string[]] {
  const errorNames: string[] = []
  const arr = deckList.split('\n').map(str => {

    const count = Number(str.split(' ')[0])
    const name = str.split(' ').length <= 1 ? '' : str.split(' ').slice(1).join(' ').trim().toLowerCase().replaceAll('ё', 'е')

    if (!name) return null

    const image: string = cards[`${name}`]
    if (image == undefined) {
      errorNames.push(str.split(' ').slice(1).join(' ').trim())

      return null
    }

    return { count, name, image }
  }).filter(item => Boolean(item)) as DeckList

  return [arr, errorNames]
}

export default App
