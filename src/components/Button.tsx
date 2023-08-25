// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

import html2pdf from 'html2pdf.js'
import { ICard } from '../types'
import style from '../utils/file-style'

export default function Button({ deckList }: { deckList: ICard[] }) {
    const cardsOnPageNumber = 9

    const cardsArray: ICard[] = deckList.reduce((prev: ICard[], { count, name, image }: ICard) => {
        console.log(count)
        const currentArray = Array(count).fill({ name, image })

        return [...prev, ...currentArray]
    }, [])

    const deckPagesArray: ICard[][] = []
    const pagesCount = Math.ceil(cardsArray.length / cardsOnPageNumber)

    for (let i = 0; i < pagesCount; i++) {
        deckPagesArray.push(cardsArray.slice(i * 9, i * 9 + 9))
    }

    function printPDF() {
        html2pdf().from(`
        <div class="deck-file-wrapper" >
                ${deckPagesArray.map((page) => `
            <div class="cards-page">
                ${page.map((card) => `<img class="file-card" src="${card.image}" />`)}
            </div>`)}
        </div>
        <style>
            ${style}
        <style>
        `).save('deck.pdf')
        // html2canvas(element, { logging: true, useCORS: true }).then((canvas) => {
        //     const imgWidth = 208;
        //     const imgHeight = canvas.height * imgWidth / canvas.width
        //     const imgData = canvas.toDataURL('img/png')
        //     const pdf = new jsPDF('p', 'mm', 'a4')
        //     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
        //     pdf.save('deck.pdf')
        // })


    }

    return (
        <button onClick={printPDF}>Распечатать</button>
    )
}