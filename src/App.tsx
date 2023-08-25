import { useState } from 'react'
import './App.scss'
import { DeckList } from './types'
import CardsContainer from './components/Cards-container'
import ErrorsContainer from './components/Errors-container'
import Button from './components/Button'
import cards, { pf, aa } from './utils/cards'

console.log(cards)
function App() {
  const [value, setValue] = useState('')

  const [deckArray, errorNames] = parseDeckList(value)

  return (
    <>
      <h1>Berserk Proxy Maker</h1>
      <label htmlFor="decklist">Введите список карт:</label>
      <div className="decklist-wrapper">
        <textarea className="decklist" name="decklist" value={value} onChange={e => setValue(e.target.value)}
          placeholder={'3 Берсерк\n3 Кшар'}></textarea>

        <ErrorsContainer errorList={errorNames} />
      </div>

      <Button deckList={deckArray} />

      <CardsContainer deckList={deckArray} value={value} setValue={setValue} />
    </>
  )
}

function parseDeckList(deckList: string): [DeckList, string[]] {
  const errorNames: string[] = []
  const arr = deckList.split('\n').map(str => {
    console.log(str.split(' ').length)
    const count = Number(str.split(' ')[0])
    const name = str.split(' ').length <= 1 ? '' : str.split(' ').slice(1).join(' ').trim().toLowerCase().replaceAll('ё', 'е')

    console.log(name)
    if (!name) return null

    const isPF = name.includes('пф')
    const isAA = name.includes('аа')

    const image: string = !isPF && !isAA ? cards[`${name}`] : isPF ? pf[`${name.split(' ').slice(0, -1).join(' ')}`] : aa[`${name.split(' ').slice(0, -1).join(' ')}`]
    if (image == undefined) {
      errorNames.push(str.split(' ').slice(1).join(' ').trim())

      return null
    }

    return { count, name: isPF || isAA ? name.split(' ').slice(0, -1).join(' ') : name, image, isPF, isAA }
  }).filter(item => Boolean(item)) as DeckList

  return [arr, errorNames]
}

export default App
