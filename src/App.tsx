import { useState } from 'react'
import './App.scss'
import { DeckList } from './types'
import CardsContainer from './components/Cards-container'
import ErrorsContainer from './components/Errors-container'
import cards from './utils/cards'

function App() {
  const [deckList, setDeckList] = useState('')

  const [deckArray, errorNames] = parseDeckList(deckList)

  return (
    <>
      <h1>Berserk Proxy Maker</h1>
      <label htmlFor="decklist">Введи сюда свой деклист:</label>
      <textarea className="decklist" name="decklist" value={deckList} onChange={e => setDeckList(e.target.value)}></textarea>
      <ErrorsContainer errorList={errorNames} />
      <CardsContainer deckList={deckArray} />
    </>
  )
}

function parseDeckList(deckList: string): [DeckList, string[]] {
  const errorNames: string[] = []
  const arr = deckList.split('\n').map(str => {

    const count = Number(str.split(' ')[0])
    const name = str.split(' ').length <= 1 ? '' : str.split(' ').slice(1).join(' ').trim().toLowerCase().replaceAll('ё', 'е')

    const image: string = cards[`${name}`]
    if (image == undefined) {
      errorNames.push(name)
    }

    return { count, name, image }
  })

  return [arr, errorNames]
}

export default App
