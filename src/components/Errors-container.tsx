export default function ErrorsContainer({ errorList }: { errorList: string[] }) {

    return (
        <>
            <div className="error-container">{errorList.length ? errorList.length === 1 ? `Карта ${errorList[0]} не найдена.` : `Карты ${errorList.join(', ')} не найдены.` : ''}</div>
        </>
    )
}