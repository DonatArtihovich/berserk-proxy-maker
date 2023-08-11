import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Button({ element }: { element: HTMLDivElement }) {

    function printPDF() {

        html2canvas(element, { logging: true, useCORS: true }).then((canvas) => {
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width
            const imgData = canvas.toDataURL('img/png')
            const pdf = new jsPDF('p', 'mm', 'a4')
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
            pdf.save('deck.pdf')
        })
    }

    return (
        <button onClick={printPDF}>Распечатать</button>
    )
}