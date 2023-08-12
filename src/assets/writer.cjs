const axios = require('axios').default;
const fs = require('fs');

const cardsObj = {
    "вайл": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20117-page-00001.jpg",
    "болотник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20107-page-00001.jpg",
    "вилохвост": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20126-page-00001.jpg",
    "двухголовый тролль": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20132-page-00001.jpg",
    "бул'багур": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20119-page-00001.jpg",
    "василиск": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20116-page-00001.jpg",
    "гаррид-лучник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20113-page-00001.jpg",
    "гидра": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20136-page-00001.jpg",
    "гоблин": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20120-page-00001.jpg",
    "грезы архааля": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20114-page-00001.jpg",
    "дети топи": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20108-page-00001.jpg",
    "дочь перламутра": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20122-page-00001.jpg",
    "древний огр": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20135-page-00001.jpg",
    "ижор": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20103-page-00001.jpg",
    "исхарская ненасыть": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20127-page-00001.jpg",
    "королева топи": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20130-page-00001.jpg",
    "кровяница": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20115-page-00001.jpg",
    "махинатор": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20104-page-00001.jpg",
    "медуза горгона": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20131-page-00001.jpg",
    "морок": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20133-page-00001.jpg",
    "ноками": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20123-page-00001.jpg",
    "осклизг": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20109-page-00001.jpg",
    "отряд карателей": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20105-page-00001.jpg",
    "римаанды": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20106-page-00001.jpg",
    "рэккен": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20110-page-00001.jpg",
    "сеятель хвори": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20124-page-00001.jpg",
    "слизь": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20121-page-00001.jpg",
    "тови": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20111-page-00001.jpg",
    "троллок": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20125-page-00001.jpg",
    "тролль": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20128-page-00001.jpg",
    "ундина": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20129-page-00001.jpg",
    "уриил": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20134-page-00001.jpg",
    "хедд": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20112-page-00001.jpg",
    "шаман-душегрыз": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20118-page-00001.jpg",
    "аколит дзара": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2010-page-00001.jpg",
    "анубисар": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2026-page-00001.jpg",
    "арбалетчик": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2017-page-00001.jpg",
    "бон и берроу": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2027-page-00001.jpg",
    "бронтобей": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2030-page-00001.jpg",
    "волхв": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%203-page-00001.jpg",
    "гиррит": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%204-page-00001.jpg",
    "глорм": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2020-page-00001.jpg",
    "дегаска": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2032-page-00001.jpg",
    "змееглав": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2011-page-00001.jpg",
    "кабаний наездник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2012-page-00001.jpg",
    "килсус": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2018-page-00001.jpg",
    "кочевник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%201-page-00001.jpg",
    "кшар": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%202-page-00001.jpg",
    "мантикора": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2021-page-00001.jpg",
    "матриарх племени": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2028-page-00001.jpg",
    "минотавр": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2034-page-00001.jpg",
    "ойуун": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2031-page-00001.jpg",
    "орк": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2013-page-00001.jpg",
    "орк-бомбардир": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2022-page-00001.jpg",
    "ост": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%205-page-00001.jpg",
    "пеший латник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2029-page-00001.jpg",
    "посвященный дзара": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2024-page-00001.jpg",
    "пустотник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%206-page-00001.jpg",
    "пустынный кондор": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2014-page-00001.jpg",
    "риала": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2023-page-00001.jpg",
    "рубаки холверта": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2015-page-00001.jpg",
    "санкторум": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2016-page-00001.jpg",
    "скелос": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2033-page-00001.jpg",
    "смотритель стойла": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%207-page-00001.jpg",
    "степной волколак": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%208-page-00001.jpg",
    "хозяйка прайда": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%209-page-00001.jpg",
    "хронос": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2025-page-00001.jpg",
    "щитоносец": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2019-page-00001.jpg",
    "айрин": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2041-page-00001.jpg",
    "аргвальд": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2060-page-00001.jpg",
    "бешеный маг": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2038-page-00001.jpg",
    "борг": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2055-page-00001.jpg",
    "владыка небес": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2068-page-00001.jpg",
    "гном-басаарг": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2053-page-00001.jpg",
    "гном-поджигатель": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2035-page-00001.jpg",
    "гномий король": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2067-page-00001.jpg",
    "гобрах": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2064-page-00001.jpg",
    "горный великан": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2061-page-00001.jpg",
    "гуль": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2039-page-00001.jpg",
    "знахарь племени": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2042-page-00001.jpg",
    "искатель тайн": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2054-page-00001.jpg",
    "каменный голем": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2043-page-00001.jpg",
    "костедробитель": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2062-page-00001.jpg",
    "криомант": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2057-page-00001.jpg",
    "ледовый охотник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2045-page-00001.jpg",
    "ледовый страж": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2065-page-00001.jpg",
    "ледяной змей": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2036-page-00001.jpg",
    "мастер топора": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2046-page-00001.jpg",
    "молотобоец": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2058-page-00001.jpg",
    "мразень": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2040-page-00001.jpg",
    "ном": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2056-page-00001.jpg",
    "оборотень": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2059-page-00001.jpg",
    "овражный гном": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2037-page-00001.jpg",
    "повелитель молний": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2066-page-00001.jpg",
    "призывающая бурю": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2051-page-00001.jpg",
    "рагнар": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2063-page-00001.jpg",
    "ртунх": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2047-page-00001.jpg",
    "смотритель горнила": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2048-page-00001.jpg",
    "страж чертогов": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2044-page-00001.jpg",
    "тан ханеранга": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2052-page-00001.jpg",
    "хранитель гор": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2050-page-00001.jpg",
    "центурион": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2049-page-00001.jpg",
    "атекар": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2069-page-00001.jpg",
    "бегущая по кронам": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2079-page-00001.jpg",
    "бьерн": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2080-page-00001.jpg",
    "вожак сатиров": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2081-page-00001.jpg",
    "грызь": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2089-page-00001.jpg",
    "дверг": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2090-page-00001.jpg",
    "дикий целитель": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2091-page-00001.jpg",
    "дракс": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2070-page-00001.jpg",
    "друид": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2073-page-00001.jpg",
    "етун": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2098-page-00001.jpg",
    "камнедрев": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2084-page-00001.jpg",
    "келе": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20102-page-00001.jpg",
    "клаэр": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2082-page-00001.jpg",
    "кобольд": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2092-page-00001.jpg",
    "король-жрец": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2094-page-00001.jpg",
    "корпит": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2074-page-00001.jpg",
    "лёккен": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2085-page-00001.jpg",
    "лесной разбойник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2075-page-00001.jpg",
    "леший": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2071-page-00001.jpg",
    "ловец душ": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2095-page-00001.jpg",
    "мира": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2086-page-00001.jpg",
    "оури": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2076-page-00001.jpg",
    "очи кронга": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2093-page-00001.jpg",
    "паук-пересмешник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2077-page-00001.jpg",
    "резчик идолов": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2088-page-00001.jpg",
    "серк": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2083-page-00001.jpg",
    "серый альв": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2099-page-00001.jpg",
    "тергала": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2096-page-00001.jpg",
    "фагор": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2087-page-00001.jpg",
    "фея леса": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2072-page-00001.jpg",
    "хобгоблин": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20100-page-00001.jpg",
    "циклоп": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20101-page-00001.jpg",
    "эльфийский воин": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2097-page-00001.jpg",
    "эриала": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2078-page-00001.jpg",
    "барака": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20165-page-00001.jpg",
    "вампир": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20139-page-00001.jpg",
    "ведьма слуа": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20140-page-00001.jpg",
    "вестник мора": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20137-page-00001.jpg",
    "властелин хаоса": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20169-page-00001.jpg",
    "возница": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20143-page-00001.jpg",
    "вурдалак": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20166-page-00001.jpg",
    "герольд мрака": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20144-page-00001.jpg",
    "демон жадности": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20170-page-00001.jpg",
    "демон зависти": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20145-page-00001.jpg",
    "драккарх": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20159-page-00001.jpg",
    "зомби": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20151-page-00001.jpg",
    "керсамская знать": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20146-page-00001.jpg",
    "лилит и эйдерик": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20160-page-00001.jpg",
    "лунная баньши": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20157-page-00001.jpg",
    "мерцающий змей": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20167-page-00001.jpg",
    "метаморф": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20156-page-00001.jpg",
    "моровой всадник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20141-page-00001.jpg",
    "мрачная дворянка": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20154-page-00001.jpg",
    "огненный имп": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20138-page-00001.jpg",
    "пещерник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20152-page-00001.jpg",
    "повелитель бездны": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20168-page-00001.jpg",
    "повелитель мёртвых": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20147-page-00001.jpg",
    "поганище": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20164-page-00001.jpg",
    "рогатый демон": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20155-page-00001.jpg",
    "сайкорон": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20153-page-00001.jpg",
    "скелетный червь": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20161-page-00001.jpg",
    "суккуб-истязатель": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20142-page-00001.jpg",
    "сшиватель плоти": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20148-page-00001.jpg",
    "талион": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20149-page-00001.jpg",
    "тварь": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20162-page-00001.jpg",
    "уордак": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20158-page-00001.jpg",
    "харон": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20150-page-00001.jpg",
    "хозяин склепа": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20163-page-00001.jpg",
    "алвалинд": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(178).jpg",
    "арацент": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(193).jpg",
    "аристократка": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(194).jpg",
    "ассасин": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(191).jpg",
    "берсерк": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(195).jpg",
    "варлок": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(198).jpg",
    "ведающий запасами": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(172).jpg",
    "ведунья ордена": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(173).jpg",
    "взрывная мэри": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(174).jpg",
    "воин храма": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(189).jpg",
    "волот": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(200).jpg",
    "вольный воитель": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(190).jpg",
    "гермет": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(196).jpg",
    "головорез": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(186).jpg",
    "дозор форрендора": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(183).jpg",
    "жжраг": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(179).jpg",
    "крондак": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(175).jpg",
    "лазутчица": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(187).jpg",
    "линнет": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(180).jpg",
    "ловец удачи": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(181).jpg",
    "мародер": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(171).jpg",
    "матросы аделаиды": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(182).jpg",
    "наемник": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(176).jpg",
    "отшельница": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(184).jpg",
    "паладин алламора": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(188).jpg",
    "ревнитель сеггера": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(192).jpg",
    "следопыт": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(177).jpg",
    "тич": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(199).jpg",
    "шакси": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(185).jpg",
    "эорвал": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(197).jpg"
}

async function write() {
    console.log('{')
    Object.entries(cardsObj).forEach(([name, url]) => {
        axios({
            method: 'get',
            url: url,
            responseType: 'stream'
        })
            .then(function (response) {
                response.data.pipe(fs.createWriteStream(`./src/assets/images/cards/${name}.jpg`));
                console.log(`'${name}': './src/assets/images/cards/${name}.jpg',`)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    })
}

// write()
const c = {
    'королева топи': './src/assets/images/cards/королева топи.jpg',
    'василиск': './src/assets/images/cards/василиск.jpg',
    'осклизг': './src/assets/images/cards/осклизг.jpg',
    'гоблин': './src/assets/images/cards/гоблин.jpg',
    'рэккен': './src/assets/images/cards/рэккен.jpg',
    'древний огр': './src/assets/images/cards/древний огр.jpg',
    'болотник': './src/assets/images/cards/болотник.jpg',
    'хедд': './src/assets/images/cards/хедд.jpg',
    'гидра': './src/assets/images/cards/гидра.jpg',
    "бул'багур": "./src/assets/images/cards/бул'багур.jpg",
    'бон и берроу': './src/assets/images/cards/бон и берроу.jpg',
    'тови': './src/assets/images/cards/тови.jpg',
    'аколит дзара': './src/assets/images/cards/аколит дзара.jpg',
    'тролль': './src/assets/images/cards/тролль.jpg',
    'махинатор': './src/assets/images/cards/махинатор.jpg',
    'вилохвост': './src/assets/images/cards/вилохвост.jpg',
    'кабаний наездник': './src/assets/images/cards/кабаний наездник.jpg',
    'дегаска': './src/assets/images/cards/дегаска.jpg',
    'орк': './src/assets/images/cards/орк.jpg',
    'гиррит': './src/assets/images/cards/гиррит.jpg',
    'троллок': './src/assets/images/cards/троллок.jpg',
    'ноками': './src/assets/images/cards/ноками.jpg',
    'медуза горгона': './src/assets/images/cards/медуза горгона.jpg',
    'костедробитель': './src/assets/images/cards/костедробитель.jpg',
    'ойуун': './src/assets/images/cards/ойуун.jpg',
    'ледовый страж': './src/assets/images/cards/ледовый страж.jpg',
    'глорм': './src/assets/images/cards/глорм.jpg',
    'пеший латник': './src/assets/images/cards/пеший латник.jpg',
    'слизь': './src/assets/images/cards/слизь.jpg',
    'анубисар': './src/assets/images/cards/анубисар.jpg',
    'мантикора': './src/assets/images/cards/мантикора.jpg',
    'кочевник': './src/assets/images/cards/кочевник.jpg',
    'степной волколак': './src/assets/images/cards/степной волколак.jpg',
    'килсус': './src/assets/images/cards/килсус.jpg',
    'матриарх племени': './src/assets/images/cards/матриарх племени.jpg',
    'исхарская ненасыть': './src/assets/images/cards/исхарская ненасыть.jpg',
    'вайл': './src/assets/images/cards/вайл.jpg',
    'сеятель хвори': './src/assets/images/cards/сеятель хвори.jpg',
    'тан ханеранга': './src/assets/images/cards/тан ханеранга.jpg',
    'мира': './src/assets/images/cards/мира.jpg',
    'клаэр': './src/assets/images/cards/клаэр.jpg',
    'смотритель горнила': './src/assets/images/cards/смотритель горнила.jpg',
    'ост': './src/assets/images/cards/ост.jpg',
    'атекар': './src/assets/images/cards/атекар.jpg',
    'каменный голем': './src/assets/images/cards/каменный голем.jpg',
    'грезы архааля': './src/assets/images/cards/грезы архааля.jpg',
    'смотритель стойла': './src/assets/images/cards/смотритель стойла.jpg',
    'щитоносец': './src/assets/images/cards/щитоносец.jpg',
    'гном-поджигатель': './src/assets/images/cards/гном-поджигатель.jpg',
    'рубаки холверта': './src/assets/images/cards/рубаки холверта.jpg',
    'келе': './src/assets/images/cards/келе.jpg',
    'хронос': './src/assets/images/cards/хронос.jpg',
    'овражный гном': './src/assets/images/cards/овражный гном.jpg',
    'мразень': './src/assets/images/cards/мразень.jpg',
    'минотавр': './src/assets/images/cards/минотавр.jpg',
    'страж чертогов': './src/assets/images/cards/страж чертогов.jpg',
    'знахарь племени': './src/assets/images/cards/знахарь племени.jpg',
    'властелин хаоса': './src/assets/images/cards/властелин хаоса.jpg',
    'шакси': './src/assets/images/cards/шакси.jpg',
    'волот': './src/assets/images/cards/волот.jpg',
    'тергала': './src/assets/images/cards/тергала.jpg',
    'герольд мрака': './src/assets/images/cards/герольд мрака.jpg',
    'матросы аделаиды': './src/assets/images/cards/матросы аделаиды.jpg',
    'отряд карателей': './src/assets/images/cards/отряд карателей.jpg',
    'наемник': './src/assets/images/cards/наемник.jpg',
    'ижор': './src/assets/images/cards/ижор.jpg',
    'повелитель бездны': './src/assets/images/cards/повелитель бездны.jpg',
    'дочь перламутра': './src/assets/images/cards/дочь перламутра.jpg',
    'римаанды': './src/assets/images/cards/римаанды.jpg',
    'мастер топора': './src/assets/images/cards/мастер топора.jpg',
    'паладин алламора': './src/assets/images/cards/паладин алламора.jpg',
    'шаман-душегрыз': './src/assets/images/cards/шаман-душегрыз.jpg',
    'резчик идолов': './src/assets/images/cards/резчик идолов.jpg',
    'бешеный маг': './src/assets/images/cards/бешеный маг.jpg',
    'санкторум': './src/assets/images/cards/санкторум.jpg',
    'ном': './src/assets/images/cards/ном.jpg',
    'хозяйка прайда': './src/assets/images/cards/хозяйка прайда.jpg',
    'айрин': './src/assets/images/cards/айрин.jpg',
    'центурион': './src/assets/images/cards/центурион.jpg',
    'пустынный кондор': './src/assets/images/cards/пустынный кондор.jpg',
    'ледовый охотник': './src/assets/images/cards/ледовый охотник.jpg',
    'бьерн': './src/assets/images/cards/бьерн.jpg',
    'горный великан': './src/assets/images/cards/горный великан.jpg',
    'огненный имп': './src/assets/images/cards/огненный имп.jpg',
    'гобрах': './src/assets/images/cards/гобрах.jpg',
    'харон': './src/assets/images/cards/харон.jpg',
    'варлок': './src/assets/images/cards/варлок.jpg',
    'гном-басаарг': './src/assets/images/cards/гном-басаарг.jpg',
    'ведунья ордена': './src/assets/images/cards/ведунья ордена.jpg',
    'драккарх': './src/assets/images/cards/драккарх.jpg',
    'демон жадности': './src/assets/images/cards/демон жадности.jpg',
    'суккуб-истязатель': './src/assets/images/cards/суккуб-истязатель.jpg',
    'эльфийский воин': './src/assets/images/cards/эльфийский воин.jpg',
    'дозор форрендора': './src/assets/images/cards/дозор форрендора.jpg',
    'друид': './src/assets/images/cards/друид.jpg',
    'искатель тайн': './src/assets/images/cards/искатель тайн.jpg',
    'лесной разбойник': './src/assets/images/cards/лесной разбойник.jpg',
    'мерцающий змей': './src/assets/images/cards/мерцающий змей.jpg',
    'хобгоблин': './src/assets/images/cards/хобгоблин.jpg',
    'вестник мора': './src/assets/images/cards/вестник мора.jpg',
    'ледяной змей': './src/assets/images/cards/ледяной змей.jpg',
    'гаррид-лучник': './src/assets/images/cards/гаррид-лучник.jpg',
    'скелос': './src/assets/images/cards/скелос.jpg',
    'гуль': './src/assets/images/cards/гуль.jpg',
    'грызь': './src/assets/images/cards/грызь.jpg',
    'отшельница': './src/assets/images/cards/отшельница.jpg',
    'бронтобей': './src/assets/images/cards/бронтобей.jpg',
    'фагор': './src/assets/images/cards/фагор.jpg',
    'повелитель молний': './src/assets/images/cards/повелитель молний.jpg',
    'дикий целитель': './src/assets/images/cards/дикий целитель.jpg',
    'орк-бомбардир': './src/assets/images/cards/орк-бомбардир.jpg',
    'тич': './src/assets/images/cards/тич.jpg',
    'керсамская знать': './src/assets/images/cards/керсамская знать.jpg',
    'зомби': './src/assets/images/cards/зомби.jpg',
    'дверг': './src/assets/images/cards/дверг.jpg',
    'поганище': './src/assets/images/cards/поганище.jpg',
    'мародер': './src/assets/images/cards/мародер.jpg',
    'король-жрец': './src/assets/images/cards/король-жрец.jpg',
    'демон зависти': './src/assets/images/cards/демон зависти.jpg',
    'морок': './src/assets/images/cards/морок.jpg',
    'двухголовый тролль': './src/assets/images/cards/двухголовый тролль.jpg',
    'барака': './src/assets/images/cards/барака.jpg',
    'берсерк': './src/assets/images/cards/берсерк.jpg',
    'жжраг': './src/assets/images/cards/жжраг.jpg',
    'дети топи': './src/assets/images/cards/дети топи.jpg',
    'кровяница': './src/assets/images/cards/кровяница.jpg',
    'вурдалак': './src/assets/images/cards/вурдалак.jpg',
    'хранитель гор': './src/assets/images/cards/хранитель гор.jpg',
    'ловец удачи': './src/assets/images/cards/ловец удачи.jpg',
    'лазутчица': './src/assets/images/cards/лазутчица.jpg',
    'кобольд': './src/assets/images/cards/кобольд.jpg',
    'бегущая по кронам': './src/assets/images/cards/бегущая по кронам.jpg',
    'вожак сатиров': './src/assets/images/cards/вожак сатиров.jpg',
    'борг': './src/assets/images/cards/борг.jpg',
    'скелетный червь': './src/assets/images/cards/скелетный червь.jpg',
    'сшиватель плоти': './src/assets/images/cards/сшиватель плоти.jpg',
    'метаморф': './src/assets/images/cards/метаморф.jpg',
    'моровой всадник': './src/assets/images/cards/моровой всадник.jpg',
    'эриала': './src/assets/images/cards/эриала.jpg',
    'етун': './src/assets/images/cards/етун.jpg',
    'ртунх': './src/assets/images/cards/ртунх.jpg',
    'ассасин': './src/assets/images/cards/ассасин.jpg',
    'камнедрев': './src/assets/images/cards/камнедрев.jpg',
    'линнет': './src/assets/images/cards/линнет.jpg',
    'гномий король': './src/assets/images/cards/гномий король.jpg',
    'лёккен': './src/assets/images/cards/лёккен.jpg',
    'мрачная дворянка': './src/assets/images/cards/мрачная дворянка.jpg',
    'пустотник': './src/assets/images/cards/пустотник.jpg',
    'вольный воитель': './src/assets/images/cards/вольный воитель.jpg',
    'паук-пересмешник': './src/assets/images/cards/паук-пересмешник.jpg',
    'змееглав': './src/assets/images/cards/змееглав.jpg',
    'владыка небес': './src/assets/images/cards/владыка небес.jpg',
    'оури': './src/assets/images/cards/оури.jpg',
    'ундина': './src/assets/images/cards/ундина.jpg',
    'леший': './src/assets/images/cards/леший.jpg',
    'серый альв': './src/assets/images/cards/серый альв.jpg',
    'уриил': './src/assets/images/cards/уриил.jpg',
    'ревнитель сеггера': './src/assets/images/cards/ревнитель сеггера.jpg',
    'очи кронга': './src/assets/images/cards/очи кронга.jpg',
    'ловец душ': './src/assets/images/cards/ловец душ.jpg',
    'следопыт': './src/assets/images/cards/следопыт.jpg',
    'арацент': './src/assets/images/cards/арацент.jpg',
    'повелитель мёртвых': './src/assets/images/cards/повелитель мёртвых.jpg',
    'рогатый демон': './src/assets/images/cards/рогатый демон.jpg',
    'ведьма слуа': './src/assets/images/cards/ведьма слуа.jpg',
    'фея леса': './src/assets/images/cards/фея леса.jpg',
    'пещерник': './src/assets/images/cards/пещерник.jpg',
    'арбалетчик': './src/assets/images/cards/арбалетчик.jpg',
    'сайкорон': './src/assets/images/cards/сайкорон.jpg',
    'посвященный дзара': './src/assets/images/cards/посвященный дзара.jpg',
    'волхв': './src/assets/images/cards/волхв.jpg',
    'лилит и эйдерик': './src/assets/images/cards/лилит и эйдерик.jpg',
    'циклоп': './src/assets/images/cards/циклоп.jpg',
    'дракс': './src/assets/images/cards/дракс.jpg',
    'молотобоец': './src/assets/images/cards/молотобоец.jpg',
    'гермет': './src/assets/images/cards/гермет.jpg',
    'эорвал': './src/assets/images/cards/эорвал.jpg',
    'риала': './src/assets/images/cards/риала.jpg',
    'аргвальд': './src/assets/images/cards/аргвальд.jpg',
    'корпит': './src/assets/images/cards/корпит.jpg',
    'оборотень': './src/assets/images/cards/оборотень.jpg',
    'призывающая бурю': './src/assets/images/cards/призывающая бурю.jpg',
    'взрывная мэри': './src/assets/images/cards/взрывная мэри.jpg',
    'лунная баньши': './src/assets/images/cards/лунная баньши.jpg',
    'уордак': './src/assets/images/cards/уордак.jpg',
    'аристократка': './src/assets/images/cards/аристократка.jpg',
    'головорез': './src/assets/images/cards/головорез.jpg',
    'серк': './src/assets/images/cards/серк.jpg',
    'крондак': './src/assets/images/cards/крондак.jpg',
    'хозяин склепа': './src/assets/images/cards/хозяин склепа.jpg',
    'вампир': './src/assets/images/cards/вампир.jpg',
    'тварь': './src/assets/images/cards/тварь.jpg',
    'ведающий запасами': './src/assets/images/cards/ведающий запасами.jpg',
    'криомант': './src/assets/images/cards/криомант.jpg',
    'талион': './src/assets/images/cards/талион.jpg',
    'возница': './src/assets/images/cards/возница.jpg',
    'воин храма': './src/assets/images/cards/воин храма.jpg',
    'алвалинд': './src/assets/images/cards/алвалинд.jpg',
    'кшар': './src/assets/images/cards/кшар.jpg',
    'рагнар': './src/assets/images/cards/рагнар.jpg',
}

const data = [
    {
        "name": "Вайл",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 14,
            "walkCount": "1",
            "simpleHit": "1-1-4"
        },
        "abilities": null,
        "rarity": "Частая",
        "index": 117,
        "description": "Никто не знает пути через трясины Уорлога так хорошо, как племя вайлов. И неудивительно, ведь легенды гласят, что вайлы — это прямые потомки людей, тысячелетия назад населявших древний Уорлог, крупнейшую столицу Лаара.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20117-page-00001.jpg"
    },
    {
        "name": "Болотник",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 5,
            "walkCount": "1",
            "simpleHit": "1-1-1"
        },
        "abilities": "Прыжок, дальность 4.|⤵️: Уничтожить Болотника, при этом ранить всех стоящих рядом существ противника на 1, они получают отравление на 1 (воздействие «ядовитый взрыв).|⤵️: Начинает бой с ⚪️ .",
        "rarity": "Частая",
        "index": 107,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20107-page-00001.jpg"
    },
    {
        "name": "Вилохвост",
        "cost": 5,
        "elite": true,
        "uniqueness": true,
        "element": "Болота",
        "class": "Дракон",
        "stats": {
            "lifeCount": 8,
            "walkCount": "Полет",
            "simpleHit": "2-2-3"
        },
        "abilities": "🩸. ⚔️1.|+1 к  🗡 по защитникам.|Направленный удар по лесным существам.",
        "rarity": "Необычная",
        "index": 126,
        "description": "Вилохвосты Уорлога из года в год тревожат своими налётами жителей эльфийских деревень.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20126-page-00001.jpg"
    },
    {
        "name": "Двухголовый тролль",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Болота",
        "class": "Тролль",
        "stats": {
            "lifeCount": 13,
            "walkCount": "1",
            "simpleHit": "3-3-4"
        },
        "abilities": "📜. ☯️1.|При 🗡 — пророчество 2; если обе карты 🔷 — ранить атакованного на 2, если обе карты  — атакованный получает отравление на 2.",
        "rarity": "Редкая",
        "index": 132,
        "description": "— Моя бить!|— Нет, твоя тупой, лучше моя кидать отравленный гриб!",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20132-page-00001.jpg"
    },
    {
        "name": "Бул'Багур",
        "cost": 7,
        "elite": false,
        "uniqueness": true,
        "element": "Болота",
        "class": "Тролль",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-3"
        },
        "abilities": "Защита от атак летающих. ☯️1.|В начале хода противника выберите до 3 клеток подряд на одной прямой (в том числе по диагонали) от Бул’Багура — до конца вашего следующего хода карты получают на 1 рану больше от дальних атак, отравления и удара Бул’Багура, пока находятся на этих клетках (воздействие «свет фонаря»).",
        "rarity": "Редкая",
        "index": 119,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20119-page-00001.jpg"
    },
    {
        "name": "Василиск",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "Направленный удар.|При ударе — атакованное существо не может передвигаться с той клетки, где оно находилось на момент этого удара, пока Василиск не переместится или не покинет поле боя (воздействие «взгляд Василиска»).",
        "rarity": "Частая",
        "index": 116,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20116-page-00001.jpg"
    },
    {
        "name": "Гаррид-лучник",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 9,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "⤵️: Выстрел на 1-2-3, дальность 4.",
        "rarity": "Частая",
        "index": 113,
        "description": "Четырёхрукие гарриды из топей Ракштольна были бы самыми могучими стрелками, если бы не примитивные луки, сделанные из морёных коряг.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20113-page-00001.jpg"
    },
    {
        "name": "Гидра",
        "cost": 9,
        "elite": true,
        "uniqueness": true,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 13,
            "walkCount": "1",
            "simpleHit": "2-3-3"
        },
        "abilities": "📜. ☯️1.|Безответный удар. Может нападать  🗡на всех стоящих рядом существ противника, только подряд, после последнего нападения закрывается.|Сила  🗡  Гидры не может быть снижена.",
        "rarity": "Ультраредкая",
        "index": 136,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20136-page-00001.jpg"
    },
    {
        "name": "Гоблин",
        "cost": 7,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "Направленный удар.|-2 от 🗡 .|При ударе в нападении или промахе в нападении — закрыть атакованное существо (воздействие «оцепенение»).",
        "rarity": "Частая",
        "index": 120,
        "description": "Гоблин нанёс коварный выпад и ощерился зубастой усмешкой — его противник был обречён.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20120-page-00001.jpg"
    },
    {
        "name": "Грёзы Архааля",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": "Архаалит",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: Пророчество 1; существо противника стоимостью Х получает отравление на 1, ваше существо стоимостью Х получает −1 от немагических атак до конца хода противника (где Х — стоимость показанной карты без учёта элитности).",
        "rarity": "Необычная",
        "index": 114,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20114-page-00001.jpg"
    },
    {
        "name": "Дети топи",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": "Архаалит",
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "При первом за ход ударе существа противника по Детям топи — заблокировать этот удар, при этом прыжок, дальность 2.|После прыжка Детей топи — существо противника по его выбору рядом с освободившейся клеткой перемещается на эту клетку.",
        "rarity": "Необычная",
        "index": 108,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20108-page-00001.jpg"
    },
    {
        "name": "Дочь перламутра",
        "cost": 4,
        "elite": true,
        "uniqueness": true,
        "element": "Болота",
        "class": "Речная дева",
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "🛡1.|Если Дочь перламутра атакована немагической атакой — пророчество 1; блокировать атаку, если показанная карта нечетной стоимости (1 раз за ход).",
        "rarity": "Необычная",
        "index": 122,
        "description": "Её бледная, мягко светящаяся кожа цветом походит на перламутр, что она собирает.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20122-page-00001.jpg"
    },
    {
        "name": "Древний огр",
        "cost": 8,
        "elite": true,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 14,
            "walkCount": "1",
            "simpleHit": "3-4-5"
        },
        "abilities": "🩸. ☯️1. ⚔️1.|−1 от выстрелов и метаний.|При ударе по Древнему огру — он получает защиту от ударов до конца хода.",
        "rarity": "Редкая",
        "index": 135,
        "description": "Туман... Он сопутствует им.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20135-page-00001.jpg"
    },
    {
        "name": "Ижор",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": "Архаалит",
        "stats": {
            "lifeCount": 6,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "⤵️: Выстрел на 1, дальность 4. При сильной атаке — атакованный получает отравление на 1.|+1 к броску кубика, когда атакует карты во втором ряду противника.",
        "rarity": "Частая",
        "index": 103,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20103-page-00001.jpg"
    },
    {
        "name": "Исхарская ненасыть",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 11,
            "walkCount": "2",
            "simpleHit": "1-2-3"
        },
        "abilities": "⚡️. ⚔️1.|При пророчестве вашей карты — получает +Х к следующему , где Х — количество показанных карт (максимум +3).",
        "rarity": "Частая",
        "index": 127,
        "description": "Выбравшаяся из омута тварь росла с каждой минутой, пока не стала размером с небольшой дом.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20127-page-00001.jpg"
    },
    {
        "name": "Королева топи",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Болота",
        "class": "Архаалит",
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "🔮.|В конце хода противника вызвать болотное существо стоимостью 5 или менее на клетку, рядом с которой стоит 8 или более ваших существ.|⤵️: Пророчество 1; если карта с таким же именем есть в одном из отрядов — ранить выбранное существо на 2, иначе ранить его на 1.",
        "rarity": "Ультраредкая",
        "index": 130,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20130-page-00001.jpg"
    },
    {
        "name": "Кровяница",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": "Речная дева",
        "stats": {
            "lifeCount": 11,
            "walkCount": "2",
            "simpleHit": "2-2-3"
        },
        "abilities": "⤵️: Добивание на Х+1, где Х — число отравленных существ рядом с целью добивания.",
        "rarity": "Необычная",
        "index": 115,
        "description": "Встретив попавшую в беду незнакомку, не спеши сломя голову бросаться ей на помощь, ведь спасать, возможно, придётся тебя самого.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20115-page-00001.jpg"
    },
    {
        "name": "Махинатор",
        "cost": 3,
        "elite": false,
        "uniqueness": true,
        "element": "Болота",
        "class": "Архаалит",
        "stats": {
            "lifeCount": 6,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "При пророчестве ваших карт можете вернуть показанные карты на верх колоды в любом порядке (1 раз за ход).|⤵️: Воздействие «уловка» — существо теряет (1 раз за бой).|⤵️: Разряд на 1, дальность 3.",
        "rarity": "Частая",
        "index": 104,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20104-page-00001.jpg"
    },
    {
        "name": "Медуза Горгона",
        "cost": 6,
        "elite": true,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "",
            "simpleHit": "2-3-4"
        },
        "abilities": "Направленный удар.|Вампиризм. Максимум 10❤️ .|Трупоедство.|При сильном  — атакованный закрывается и не открывается в свой следующий ход (воздействие «взгляд Медузы»).",
        "rarity": "Частая",
        "index": 131,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20131-page-00001.jpg"
    },
    {
        "name": "Морок",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 13,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "🛡1.|−1 от выстрелов и метаний.|−1 от 🗡 , пока Морок выступает защитником.|🗡 по закрытому Мороку сводятся к 1.|🗡 по картам слева и справа от Морока сводится к слабому.",
        "rarity": "Необычная",
        "index": 133,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20133-page-00001.jpg"
    },
    {
        "name": "Ноками",
        "cost": 4,
        "elite": true,
        "uniqueness": true,
        "element": "Болота",
        "class": "Речная дева",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "Защита от выстрелов.|Когда существо противника получает раны от отравления, может ранить стоящее рядом с ним существо на 1 (1 раз за ход).|⤵️: Воздействие «вскипающий яд» — выбранное существо с отравлением получает +1 к отравлению (максимум до 2).",
        "rarity": "Редкая",
        "index": 123,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20123-page-00001.jpg"
    },
    {
        "name": "Осклизг",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": "Тролль",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "🔮. ☯️2.|⚪️⤵️: Воздействие «эликсиры Ракштольна» — перераспределить 4 (или менее) раны со стоящего рядом болотного существа на себя.|⤵️:↗️  на 1.|2️⃣: Начинает бой с ⚪️.",
        "rarity": "Частая",
        "index": 109,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20109-page-00001.jpg"
    },
    {
        "name": "Отряд карателей",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": "Архаалит",
        "stats": {
            "lifeCount": 5,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "Когда вы показываете Отряд карателей при пророчестве — можете вызвать его на незанятую клетку в закрытом виде, при этом существо, стоящее рядом с вызванным, получает отравление на 1.",
        "rarity": "Частая",
        "index": 105,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20105-page-00001.jpg"
    },
    {
        "name": "Римаанды",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": "Архаалит",
        "stats": {
            "lifeCount": 6,
            "walkCount": "Полет",
            "simpleHit": "1-2-3"
        },
        "abilities": "Безответный удар по существам противника, справа и слева от которых нет других его существ.",
        "rarity": "Частая",
        "index": 106,
        "description": "Слуга Архааля неторопливо заложил вираж и свернул на восток: он знал, что одинокая цель станет лёгкой добычей.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20106-page-00001.jpg"
    },
    {
        "name": "Рэккен",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-1"
        },
        "abilities": "⤵️: Воздействие «рэккендум» — перераспределить 2 (или менее) раны с другого болотного существа на себя.⤵️: Метание «ритуального ножа» на Х, дальность 4, где Х — число ран на Рэккене (максимум 4).",
        "rarity": "Частая",
        "index": 110,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20110-page-00001.jpg"
    },
    {
        "name": "Сеятель хвори",
        "cost": 4,
        "elite": true,
        "uniqueness": true,
        "element": "Болота",
        "class": "Архаалит",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "При гибели существа противника от отравления — может отравить стоящее рядом с погибшим существо на Х, где Х — величина отравления умершего существа (1 раз за ход).|⤵️: Разряд на 1-2-2, при среднем или сильном разряде — атакованный получает отравление на 1.",
        "rarity": "Необычная",
        "index": 124,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20124-page-00001.jpg"
    },
    {
        "name": "Слизь",
        "cost": 7,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "3-3-4"
        },
        "abilities": "☯️1.|При 🗡— выстрел «плевок слизью» на 1, дальность 3.|При ближнем ударе по Слизи — ранить атаковавшего на 1.⚪️⤵️: Особый удар на 3, атакованное существо получает отравление на 1.",
        "rarity": "Частая",
        "index": 121,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20121-page-00001.jpg"
    },
    {
        "name": "Тови",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": "Речная дева",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "При движении Тови на соседнюю клетку — противник обязан переместить любое своё существо в том же направлении (относительно Тови); если он не может или не хочет этого делать — Тови получает +2 к следующему метанию (до конца вашего хода).⤵️: Метание «жабы» на 1.",
        "rarity": "Частая",
        "index": 111,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20111-page-00001.jpg"
    },
    {
        "name": "Троллок",
        "cost": 4,
        "elite": true,
        "uniqueness": false,
        "element": "Болота",
        "class": "Тролль",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "⤵️: Метание «топора» на 1-2-2.|+1 к метанию по картам, обладающим выстрелом, метанием или разрядом.",
        "rarity": "Необычная",
        "index": 125,
        "description": "Беда тому путнику, который решит пробираться в одиночку через камышовые поля Уора.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20125-page-00001.jpg"
    },
    {
        "name": "Тролль",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Болота",
        "class": "Тролль",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-4-5"
        },
        "abilities": "☯️2. ⚔️1.",
        "rarity": "Частая",
        "index": 128,
        "description": "Бывалые воины рассказывают, что если уж вступил в битву с троллем, то, нанося последний удар, убедись, что он смертелен, ибо поразительно быстро зализывают свои раны тролли в глубине болот.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20128-page-00001.jpg"
    },
    {
        "name": "Ундина",
        "cost": 5,
        "elite": true,
        "uniqueness": true,
        "element": "Болота",
        "class": "Речная дева",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "🩸. ⚡️. 🪓.|⤵️: Воздействие «сладострастная аура» — существо получает отравление на 1.|⤵️: Заклинание «власть Ундины» — ранить всех отравленных существ противника на 1.",
        "rarity": "Ультраредкая",
        "index": 129,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20129-page-00001.jpg"
    },
    {
        "name": "Уриил",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Болота",
        "class": null,
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "3-3-4"
        },
        "abilities": "☯️1.|При 🗡 по Уриилу атаковавший не открывается в начале своего следующего хода (воздействие «мерзкая аура»).",
        "rarity": "Редкая",
        "index": 134,
        "description": "Вонзив меч в плоть уриила, Таликс попытался выдернуть его, но не тут-то было — клинок увяз намертво.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20134-page-00001.jpg"
    },
    {
        "name": "Хедд",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Болота",
        "class": "Архаалит",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "☯️1.|При среднем или сильном 🗡 — атакованный получает отравление на 1.",
        "rarity": "Частая",
        "index": 112,
        "description": "Будучи знатоками самых смертоносных ядов, хедды предпочитают закаливать свои клинки в отравленных водах источников Исхара.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20112-page-00001.jpg"
    },
    {
        "name": "Шаман-душегрыз",
        "cost": 6,
        "elite": false,
        "uniqueness": true,
        "element": "Болота",
        "class": "Тролль",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "Защита от выстрелов.|⏳⚪️⤵️: Заклинание «гипноз» — открытое существо противника наносит по стоящей рядом карте 🗡 и закрывается.⤵️: Получить Защиту от летающих.2️⃣: Начинает бой с ⚪️ .",
        "rarity": "Редкая",
        "index": 118,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20118-page-00001.jpg"
    },
    {
        "name": "Аколит Дзара",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Степи",
        "class": "Аккениец",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: Три или менее разряда на 1 по разным существам.",
        "rarity": "Частая",
        "index": 10,
        "description": "Не один аколит Дзара превратился в живой факел, ища власти над огненной стихией.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2010-page-00001.jpg"
    },
    {
        "name": "Анубисар",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 12,
            "walkCount": "2",
            "simpleHit": "2-3-5"
        },
        "abilities": "Броня 1.|При сильном 🗡 ранить на 1 до двух существ противника, стоящих рядом с атакованным (воздействие «цепи Анубисара»).|Строй: Анубис ар получает бонусы строя всех степных существ, с которыми стоит в строю (меняя название карты в тексте особенности на «Анубисар»).",
        "rarity": "Редкая",
        "index": 26,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2026-page-00001.jpg"
    },
    {
        "name": "Арбалетчик",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": "Аккениец",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "Строй: 🪓.|⤵️: Выстрел на 1-2-3.|⤵️: Получить ⚪️.|+2 к выстрелу за каждую ⚪️ на Арбалетчике. При выстреле теряет все ⚪️.|Не может иметь более 4 ⚪️.",
        "rarity": "Частая",
        "index": 17,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2017-page-00001.jpg"
    },
    {
        "name": "Бон и Берроу",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Степи",
        "class": "Аккениец, Тоа-Дан",
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "⚔️1. Броня 1.|Пока на Бон и Берроу нет ⚪️ — получает «⤵️: ↗️ на 2, при этом может получить ⚪️».|Пока на Бон и Берроу есть ⚪️ — получает «При 🗡 — разряд на 1-2-2, дальность 3».|Если Бон и Берроу атакованы 🗡 — могут потерять ⚪️; блокировать удар. Не может иметь более 1⚪️.",
        "rarity": "Редкая",
        "index": 27,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2027-page-00001.jpg"
    },
    {
        "name": "Бронтобей",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 13,
            "walkCount": "2",
            "simpleHit": "2-2-3"
        },
        "abilities": "Направленный удар. ⚔️2.|При перемещении на соседнюю клетку получает +1 к 🗡 до конца хода.|+1 к 🗡 по существам напротив Бронт  обея.",
        "rarity": "Редкая",
        "index": 30,
        "description": "Упрямство бронтобеев широко известно. Большинство старается просто не попадаться им на глаза.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2030-page-00001.jpg"
    },
    {
        "name": "Волхв",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": "Орк",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⚪️⤵️: Заклинание «волхвование при луне» — перераспределить 2 (или менее) раны с существа в вашем отряде на существо или существ противни ика.|2️⃣: начинает бой с ⚪️.",
        "rarity": "Частая",
        "index": 3,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%203-page-00001.jpg"
    },
    {
        "name": "Гиррит",
        "cost": 4,
        "elite": false,
        "uniqueness": true,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "⤵️: Выстрел на 1, дальность 3.|⚪️⤵️: Выстрел на 2.|При выстреле атакованная карта получает маркер «охоты» до конца вашего хода (когда он  на получает раны от атаки летающего существа — ранить её ещё на 2 и удалить маркер).",
        "rarity": "Редкая",
        "index": 4,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%204-page-00001.jpg"
    },
    {
        "name": "Глорм",
        "cost": 4,
        "elite": true,
        "uniqueness": false,
        "element": "Степи",
        "class": "Тоа-Дан",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⏳⤵️: Воздействие «отвлекающая вспышка» — свести ближний удар по существу в вашем отряде к 1, при этом ранить Глорма на 1 (или на 0, еслии удар нанесён по степному существу).",
        "rarity": "Частая",
        "index": 20,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2020-page-00001.jpg"
    },
    {
        "name": "Дегаска",
        "cost": 7,
        "elite": true,
        "uniqueness": true,
        "element": "Степи",
        "class": "Орк",
        "stats": {
            "lifeCount": 13,
            "walkCount": "2",
            "simpleHit": "2-3-5"
        },
        "abilities": "📜. ⚔️1.|-1 от дальних атак.|В начале боя и при каждом сильном 🗡 покажите из колоды существо (кроме Дегаски ; карту с каждым названием можно показывать только один раз) с особенностью с текстом «при сильном 🗡» — Дегаска получает эту особенность до конца боя, меняя название карты в тексте особенности на «Дегаска».",
        "rarity": "Ультраредкая",
        "index": 32,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2032-page-00001.jpg"
    },
    {
        "name": "Змееглав",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "2-4-5"
        },
        "abilities": "⚔️1. 🛡1.|⤵️: ↗️ на 1.",
        "rarity": "Частая",
        "index": 11,
        "description": "В пустыне Сота издревле существовал культ служителей Змея. Тот, кто постигал высшие заповеди учения, начинал обретать черты своего божества.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2011-page-00001.jpg"
    },
    {
        "name": "Кабаний наездник",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": "Орк",
        "stats": {
            "lifeCount": 11,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "⚔️1.|После перемещения с вашей половины поля боя на половину поля боя противника получает +1 к 🗡 до конца хода.|После перемещения с половины поля боя противника на вашу половину поля боя получает «Не закрывается при атаке» до конца хода.",
        "rarity": "Необычная",
        "index": 12,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2012-page-00001.jpg"
    },
    {
        "name": "Килсус",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": "Аккениец",
        "stats": {
            "lifeCount": 11,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "⚔️1.|Не получает ран от ответных ударов.|При 🗡 — добивание на Х (не более 2 раз за ход), где Х — количество клеток, на которое передвинулся Килсус в этот ход.",
        "rarity": "Необычная",
        "index": 18,
        "description": "Ездовой ящер, быть может, и не так быстр, как лошадь, зато куда более опасен.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2018-page-00001.jpg"
    },
    {
        "name": "Кочевник",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "1-2-3"
        },
        "abilities": null,
        "rarity": "Частая",
        "index": 1,
        "description": "Неисчислимы их армии, что вечно кочуют с места на место, превращая в ничто деревни и города пограничья.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%201-page-00001.jpg"
    },
    {
        "name": "Кшар",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 6,
            "walkCount": "2",
            "simpleHit": "1-2-2"
        },
        "abilities": "⤵️: ↗️ на 1.|⚪️⤵️: Особый удар «молниеносный выпад» на 3.|+1 к ударам по горным.",
        "rarity": "Частая",
        "index": 2,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%202-page-00001.jpg"
    },
    {
        "name": "Мантикора",
        "cost": 4,
        "elite": true,
        "uniqueness": true,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "Полет",
            "simpleHit": "2-2-3"
        },
        "abilities": "📜.|Игнорирует Защиту от летающих.|+1 к 🗡 и 🎯 по существам, обладающим разрядом, магическим ударом или заклинанием.",
        "rarity": "Необычная",
        "index": 21,
        "description": "Говорят, клык мантикоры помогает в любовных делах. Жаль, никто не сумел проверить.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2021-page-00001.jpg"
    },
    {
        "name": "Матриарх племени",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Степи",
        "class": "Орк",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "🔮.|⚪️⤵️: Воздействие «приказ матриарха» — все ваши существа, стоящие рядом с выбранным существом противника, сражаются с ним как с открытым, не закрываясь при этом.|2️⃣: Начинает бой с ⚪️.",
        "rarity": "Ультраредкая",
        "index": 28,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2028-page-00001.jpg"
    },
    {
        "name": "Минотавр",
        "cost": 9,
        "elite": true,
        "uniqueness": false,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 14,
            "walkCount": "2",
            "simpleHit": "3-4-5"
        },
        "abilities": "Броня 2.|Может атаковать 🗡 2 раза за ход, после первой атаки не закрывается.|Строй: +1 к сильному 🗡",
        "rarity": "Редкая",
        "index": 34,
        "description": "Редко когда гладиатор-человек может остаться в живых, выйдя на арену против минотавра.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2034-page-00001.jpg"
    },
    {
        "name": "Ойуун",
        "cost": 7,
        "elite": true,
        "uniqueness": true,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-1"
        },
        "abilities": "Защита от выстрелов.|⤵️: Получить Защиту от летающих.|⏳⤵️: Заклинание «боевое исступление» — открыть ваше существо, при этом ранить его на 1 (не более 2 раз за ход).",
        "rarity": "Ультраредкая",
        "index": 31,
        "description": "Гулкие удары шаманского бубна разносились по степи, вселяя в сердца воинов отвагу.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2031-page-00001.jpg"
    },
    {
        "name": "Орк",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": "Орк",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "3-3-4"
        },
        "abilities": "+1 к 🗡 и 🎯 по горным существам.",
        "rarity": "Частая",
        "index": 13,
        "description": "Орки Великих степей... Их орды из года в год штурмуют неприступные скалы Лант-Мора.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2013-page-00001.jpg"
    },
    {
        "name": "Орк-бомбардир",
        "cost": 4,
        "elite": true,
        "uniqueness": false,
        "element": "Степи",
        "class": "Орк",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "⤵️: Метание «бомбы» на 1 по карте на выбранной клетке, дальность 3; в начале вашего следующего хода все карты на этой клетке ранятся на 2 (воздействие «взрыв»).",
        "rarity": "Частая",
        "index": 22,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2022-page-00001.jpg"
    },
    {
        "name": "Ост",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⏳⤵️: Воздействие «дар силы» — свести 🗡 вашего существа к сильному.|⤵️: Разряд на 1.",
        "rarity": "Частая",
        "index": 5,
        "description": "Пёстрые одежды достались им от беспечных кандийских караванщиков.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%205-page-00001.jpg"
    },
    {
        "name": "Пеший латник",
        "cost": 6,
        "elite": true,
        "uniqueness": false,
        "element": "Степи",
        "class": "Аккениец",
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "Защита от выстрелов.|Строй:  Броня 2.|При ближнем ударе по Пешему латнику — особый удар на 2 по атаковавшему.",
        "rarity": "Частая",
        "index": 29,
        "description": "Доспехи пехотинцев Туллена закаляют в специальных отварах, чтобы воин не спёкся в них на солнце.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2029-page-00001.jpg"
    },
    {
        "name": "Посвященный Дзара",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Степи",
        "class": "Тоа-Дан",
        "stats": {
            "lifeCount": 9,
            "walkCount": "2",
            "simpleHit": "1-1-2"
        },
        "abilities": "⚡️. |При перемещении на соседнюю клетку получает +1 к дальности разряда до конца хода.|⤵️: Разряд на 2-3-4, дальность 1.",
        "rarity": "Частая",
        "index": 24,
        "description": "Покрытый ожогами старец разогнался и бросил огненный шар размером с него самого.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2024-page-00001.jpg"
    },
    {
        "name": "Пустотник",
        "cost": 4,
        "elite": false,
        "uniqueness": true,
        "element": "Степи",
        "class": "Тоа-Дан",
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "Х⚪️⤵️ : Заклинание «щит света» — другое существо получает защиту от всех немагических атак на Х ходов противника. Не может иметь более 3 ⚪️ и получать ⚪️ от других существ.|⤵️: Разряд на 1.",
        "rarity": "Частая",
        "index": 6,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%206-page-00001.jpg"
    },
    {
        "name": "Пустынный кондор",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "Полет",
            "simpleHit": "2-3-3"
        },
        "abilities": "⚪️⤵️: Воздействие «пикирование» — переместить нелетающее существо противника на соседнюю клетку; потерять полёт, получить 🐾1 и переместиться на клетку, которую занимало это существо, при этом ранить его на 3-4-4 (1 раз за бой).",
        "rarity": "Необычная",
        "index": 14,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2014-page-00001.jpg"
    },
    {
        "name": "Риала",
        "cost": 4,
        "elite": true,
        "uniqueness": false,
        "element": "Степи",
        "class": "Аккениец",
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "🪓.|Получает 🎯 до конца вашего хода, если переместилась хотя бы на 2 клетки в одном и том же направлении в этот ход.|Получает ⚔️2 до конца вашего хода, если переместилась хотя бы на 2 клетки в разных направлениях в этот ход.",
        "rarity": "Частая",
        "index": 23,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2023-page-00001.jpg"
    },
    {
        "name": "Рубаки Холверта",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Степи",
        "class": "Аккениец",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "Строй: при 🗡 — открыть существо в строю с Рубаками Холверта; оно не может атаковать до конца хода (1 раз за ход).",
        "rarity": "Необычная",
        "index": 15,
        "description": "«Кто ел из моего котелка?!»",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2015-page-00001.jpg"
    },
    {
        "name": "Санкторум",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": "Аккениец",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "Защита от слабых 🗡.|Строй: +1 к слабому 🗡.",
        "rarity": "Частая",
        "index": 16,
        "description": "Прикрыться щитом способен любой, однако в руках настоящего мастера щит превращается в непробиваемую стену.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2016-page-00001.jpg"
    },
    {
        "name": "Скелос",
        "cost": 8,
        "elite": true,
        "uniqueness": false,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 13,
            "walkCount": "1",
            "simpleHit": "3-4-5"
        },
        "abilities": "🔮. ⚔️2.|-2 от направленных ударов.|Строй: Защита от атак летающих.|Пока в первом ряду противника нет его карт, получает +1 к 🗡 и может атаковать летающих 🗡.",
        "rarity": "Частая",
        "index": 33,
        "description": "Скелос — великий воин эпохи Битв Стихий, ныне ставший лишь одним из многих.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2033-page-00001.jpg"
    },
    {
        "name": "Смотритель стойла",
        "cost": 4,
        "elite": false,
        "uniqueness": true,
        "element": "Степи",
        "class": "Аккениец",
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "2-2-3"
        },
        "abilities": "В начале вашего хода может ранить себя или стоящее рядом существо на 1, при этом цель получает +1🐾  до конца вашего хода (воздействие «щелчок  хлыста»). При перемещении на соседнюю клетку получает ⚔️1 или +1 к Опыту в атаке до конца вашего хода.",
        "rarity": "Необычная",
        "index": 7,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%207-page-00001.jpg"
    },
    {
        "name": "Степной волколак",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "2",
            "simpleHit": "2-2-3"
        },
        "abilities": "🩸. ☯️1. ⚔️1.|Все 🗡 по Степному волколаку сводятся к слабым.|При гибели — особый удар на 2.",
        "rarity": "Необычная",
        "index": 8,
        "description": "Волколаки Великих степей... Вечно голодные, истекающие слюной злобные твари, охотящиеся стаями.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%208-page-00001.jpg"
    },
    {
        "name": "Хозяйка прайда",
        "cost": 4,
        "elite": false,
        "uniqueness": true,
        "element": "Степи",
        "class": "Тоа-Дан",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: Воздействие «песчаные когти» — ранить существо на 1, ваши существа получают +1 к броскам кубика при атаках по этому существу до конца хода.",
        "rarity": "Частая",
        "index": 9,
        "description": "Гонимый раскалённым ветром, песок пустыни Дзара хлещет подобно львиным когтям.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%209-page-00001.jpg"
    },
    {
        "name": "Хронос",
        "cost": 5,
        "elite": true,
        "uniqueness": true,
        "element": "Степи",
        "class": "Тоа-Дан",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "Защита от выстрелов.|⏳⚪️⤵️: Воздействие «возврат во времени» — излечить другое существо от ран, полученных в этот ход.|⚪️: Ваше существо получает ⚪️.",
        "rarity": "Редкая",
        "index": 25,
        "description": "«Твоё время вышло, унгар».",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2025-page-00001.jpg"
    },
    {
        "name": "Щитоносец",
        "cost": 7,
        "elite": false,
        "uniqueness": false,
        "element": "Степи",
        "class": "Аккениец",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "🛡2.|-1 от дальних атак.|Пока ваше степное существо стоит справа или слева от Щитоносца, оно получает -1 от дальних атак.|Строй: -1 от 🗡.",
        "rarity": "Необычная",
        "index": 19,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2019-page-00001.jpg"
    },
    {
        "name": "Айрин",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Горы",
        "class": "Линунг",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⚡️.|Когда существо с магической способностью, не стоявшее рядом с Айрин, перемещается на соседнюю с ней клетку — получить +1 к разряду до конца вашего хода (до 2 раз за ход).|⤵️: Разряд на 1.",
        "rarity": "Частая",
        "index": 41,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2041-page-00001.jpg"
    },
    {
        "name": "Аргвальд",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Горы",
        "class": "Йордлинг",
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "2-3-3"
        },
        "abilities": "Карты противника могут объявлять разряд только по Аргвальду, пока он стоит рядом с хотя бы одним существом противника (вне зависимости от дальности). При разряде по Аргвальду — он получает ⚪️.|⤵️: Магический удар на 2. +1 к магическому удару за каждую ⚪️ на Аргвальде, при магическом ударе — теряет все ⚪️.",
        "rarity": "Редкая",
        "index": 60,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2060-page-00001.jpg"
    },
    {
        "name": "Бешеный маг",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": "Линунг",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "⏳⤵️: Заклинание «магический трюк» — перенаправить 🗡 с карты на стоящее рядом с ней существо в вашем отряде.|⤵️: Разряд на 1, дальность 3.",
        "rarity": "Частая",
        "index": 38,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2038-page-00001.jpg"
    },
    {
        "name": "Борг",
        "cost": 4,
        "elite": true,
        "uniqueness": false,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "⚪️⤵️: Особый удар на 3. При особом ударе по закрытому существу оно не открывается в свой следующий ход (воздействие «оглушение»).",
        "rarity": "Необычная",
        "index": 55,
        "description": "Бычья сила и неприхотливость делают боргов с берегов Норна отличными наёмниками.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2055-page-00001.jpg"
    },
    {
        "name": "Владыка небес",
        "cost": 9,
        "elite": true,
        "uniqueness": true,
        "element": "Горы",
        "class": "Дракон",
        "stats": {
            "lifeCount": 14,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "📜.|Игнорирует Защиту от полета.|При ударе по существу — оно получает маркер «добычи».|+3 к 🗡 и безответный удар по существам с маркером «добычи».|⤵️: Получить полёт.",
        "rarity": "Ультраредкая",
        "index": 68,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2068-page-00001.jpg"
    },
    {
        "name": "Гном-басаарг",
        "cost": 7,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": "Гном",
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "⚔️1.|Строй: +1 к 🗡.|+1 к 🗡 и 🎯 по закрытым существам.|Если в свой ход Гном-басаарг может атаковать простым ударом закрытое существо противника, он обязан это сделать.",
        "rarity": "Необычная",
        "index": 53,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2053-page-00001.jpg"
    },
    {
        "name": "Гном-поджигатель",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": "Гном",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "В начале вашего хода воздействие «нестерпимый жар» — ранить существо противника напротив Гнома-поджигателя на 1 (+1 к воздействию, если это существо не двигалось в прошлый ход противника).",
        "rarity": "Частая",
        "index": 35,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2035-page-00001.jpg"
    },
    {
        "name": "Гномий король",
        "cost": 8,
        "elite": true,
        "uniqueness": true,
        "element": "Горы",
        "class": "Гном",
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "3-4-6"
        },
        "abilities": "🔮. ⚔️1.|Строй: -1 от немагических атак. Существа в строю с Гномьим королём получают +1 к удару.|⏳: Перенаправить дальнюю атаку с существа в вашем 2 или 3 ряду  (1 раз за ход для каждого существа) в существо, стоящее в строю с Гномьим Королем.",
        "rarity": "Ультраредкая",
        "index": 67,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2067-page-00001.jpg"
    },
    {
        "name": "Гобрах",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "2",
            "simpleHit": "4-4-5"
        },
        "abilities": "☯️3.|-2 от ударов по диагонали.",
        "rarity": "Необычная",
        "index": 64,
        "description": "«Назад! Его невозможно убить! Навалитесь со всех сторон, рубите все разом — в этом наш шанс...» (из Великой книги гномьего Исхода).",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2064-page-00001.jpg"
    },
    {
        "name": "Горный великан",
        "cost": 6,
        "elite": true,
        "uniqueness": false,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 17,
            "walkCount": "1",
            "simpleHit": "2-3-5"
        },
        "abilities": "🩸.|Строй: 🛡1.",
        "rarity": "Частая",
        "index": 61,
        "description": "Великий Хельмир, горную гряду пересекая, со всякой нечистью проворно расправлялся. Однако ж, повстречав на пике великана, укрыться поспешил в расщелине глубокой, великой силы справедливо опасаясь.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2061-page-00001.jpg"
    },
    {
        "name": "Гуль",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "1-2-3"
        },
        "abilities": "Трупоедство.|⤵️: ↗️ на 1.|⤵️: Добивание на 2.",
        "rarity": "Частая",
        "index": 39,
        "description": "Многие битвы в Халланских горах не имели ни победителей, ни побеждённых. Голодные гули съедали их всех...",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2039-page-00001.jpg"
    },
    {
        "name": "Знахарь племени",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": "Йордлинг",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "3⚪️⤵️: Возродить существо (в закрытом виде, 1 раз за бой).|Вальхалла: ранить ваше существо на 1, при этом оно получает ⚪️.|⤵️: Разряд на 1.",
        "rarity": "Частая",
        "index": 42,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2042-page-00001.jpg"
    },
    {
        "name": "Искатель тайн",
        "cost": 3,
        "elite": true,
        "uniqueness": false,
        "element": "Горы",
        "class": "Линунг",
        "stats": {
            "lifeCount": 5,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: Разряд на 1, дальность 3.|В начале вашего хода пророчество 1; если показанная карта 🔶, Искатель тайн может получить полёт и +1 к 🗡 до конца боя, при этом теряет все особенности.",
        "rarity": "Необычная",
        "index": 54,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2054-page-00001.jpg"
    },
    {
        "name": "Каменный голем",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "3-4-5"
        },
        "abilities": "Неповоротливость.|-2 от немагических атак.",
        "rarity": "Необычная",
        "index": 43,
        "description": "Плоти гор не страшны даже острейшие гномьи клинки.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2043-page-00001.jpg"
    },
    {
        "name": "Костедробитель",
        "cost": 6,
        "elite": true,
        "uniqueness": false,
        "element": "Горы",
        "class": "Йордлинг",
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "3-5-6"
        },
        "abilities": "⚔️1. 🛡1.|Вальхалла: ваше существо получает +1 к 🗡 до конца вашего хода.",
        "rarity": "Частая",
        "index": 62,
        "description": "Однажды монахи Тарга выкрали Рунный камень из пещер Ханеранга. Горные варвары пробились внутрь монастыря, дубинами проломив его толстые стены.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2062-page-00001.jpg"
    },
    {
        "name": "Криомант",
        "cost": 5,
        "elite": true,
        "uniqueness": true,
        "element": "Горы",
        "class": "Линунг",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⚪️⤵️: Воздействие «ледяной дождь» — в следующий ход противника он может перемещаться только 3-2-1 существами.|⤵️: Разряд на 1.2️⃣: Начинает бой с ⚪️.",
        "rarity": "Редкая",
        "index": 57,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2057-page-00001.jpg"
    },
    {
        "name": "Ледовый охотник",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": "Йордлинг",
        "stats": {
            "lifeCount": 7,
            "walkCount": "2",
            "simpleHit": "1-2-3"
        },
        "abilities": "⤵️: ↗️ на 2, при этом существо напротив Ледового охотника получает ⚔️1 или +1 к ⚔️ до конца вашего хода.|Вальхалла: ваше существо получает  ⚔️1 или +1 к ⚔️ до конца вашего хода.",
        "rarity": "Частая",
        "index": 45,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2045-page-00001.jpg"
    },
    {
        "name": "Ледовый страж",
        "cost": 7,
        "elite": true,
        "uniqueness": true,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "Защита от выстрелов. 🩸.|⏳⤵️: Заклинание «оковы льда» — закрыть существо, которое не передвигалось в этот ход.|⤵️: Излечиться на 3.",
        "rarity": "Ультраредкая",
        "index": 65,
        "description": "«Там, на перевалах скал Лант-Мора, вас ждет поистине холодный приём».",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2065-page-00001.jpg"
    },
    {
        "name": "Ледяной змей",
        "cost": 3,
        "elite": false,
        "uniqueness": true,
        "element": "Горы",
        "class": "Линунг",
        "stats": {
            "lifeCount": 6,
            "walkCount": "Полет",
            "simpleHit": "1-2-3"
        },
        "abilities": "При 🗡 — ваше существо, обладающее разрядом, магическим ударом или заклинанием, получает -1 от немагических атак до конца следующего хода противника (воздействие «каменная кожа»).",
        "rarity": "Частая",
        "index": 36,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2036-page-00001.jpg"
    },
    {
        "name": "Мастер топора",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": "Гном",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-3"
        },
        "abilities": "Броня 1.|Строй: в начале вашего хода Мастер топора получает ⚪️.|Х⚪️⤵️: Магический удар на 0-1-2, +1 к удару за каждую потраченную ⚪️.",
        "rarity": "Частая",
        "index": 46,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2046-page-00001.jpg"
    },
    {
        "name": "Молотобоец",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "2-3-3"
        },
        "abilities": "При 🗡 в свой ход может переместить атакованное существо на 1 клетку в направлении удара; если атакованный не может или не хочет быть перемещён — Молотобоец ранит его на 2 (воздействие «удар молота»).|⤵️: Получить 🎯.",
        "rarity": "Частая",
        "index": 58,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2058-page-00001.jpg"
    },
    {
        "name": "Мразень",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "⤵️: Метание «сосульки» на 1-2-2, дальность 3.|+1 к метанию по картам, обладающим ⚔️, 🛡 или Броней.",
        "rarity": "Частая",
        "index": 40,
        "description": "Огромная сосулька вылетела из бушующей метели и свалила всадника вместе с лошадью.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2040-page-00001.jpg"
    },
    {
        "name": "Ном",
        "cost": 4,
        "elite": true,
        "uniqueness": true,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "Полет",
            "simpleHit": "2-3-4"
        },
        "abilities": "🎯 по картам с метанием. При гибели ранить нелетающее существо противника на 3 (воздействие «штопор»).",
        "rarity": "Редкая",
        "index": 56,
        "description": "Номы упрямы и мстительны и даже в предсмертной агонии успевают нанести последний удар.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2056-page-00001.jpg"
    },
    {
        "name": "Оборотень",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Горы",
        "class": "Йордлинг",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "До начала вашего хода Оборотень получает либо ☯️2, либо +2 к 🗡 и +1 к 🐾 (до конца хода противника).|Вальхалла: излечить вашего йордлинга на 1.",
        "rarity": "Редкая",
        "index": 59,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2059-page-00001.jpg"
    },
    {
        "name": "Овражный гном",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": "Гном",
        "stats": {
            "lifeCount": 6,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "🎯.|При 🗡 по открытому существу — воздействие «адское зловоние» — это существо должно закрыться либо получить 2 раны (по выбору атакованного).|+1 к �� по закрытым существам.",
        "rarity": "Частая",
        "index": 37,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2037-page-00001.jpg"
    },
    {
        "name": "Повелитель молний",
        "cost": 7,
        "elite": true,
        "uniqueness": true,
        "element": "Горы",
        "class": "Линунг",
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "🔮.|⤵️: Получить ⚪️.|⤵️: Разряд на 2. +3 к разряду за каждую ⚪️ на Повелителе молний. При разряде — теряет одну ⚪️. Не может иметь более 3⚪️. Игнорирует особенности, обязывающие выбирать целью разряда какую-либо карту.",
        "rarity": "Редкая",
        "index": 66,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2066-page-00001.jpg"
    },
    {
        "name": "Призывающая бурю",
        "cost": 6,
        "elite": false,
        "uniqueness": true,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "⤵️: Заклинание «мороз, мгла и ливень» — выбрать ряд половины поля боя противника; до конца хода противника сводит каждую атаку рядового существа противника к 1, пока оно стоит в выбранном ряду (1 раз за бой для каждого ряда).|⤵️: Разряд на 1-2-2, дальность 4.",
        "rarity": "Необычная",
        "index": 51,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2051-page-00001.jpg"
    },
    {
        "name": "Рагнар",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Горы",
        "class": "Йордлинг",
        "stats": {
            "lifeCount": 10,
            "walkCount": "2",
            "simpleHit": "2-3-5"
        },
        "abilities": "🪓. ⚔️1.|Первая за ход способность Вальхаллы вашей карты срабатывает дважды.|Вальхалла: первый за ход 🗡 вашего существа становится безответным.",
        "rarity": "Редкая",
        "index": 63,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2063-page-00001.jpg"
    },
    {
        "name": "Ртунх",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 9,
            "walkCount": "Полет",
            "simpleHit": "1-2-2"
        },
        "abilities": "🛡1.|-1 от дальних атак.|+1 к 🗡 по болотным.|Может выступать защитником любому вашему нелетающему существу.",
        "rarity": "Частая",
        "index": 47,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2047-page-00001.jpg"
    },
    {
        "name": "Смотритель горнила",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": "Гном",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-2-2"
        },
        "abilities": "Строй: Броня 2 (пока в строю с элитным существом).|Строй: 🛡2 (пока в строю с рядовым существом).",
        "rarity": "Частая",
        "index": 48,
        "description": "Самоцветы, вправленные в их броню, напитаны магией древних.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2048-page-00001.jpg"
    },
    {
        "name": "Страж чертогов",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": "Гном",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "2-3-3"
        },
        "abilities": "Броня 1.|Строй: Может объявлять 🗡 с дальностью 2.|Пока стоит в строю с хотя бы двумя существами, имеет 🎯.",
        "rarity": "Частая",
        "index": 44,
        "description": "Эффективность длинных копий в узких подгорных туннелях нельзя переоценивать...",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2044-page-00001.jpg"
    },
    {
        "name": "Тан Ханеранга",
        "cost": 6,
        "elite": false,
        "uniqueness": true,
        "element": "Горы",
        "class": "Гном",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "Броня 1.|Строй: -1 от магических ударов и разрядов.|При гибели вашего существа со строем в ход противника — существа, которые стояли с ним в строю, получают +2 к следующему 🗡.",
        "rarity": "Необычная",
        "index": 52,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2052-page-00001.jpg"
    },
    {
        "name": "Хранитель гор",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 13,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "🩸.|+2 к 🗡 по болотным.",
        "rarity": "Частая",
        "index": 50,
        "description": "Дальние родственники троллей, хранители гор слывут чуть ли не самыми безобидными и миролюбивыми существами на Лааре, приходя в ярость лишь при виде своих болотных собратьев.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2050-page-00001.jpg"
    },
    {
        "name": "Центурион",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Горы",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "Защита от атак летающих.⤵️: ↗️ на 1.|⚪️⤵️: Воздействие «таран» — получить Х ран, при этом ранить на X-1 стоящее напротив существо противника.",
        "rarity": "Необычная",
        "index": 49,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2049-page-00001.jpg"
    },
    {
        "name": "Атекар",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Дитя Кронга",
        "stats": {
            "lifeCount": 6,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "☯️1.|⤵️: Метание «шишки» на 0-1-2, дальность 3. +1 к метанию, если напротив Атекара стоит ваше существо без ран.",
        "rarity": "Частая",
        "index": 69,
        "description": "Серебристые шкурки атекаров ценятся среди модников Холверта, но любой знающий егерь скажет, что добыть такую — задачка не из лёгких.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2069-page-00001.jpg"
    },
    {
        "name": "Бегущая по кронам",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Эльф",
        "stats": {
            "lifeCount": 9,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "⤵️: Выстрел на 1-2-2.|В начале хода, если стоит в вашем первом ряду, получает +1 к выстрелам до конца хода.|В начале хода, если стоит в вашем третьем ряду, получает 🎯 до конца хода.",
        "rarity": "Необычная",
        "index": 79,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2079-page-00001.jpg"
    },
    {
        "name": "Бьёрн",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Страж леса",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "🔮. 🛡1.|Когда Бьёрн становится защитником — излечить на 2 существо, которому он выступает защитником.",
        "rarity": "Частая",
        "index": 80,
        "description": "Бьёрны — мрачное племя холодных лесов севера Лаара. Эти суровые воины славятся и отвагой, и умением врачевать.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2080-page-00001.jpg"
    },
    {
        "name": "Вожак сатиров",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Дитя Кронга ",
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "📜.|-1 от атак летающих.|Пока не имеет ран, получает «Если должен излечиться на X — вместо этого может ранить стоящее рядом существо на X (до 3 раз за ход)».",
        "rarity": "Необычная",
        "index": 81,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2081-page-00001.jpg"
    },
    {
        "name": "Грызь",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 6,
            "walkCount": "1",
            "simpleHit": "4-4-5"
        },
        "abilities": "🔮. Защита от выстрелов.|Прыжок, дальность 4.|⤵️: ↗️ на 1.|⤵️: Получить 🎯 и Защиту от атак летающих.",
        "rarity": "Необычная",
        "index": 89,
        "description": "Грызь хоть и мал, но дюже злобен.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2089-page-00001.jpg"
    },
    {
        "name": "Дверг",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "⤵️: Воздействие «дух мухомора» — выбранное существо до конца хода получает: «⤵️: Магический удар той же величины, что и 🗡 этого существа и +1 к этому удару (1 раз за ход)».|2️⃣: Начинает бой с 3 дополнительными жизнями.",
        "rarity": "Ультраредкая",
        "index": 0,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2090-page-00001.jpg"
    },
    {
        "name": "Дикий целитель",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": "Дитя Кронга",
        "stats": {
            "lifeCount": 10,
            "walkCount": "2",
            "simpleHit": "2-2-4"
        },
        "abilities": "Получает +1 к 🗡 и ⚔️1, пока рядом с Диким целителем стоят хотя бы три ваших существа без ран. При перемещении может излечить соседнее существо на 1.",
        "rarity": "Необычная",
        "index": 91,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2091-page-00001.jpg"
    },
    {
        "name": "Дракс",
        "cost": 3,
        "elite": false,
        "uniqueness": true,
        "element": "Леса",
        "class": "Дракон",
        "stats": {
            "lifeCount": 5,
            "walkCount": "Полет",
            "simpleHit": "1-1-2"
        },
        "abilities": "🎯.|+1 к 🗡 по картам, обладающим разрядом, магическим ударом или заклинанием.",
        "rarity": "Частая",
        "index": 70,
        "description": "Величайшие колдуны хмурят брови и крепче сжимают свои посохи при одном лишь упоминании о драксах, чьей излюбленной пищей является магия.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2070-page-00001.jpg"
    },
    {
        "name": "Друид",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Страж леса",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": null,
        "rarity": "Частая",
        "index": 73,
        "description": "🩸.|⤵️: Воздействие «дыхание леса» — излечить существо на 2 и снять с него отравление.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2073-page-00001.jpg"
    },
    {
        "name": "Ётун",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 14,
            "walkCount": "2",
            "simpleHit": "3-4-5"
        },
        "abilities": "🔮. ⚔️1.|Игнорирует особенности атакованного существа.",
        "rarity": "Редкая",
        "index": 98,
        "description": "Что значат жалкая магия и ухищрения созданий Новой эры для того, кто помнит само рождение этого мира?",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2098-page-00001.jpg"
    },
    {
        "name": "Камнедрев",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "☯️1. Неповоротливость.|В конце вашего хода может получить ⚪️, если не перемещался в этот ход.|+Х к ��, где Х — количество ⚪️ на Камнедреве. При движении Камнедрев теряет все ⚪️.",
        "rarity": "Частая",
        "index": 84,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2084-page-00001.jpg"
    },
    {
        "name": "Келе",
        "cost": 9,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": "Дитя Кронга",
        "stats": {
            "lifeCount": 16,
            "walkCount": "1",
            "simpleHit": "3-4-5"
        },
        "abilities": "⤵️: Магический удар на 3-4-5.|При 🗡 может излечиться на 2, если после этого у Келе нет ран — не закрывается после этой атаки.",
        "rarity": "Ультраредкая",
        "index": 102,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20102-page-00001.jpg"
    },
    {
        "name": "Клаэр",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Дитя Кронга",
        "stats": {
            "lifeCount": 11,
            "walkCount": "2",
            "simpleHit": "1-2-4"
        },
        "abilities": "Защита от выстрелов.|Когда Клаэр становится защитником, она получает +2 к 🗡 и ⚔️1 до конца вашего следующего хода.",
        "rarity": "Частая",
        "index": 82,
        "description": "Самое сложное в приручении шестиглазого олучарра — дать зверю понять, что дрессировщик не является обедом.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2082-page-00001.jpg"
    },
    {
        "name": "Кобольд",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 11,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "Защита от выстрелов.|⤵️: ↗️ на 1.|При ударе Кобольд может излечиться на Х, где Х — величина среднего 🗡 существа напротив.",
        "rarity": "Частая",
        "index": 92,
        "description": "«Прочь из нашего леса, жалкий орк!»",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2092-page-00001.jpg"
    },
    {
        "name": "Король-жрец",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "2",
            "simpleHit": "1-2-3"
        },
        "abilities": "⚪️⤵️: Воздействие «потеря памяти» — существо теряет все особенности до тех пор, пока Король-жрец не покинет поле боя (1 раз за бой).|⤵️: Излечить существо на 2.",
        "rarity": "Редкая",
        "index": 94,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2094-page-00001.jpg"
    },
    {
        "name": "Корпит",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 6,
            "walkCount": "Полет",
            "simpleHit": "1-2-2"
        },
        "abilities": "🎯. Трупоедство.",
        "rarity": "Частая",
        "index": 74,
        "description": "Эти маленькие пожиратели падали вечно кружат над полем боя, надеясь на поживу.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2074-page-00001.jpg"
    },
    {
        "name": "Лёккен",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Страж леса",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "⚡️. ⚔️1.|Выступая защитником, не закрывается. Может выступать защитником любое число раз за ход.",
        "rarity": "Необычная",
        "index": 85,
        "description": "Вооружаясь неподъёмными дубинами, вырезанными из железного дерева, лёккены уверенно отбивали атаки болотных племён.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2085-page-00001.jpg"
    },
    {
        "name": "Лесной разбойник",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "Может двигаться по диагонали.|⚪️⤵️: Воздействие «украсть оружие» (1 раз за бой) — стоящее рядом существо противника получает -1 к 🗡, при этом Лесной разбойник получает +1 к 🗡.",
        "rarity": "Частая",
        "index": 75,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2075-page-00001.jpg"
    },
    {
        "name": "Леший",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "⤵️: Полностью излечиться.",
        "rarity": "Частая",
        "index": 71,
        "description": "Схватка с лешим один на один была похожа на фарс. Получив хотя бы царапину, эта тварь, хихикая, залезала на дерево и через пару минут была уже полностью здоровой.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2071-page-00001.jpg"
    },
    {
        "name": "Ловец душ",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Леса",
        "class": "Эльф",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "Защита от атак летающих.|При гибели существа получает ⚪️. Не может иметь более 5 ⚪️.|⤵️: Воздействие «частица души» — ранить двух или менее существ без ран на 1.|Х⚪️⤵️: Заклинание «предсмертный дар» — ранить существо противника на Х, при этом излечить ваше существо на Х.",
        "rarity": "Необычная",
        "index": 95,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2095-page-00001.jpg"
    },
    {
        "name": "Мира",
        "cost": 6,
        "elite": false,
        "uniqueness": true,
        "element": "Леса",
        "class": "Эльф",
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "-1 от дальних атак, пока не имеет ран.|⤵️: Выстрел на 1-2-3, при этом закройте атакованное существо, если оно получало раны от двух или более других выстрелов или метаний в этот ход.",
        "rarity": "Редкая",
        "index": 86,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2086-page-00001.jpg"
    },
    {
        "name": "Оури",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Дитя Кронга",
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "1-1-2"
        },
        "abilities": "⚡️.|При перемещении на клетку, рядом с которой стоит ваше существо стоимостью 7 или более, может объявить выстрел на 1, дальность 3.|⤵️: Излечить существо на 1.",
        "rarity": "Частая",
        "index": 76,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2076-page-00001.jpg"
    },
    {
        "name": "Очи Кронга",
        "cost": 5,
        "elite": true,
        "uniqueness": true,
        "element": "Леса",
        "class": "Страж леса",
        "stats": {
            "lifeCount": 8,
            "walkCount": "Полет",
            "simpleHit": "2-2-3"
        },
        "abilities": "🎯. 📜.|Когда другие лесные существа в вашем отряде выполняют удар, выстрел и излечение подряд в любой последовательности (перемещение не прерывает цепочку) — открыть Очи Кронга (до 2 раз за ход).",
        "rarity": "Ультраредкая",
        "index": 93,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2093-page-00001.jpg"
    },
    {
        "name": "Паук-пересмешник",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "Летающие существа противника могут объявлять атаку только по Пауку-пересмешнику.|⤵️: Воздействие «бросок сети», дальность 2 — нелетающее существо противника получает «сеть» на свой следующий ход (существо с «сетью» не может передвигаться и действовать; если оно атаковано, то эта атака блокируется, а «сеть» исчезает).",
        "rarity": "Частая",
        "index": 77,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2077-page-00001.jpg"
    },
    {
        "name": "Резчик идолов",
        "cost": 4,
        "elite": true,
        "uniqueness": true,
        "element": "Леса",
        "class": "Эльф",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "Карты противника могут объявлять выстрел и метание только по Резчику идолов, пока он стоит рядом с хотя бы одним существом противника (вне зависимости от дальности).",
        "rarity": "Частая",
        "index": 88,
        "description": "«Возьми этот изящный идол из тростника».",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2088-page-00001.jpg"
    },
    {
        "name": "Серк",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Дитя Кронга",
        "stats": {
            "lifeCount": 9,
            "walkCount": "2",
            "simpleHit": "2-2-3"
        },
        "abilities": "🪓.| Пока не имеет ран, получает «Если должен излечиться — вместо этого может открыться (1 раз за ход)».|-1 от атак существ с  🐾2 или больше.",
        "rarity": "Частая",
        "index": 83,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2083-page-00001.jpg"
    },
    {
        "name": "Серый альв",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "⤵️: Выстрел на 2-3-3.|⚪️⤵️: Выстрел «огненной стрелой» на 5 (игнорирует особенности атакованного существа).",
        "rarity": "Редкая",
        "index": 99,
        "description": "Наконечники стрел серых альвов из редкого огнистого железа прожигают навылет любой доспех.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2099-page-00001.jpg"
    },
    {
        "name": "Тергала",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Леса",
        "class": "Эльф",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: Заклинание «цветущие руны» — выберите ряд, в начале вашего следующего хода ранить Х существ противника на 1-2-2, где Х — количество ваших существ без ран в выбранном ряду.|⤵️: Разряд на 1-2-2.",
        "rarity": "Редкая",
        "index": 96,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2096-page-00001.jpg"
    },
    {
        "name": "Фагор",
        "cost": 7,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Страж леса",
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "3-3-5"
        },
        "abilities": "⚪️⤵️: Магический удар на Х, где Х — сумма слабых 🗡 ваших существ справа и слева от Фагора.",
        "rarity": "Необычная",
        "index": 87,
        "description": "Могучая магия топора Норна способна собрать мощь всех защитников леса воедино.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2087-page-00001.jpg"
    },
    {
        "name": "Фея леса",
        "cost": 3,
        "elite": false,
        "uniqueness": true,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 5,
            "walkCount": "Полет",
            "simpleHit": "1-1-1"
        },
        "abilities": "⤵️: Воздействие «волшебная пыльца» — излечить до трёх ваших лесных существ на 1.",
        "rarity": "Частая",
        "index": 72,
        "description": "Некоторые высшие друиды умеют выманивать фей из их тайных убежищ в лесной глуши.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2072-page-00001.jpg"
    },
    {
        "name": "Хобгоблин",
        "cost": 8,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 18,
            "walkCount": "1",
            "simpleHit": "3-4-5"
        },
        "abilities": "🎯. 🩸.|-2 от немагических атак существ стоимостью 3 или менее.",
        "rarity": "Частая",
        "index": 100,
        "description": "В незапамятные времена некоторые племена гоблинов были вынуждены покинуть родные болота и поселиться в негостеприимных лесах Кронга.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20100-page-00001.jpg"
    },
    {
        "name": "Циклоп",
        "cost": 8,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": null,
        "stats": {
            "lifeCount": 14,
            "walkCount": "2",
            "simpleHit": "4-5-6"
        },
        "abilities": "🎯. 🩸. 🔮. ☯️1.|Может объявлять  только по карте, стоящей напротив.|⤵️: Магический удар на 2.",
        "rarity": "Редкая",
        "index": 101,
        "description": "Если циклопу удалось тебя увидеть, единственное твоё спасение в бегстве, ибо страшен его удар.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20101-page-00001.jpg"
    },
    {
        "name": "Эльфийский воин",
        "cost": 6,
        "elite": true,
        "uniqueness": false,
        "element": "Леса",
        "class": "Эльф",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "⚔️1.|-1 от атак степных существ.|При ударе или при промахе в нападении — выстрел на 2.",
        "rarity": "Частая",
        "index": 97,
        "description": "Переняв чуждое им искусство ближнего боя, эльфы достигли в нём вершин мастерства.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2097-page-00001.jpg"
    },
    {
        "name": "Эриала",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Леса",
        "class": "Эльф",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "⤵️: Выстрел на 1. Может стрелять по стоящим рядом картам.|+1 к выстрелу по картам в 3-м ряду противника, если стоит в вашем 3-м ряду.|+1 к выстрелу по картам во 2-м ряду противника, если стоит в вашем 2-м ряду.|+1 к выстрелу по картам в 1-м ряду противника, если стоит в вашем 1-м ряду.",
        "rarity": "Необычная",
        "index": 78,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%2078-page-00001.jpg"
    },
    {
        "name": "Барака",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Нежить",
        "stats": {
            "lifeCount": 13,
            "walkCount": "1",
            "simpleHit": "3-4-4"
        },
        "abilities": "🛡1.|После нападения не закрывается.",
        "rarity": "Частая",
        "index": 165,
        "description": "Главную твердыню Тёмной стороны Лаара, замок-крепость Урангрунд, охраняли элитные воины тьмы. Их чудовищно изменённые заклинаниями некромантов замка тела не знали ни боли, ни усталости.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20165-page-00001.jpg"
    },
    {
        "name": "Вампир",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Слуа",
        "stats": {
            "lifeCount": 9,
            "walkCount": "2",
            "simpleHit": "1-2-3"
        },
        "abilities": "Безответный удар.|Вампиризм на Х-1, где Х — число ран, нанесённых Вампиром.",
        "rarity": "Частая",
        "index": 139,
        "description": "В существование вампиров многие не верят ровно до тех пор, пока не почувствуют, как им в шею вонзаются клыки.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20139-page-00001.jpg"
    },
    {
        "name": "Ведьма слуа",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Слуа",
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "2-2-3"
        },
        "abilities": "Вампиризм. Максимум 12 ❤️.|⤵️: Снимите Х дополнительных жизней с Ведьмы слуа, при этом — разряд на Х.",
        "rarity": "Частая",
        "index": 140,
        "description": "Ведьмы слуа испепеляют жертв тёмной энергией, которую черпают из их же крови.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20140-page-00001.jpg"
    },
    {
        "name": "Вестник мора",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Нежить",
        "stats": {
            "lifeCount": 5,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "🛡1.|Инкарнация 3.|При инкарнации — получает полёт.",
        "rarity": "Частая",
        "index": 137,
        "description": "Санкторум попытался сделать шаг назад, прикрывшись щитом, но пошатнулся и упал. Чёрные крылья самой смерти сомкнулись над ним.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20137-page-00001.jpg"
    },
    {
        "name": "Властелин хаоса",
        "cost": 9,
        "elite": true,
        "uniqueness": true,
        "element": "Тьма",
        "class": null,
        "stats": {
            "lifeCount": 14,
            "walkCount": "1",
            "simpleHit": "4-5-7"
        },
        "abilities": "Защита от выстрелов. 📜. ⚔️1. 🛡1.|Когда Властелин хаоса закрыт, он отражает 🗡 как открытая карта.|Защита от слабых 🗡.|⤵️: Излечиться на 2.",
        "rarity": "Ультраредкая",
        "index": 169,
        "description": "В его поступи звучит сама смерть.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20169-page-00001.jpg"
    },
    {
        "name": "Возница",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Демон",
        "stats": {
            "lifeCount": 10,
            "walkCount": "2",
            "simpleHit": "3-3-3"
        },
        "abilities": "⚔️1.|Возница может перемещаться между крайними клетками одного ряда как на рядом стоящую клетку. Возница может объявлять 🗡 с крайней клетки ряда по существу, стоящему на противоположной клетке ряда, как по рядом стоящему.",
        "rarity": "Частая",
        "index": 143,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20143-page-00001.jpg"
    },
    {
        "name": "Вурдалак",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Слуа",
        "stats": {
            "lifeCount": 13,
            "walkCount": "2",
            "simpleHit": "3-3-4"
        },
        "abilities": "⚔️1.|-1 от дальних атак.|Вампиризм. Максимум 15❤️ .",
        "rarity": "Необычная",
        "index": 166,
        "description": "Говорят, что вурдалаки не боятся солнца и могут охотиться при свете дня. Лишь священное пламя Сеггера способно причинить им вред.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20166-page-00001.jpg"
    },
    {
        "name": "Герольд мрака",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Демон",
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "2-2-2"
        },
        "abilities": "📜.|⤵️: Воздействие «диссонанс» — ранить на 1 выбранное существо и каждое стоящее рядом с ним существо противника с таким же значением слабого 🗡.",
        "rarity": "Необычная",
        "index": 144,
        "description": "Лишь отчаяние и безысходность звучат в звуках её горна.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20144-page-00001.jpg"
    },
    {
        "name": "Демон жадности",
        "cost": 9,
        "elite": true,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Демон",
        "stats": {
            "lifeCount": 16,
            "walkCount": "1",
            "simpleHit": "3-4-6"
        },
        "abilities": "⚡️.|В начале хода противника положите маркеры «врата» на три свободные клетки (сохраняются до конца хода противника). В конце хода противника обязан телепортироваться на любую свободную клетку с «вратами», при этом ранить всех стоящих рядом существ противника на 2; если не может переместиться — получить 3 раны.",
        "rarity": "Ультраредкая",
        "index": 170,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20170-page-00001.jpg"
    },
    {
        "name": "Демон зависти",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Демон",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "Телепортация.|+1 к ударам, пока стоит рядом с двумя существами противника со значением слабого 🗡3 или больше.|Получает «⤵️: Магический удар на 3», пока стоит рядом с двумя или более существами противника, обладающими разрядом, магическим ударом или заклинанием.",
        "rarity": "Необычная",
        "index": 145,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20145-page-00001.jpg"
    },
    {
        "name": "Драккарх",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Дракон",
        "stats": {
            "lifeCount": 9,
            "walkCount": "Полет",
            "simpleHit": "2-3-3"
        },
        "abilities": "🩸.|-1 от дальних атак.|+1 к 🗡 по летающим.|⤵️: Получить 🎯.",
        "rarity": "Необычная",
        "index": 159,
        "description": "Чёрное пламя драккархов нельзя потушить ни водой, ни магией.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20159-page-00001.jpg"
    },
    {
        "name": "Зомби",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Нежить",
        "stats": {
            "lifeCount": 11,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "🎯.|+Х к 🗡 (максимум +2), где Х — число других тёмных существ в вашем отряде.",
        "rarity": "Частая",
        "index": 151,
        "description": "Неуклюжие и медлительные зомби практически безвредны поодиночке, но перед ордой гниющих тел не устоит ни одна крепость.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20151-page-00001.jpg"
    },
    {
        "name": "Керсамская знать",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Слуа",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: Заклинание «буря крови» — получить дополнительную ❤️, затем ранить выбранное существо на Х, где Х — количество ваших карт, у которых количество текущих ❤️ больше начального значения ❤️ (максимум 3).",
        "rarity": "Необычная",
        "index": 146,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20146-page-00001.jpg"
    },
    {
        "name": "Лилит и Эйдерик",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Демон, Нежить",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "🪓.|В начале вашего хода положите верхнюю карту колоды на кладбище; если это демон — положите жетон инкарнации на вашу карту нежити на кладбище, если это нежить — ваши демоны получают +1 к сильному 🗡 и ⚔️1 или +1 к ⚔️ до конца хода.|⤵️: Разряд на 1, метание на 1 (по разным картам).",
        "rarity": "Ультраредкая",
        "index": 160,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20160-page-00001.jpg"
    },
    {
        "name": "Лунная баньши",
        "cost": 5,
        "elite": true,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Нежить",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "🔮.|⏳⤵️: Воздействие «крик Баньши» — уменьшить величину выбранного удара на 1, при этом получить ⚪️.|⚪️⤵️: Заклинание «ужас» — существо противника, которое не получало ран от атак в этот ход, получает -3 к ❤️ до конца хода.|2️⃣: Начинает бой с ⚪️.",
        "rarity": "Необычная",
        "index": 157,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20157-page-00001.jpg"
    },
    {
        "name": "Мерцающий змей",
        "cost": 7,
        "elite": true,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Дракон",
        "stats": {
            "lifeCount": 13,
            "walkCount": "Полет",
            "simpleHit": "2-2-3"
        },
        "abilities": "⚔️1.|Карты противника могут объявлять выстрел и метание только по Мерцающему змею (вне зависимости от дальности).",
        "rarity": "Редкая",
        "index": 167,
        "description": "Тхель-Вэнн прицелился и трижды выстрелил в порождение тьмы. К его удивлению, все стрелы ушли в небо.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20167-page-00001.jpg"
    },
    {
        "name": "Метаморф",
        "cost": 4,
        "elite": true,
        "uniqueness": false,
        "element": "Тьма",
        "class": null,
        "stats": {
            "lifeCount": 9,
            "walkCount": "2",
            "simpleHit": "0-0-0"
        },
        "abilities": "🎯.|+Х к 🗡, где Х — значение 🗡 атакованного существа (без учёта модификаторов).",
        "rarity": "Частая",
        "index": 156,
        "description": "Когда метаморф осваивает очередную личину, коллекция на его посохе пополняется новой фигуркой.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20156-page-00001.jpg"
    },
    {
        "name": "Моровой всадник",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Нежить",
        "stats": {
            "lifeCount": 7,
            "walkCount": "2",
            "simpleHit": "2-3-3"
        },
        "abilities": "Броня 1.|Инкарнация 3.|Инкарнирует в открытом виде, при этом получает  ⚔️2 и +2 к 🗡 до конца хода.",
        "rarity": "Частая",
        "index": 141,
        "description": "Сырая земля разверзлась, и из неё выбрался мёртвый всадник в ржавой, покрытой плесенью броне.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20141-page-00001.jpg"
    },
    {
        "name": "Мрачная дворянка",
        "cost": 7,
        "elite": false,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Слуа",
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "2-3-5"
        },
        "abilities": "⚡️. Броня 1.|Вампиризм. Максимум 12 ❤️.|Пока у Мрачной дворянки больше 8 ❤️ — может блокировать первое за ход излечение карты противника.|Пока у Мрачной дворянки меньше 8 ❤️ — может удвоить первое за ход излечение вашей карты.",
        "rarity": "Редкая",
        "index": 154,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20154-page-00001.jpg"
    },
    {
        "name": "Огненный имп",
        "cost": 3,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Демон",
        "stats": {
            "lifeCount": 5,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "⤵️: Метание «лавы» на 1, дальность 4.|При телепортации вашего существа на половину поля боя противника с соседней с Огненным импом клетки — Огненный имп получает +1 к следующему метанию (максимум +1) до конца вашего хода.",
        "rarity": "Частая",
        "index": 138,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20138-page-00001.jpg"
    },
    {
        "name": "Пещерник",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "2-2-3"
        },
        "abilities": "Защита от атак летающих.|⤵️: ↗️ на 2.|⤵️: Излечиться на 3.",
        "rarity": "Частая",
        "index": 152,
        "description": "Храбрый унгар, будь осторожен, проходя мимо тёмных расщелин в пещерах рунных кристаллов. Трезубцы пещерников разят в спину без промаха.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20152-page-00001.jpg"
    },
    {
        "name": "Повелитель бездны",
        "cost": 8,
        "elite": true,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Демон",
        "stats": {
            "lifeCount": 15,
            "walkCount": "1",
            "simpleHit": "4-5-6"
        },
        "abilities": "📜.|При гибели существа противника или инкарнации вашего существа — следующий бросок кубика Повелителя бездны равен 6.|При перемещении на соседнюю клетку — ранить на 1 всех стоящих рядом с этой клеткой существ стоимостью 4 или менее.",
        "rarity": "Частая",
        "index": 168,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20168-page-00001.jpg"
    },
    {
        "name": "Повелитель мёртвых",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Тьма",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "При инкарнации вашего существа Повелитель мёртвых может открыться.|При инкарнации вашего существа оно получает +1 к 🐾 до конца вашего следующего хода.|⏳⤵️: Метание «кости» на 1, дальность 4.",
        "rarity": "Необычная",
        "index": 147,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20147-page-00001.jpg"
    },
    {
        "name": "Поганище",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Нежить",
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "3-4-5"
        },
        "abilities": "Инкарнация 3. Неповоротливость.|При получении жетона инкарнации — ранить Х карт на 1, где Х — число жетонов инкарнации на Поганище (воздействие «могильная хватка»).",
        "rarity": "Частая",
        "index": 164,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20164-page-00001.jpg"
    },
    {
        "name": "Рогатый демон",
        "cost": 7,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Демон",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "Защита от выстрелов. 🩸. Защита от атак летающих.|Телепортация.|Вампиризм. Максимум 12 ❤️.",
        "rarity": "Необычная",
        "index": 155,
        "description": "Умирая, воин пытался понять, каким образом демон вдруг оказался у него за спиной...",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20155-page-00001.jpg"
    },
    {
        "name": "Сайкорон",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Демон",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "⤵️: Магический удар на 2-3-4.|При дальней атаке по существу, стоящему рядом с Сайкороном — он может телепортироваться на свободную клетку рядом с атаковавшим (1 раз за бой).",
        "rarity": "Частая",
        "index": 153,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20153-page-00001.jpg"
    },
    {
        "name": "Скелетный червь",
        "cost": 6,
        "elite": true,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Нежить",
        "stats": {
            "lifeCount": 10,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "Инкарнация 4. При попадании на кладбище — выбранная клетка получает маркер «дрожь» (один раз за бой). В начале хода противника, если Скелетный червь на кладбище — может переместить «дрожь» на 1 клетку. Инкарнирует только на клетке с «дрожью», в открытом виде (если клетка занята, то уничтожив все карты на ней), при этом убрать эту «дрожь»; ранить все стоящие рядом карты на 1.",
        "rarity": "Редкая",
        "index": 161,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20161-page-00001.jpg"
    },
    {
        "name": "Суккуб-истязатель",
        "cost": 4,
        "elite": false,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Демон",
        "stats": {
            "lifeCount": 7,
            "walkCount": "2",
            "simpleHit": "1-2-3"
        },
        "abilities": "⤵️: Разряд на 1. +3 к разряду, если в каждом ряду поля боя есть ваше существо.",
        "rarity": "Частая",
        "index": 142,
        "description": "Горе унгару, попавшему в застенки крепости Ригорн. Тюремщицы-суккубы, хозяйничающие там, не успокоятся, пока не выведают все секреты своих жертв.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20142-page-00001.jpg"
    },
    {
        "name": "Сшиватель плоти",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Тьма",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-2"
        },
        "abilities": "3⚪️⤵️: Изгнать существо с вашего кладбища, при этом возродить ваше нелетающее существо, оно теряет особенности и получает +Х к 🗡 и +Y к ❤️, где Х — значение слабого 🗡, а Y — значение ❤️ изгнанного существа (1 раз за бой).|⤵️: Излечить другое тёмное существо на 1, при этом получить ⚪️.",
        "rarity": "Редкая",
        "index": 148,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20148-page-00001.jpg"
    },
    {
        "name": "Талион",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": "Нежить",
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "2-3-5"
        },
        "abilities": "Броня 1. ⚔️1.|Инкарнация 4.|При сильном 🗡 — положите жетон инкарнации на существо на вашем кладбище.",
        "rarity": "Частая",
        "index": 149,
        "description": "«Аланиэль, моя госпожа, пусть в жизни вместе быть нам не пришлось, мы будем вечно вместе после смерти».",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20149-page-00001.jpg"
    },
    {
        "name": "Тварь",
        "cost": 6,
        "elite": true,
        "uniqueness": false,
        "element": "Тьма",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "Защита от выстрелов.|Трупоедство.|⤵️: Положить маркер «удушения» на стоящее рядом рядовое существо (существо с одним маркером не может передвигаться, с двумя — также не может атаковать, с тремя — уничтожается Тварью;  удушаемое существо теряет маркеры, если рядом с ним нет Тварей противника).",
        "rarity": "Редкая",
        "index": 162,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20162-page-00001.jpg"
    },
    {
        "name": "Уордак",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Тьма",
        "class": null,
        "stats": {
            "lifeCount": 12,
            "walkCount": "2",
            "simpleHit": "2-3-0"
        },
        "abilities": "⚔️1.|Трупоедство.|+Х к сильному 🗡, где Х — половина текущих ❤️ атакованного существа (при нечётном количестве текущих ❤️ округлять их в меньшую сторону).",
        "rarity": "Частая",
        "index": 158,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20158-page-00001.jpg"
    },
    {
        "name": "Харон",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Тьма",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "3⚪️⤵️: Заклинание «последний путь» — уничтожить Харона и выбранное существо.|⤵️: Разряд на 1.",
        "rarity": "Частая",
        "index": 150,
        "description": "Никто не знает наверняка, куда увозит души павших его лодка, но, с другой стороны, никто и не стремится узнавать.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20150-page-00001.jpg"
    },
    {
        "name": "Хозяин склепа",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Тьма",
        "class": "Нежить",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "При гибели нелетающего существа — получает ⚪️. Не может иметь более 3⚪️.|⤵️: Метание «черепа» на 1, дальность 5. +2 к метанию за каждую ⚪️ на Хозяине склепа. При метании — теряет все ⚪️.",
        "rarity": "Редкая",
        "index": 163,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Berserk_VS_all_card%20163-page-00001.jpg"
    },
    {
        "name": "Алвалинд",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": "Инквизитор",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "При промахе вашего существа в ваш ход — получить ⚪️.|Когда получает третью ⚪️ — потерять все ⚪️, при этом получить 2 раны (воздействие «всё пропало»).|В конце вашего хода — разряд на 1 (+2 к разряду за каждую ⚪️), при этом теряет все ⚪️.",
        "rarity": "Редкая",
        "index": 178,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(178).jpg"
    },
    {
        "name": "Арацент",
        "cost": 6,
        "elite": true,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 12,
            "walkCount": "2",
            "simpleHit": "2-2-3"
        },
        "abilities": "🩸. ⚔️1.|При слабом 🗡 — атакованный получает отравление на 1.|При среднем или сильном 🗡 — атакованный получает отравление на 2.",
        "rarity": "Необычная",
        "index": 193,
        "description": "Не кровь, но яд, сильней которого нет на земле, течёт в их жилах.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(193).jpg"
    },
    {
        "name": "Аристократка",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: ↗️ на 1.|В начале боя — воздействие «интриги»:|1️⃣: Два выбранных существа получают отравление на 1.|2️⃣: Закройте две карты противника, они не открываются в начале первого хода своего владельца.",
        "rarity": "Необычная",
        "index": 194,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(194).jpg"
    },
    {
        "name": "Ассасин",
        "cost": 5,
        "elite": true,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": "Койар",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "Прыжок, дальность 3.|⤵️: ↗️ на 1.|⤵️: Добивание на 4.",
        "rarity": "Редкая",
        "index": 191,
        "description": "Ассасины ордена Койаров не признают честного боя... Многие великие воины Лаара пали от их предательских ударов.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(191).jpg"
    },
    {
        "name": "Берсерк",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "3-4-5"
        },
        "abilities": "🎯. 🩸. 📜. ⚔️1.|⤵️: ↗️ на 1.|Может нападать ударом два раза за ход, только подряд и по разным картам, после первого удара не закрывается.",
        "rarity": "Редкая",
        "index": 195,
        "description": "Когда стрела вонзилась в плечо, берсерк взревел и поднял топор — он не почувствовал боли, лишь желание убивать.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(195).jpg"
    },
    {
        "name": "Варлок",
        "cost": 7,
        "elite": true,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "-1 от дальних атак.|⤵️: Заклинание «пламя бездны» — ранить на 2 каждое существо противника, обладающее выстрелом, метанием или разрядом.|⚪️⤵️: Заклинание «дверь измерений» — переместить существо на любую незанятую клетку поля боя.",
        "rarity": "Редкая",
        "index": 198,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(198).jpg"
    },
    {
        "name": "Ведающий запасами",
        "cost": 4,
        "elite": false,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": "Пират",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "При наборе отряда, если в вашем отряде есть карты стоимостью 3, 4, 5, 6, 7 и 8, вы можете взять Ведающего запасами в отряд бесплатно.",
        "rarity": "Необычная",
        "index": 172,
        "description": "«Кра-а, капитан! Этот мор-р-ряк жульничал!»",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(172).jpg"
    },
    {
        "name": "Ведунья Ордена",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": "Инквизитор",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "Защита от выстрелов.|В конце хода противника вы можете посмотреть 3 верхние карты вашей колоды, затем положить их на верх или в низ вашей колоды в любом порядке, не перемешивая колоду.|⤵️: Разряд на 1, дальность 4.",
        "rarity": "Частая",
        "index": 173,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(173).jpg"
    },
    {
        "name": "Взрывная Мэри",
        "cost": 4,
        "elite": false,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": "Пират",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "⏳⤵️: Воздействие «чёрная метка» — когда бросок кубика существа равен 1 — ранить его на 2.|⏳⤵️: Воздействие «пиратская удаль» — ранить существо противника на 1.",
        "rarity": "Частая",
        "index": 174,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(174).jpg"
    },
    {
        "name": "Воин храма",
        "cost": 8,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": "Инквизитор",
        "stats": {
            "lifeCount": 13,
            "walkCount": "2",
            "simpleHit": "2-4-6"
        },
        "abilities": "Когда Воин храма сражается, бросьте кубик два раза и выберите один из результатов бросков.|Если Воин храма атакован дальней атакой — бросьте кубик; если выпало 5 или 6 — эта атака блокируется.",
        "rarity": "Частая",
        "index": 189,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(189).jpg"
    },
    {
        "name": "Волот",
        "cost": 9,
        "elite": true,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 24,
            "walkCount": "1",
            "simpleHit": "5-6-7"
        },
        "abilities": "⚡️. 🩸.|Неповоротливость.|Противник может перенаправить 🗡 Волота на любое своё существо, стоящее рядом с Волотом.",
        "rarity": "Ультраредкая",
        "index": 200,
        "description": "«Вот сейчас доем эту ножку и пойду искать Хигарта».",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(200).jpg"
    },
    {
        "name": "Вольный воитель",
        "cost": 2,
        "elite": true,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 3,
            "walkCount": "1",
            "simpleHit": "0-1-2"
        },
        "abilities": "⚔️1. Броня 1.|При наборе Вольного воителя в отряд вы можете заплатить за него на Х🔷 больше, при этом он начинает игру с +Х к 🗡 и +2Х к ❤️ (Х не может быть больше 4).",
        "rarity": "Необычная",
        "index": 190,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(190).jpg"
    },
    {
        "name": "Гермет",
        "cost": 6,
        "elite": true,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "В начале боя получает:|+1 к 🐾, если у вас есть степное существо;|Броня 1, если у вас есть горное существо;|☯️1, если у вас есть болотное существо;|⚔️1 и 🛡1, если у вас есть лесное существо;|+1 к среднему и сильному 🗡, если у вас есть тёмное существо.",
        "rarity": "Необычная",
        "index": 196,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(196).jpg"
    },
    {
        "name": "Головорез",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": "Пират",
        "stats": {
            "lifeCount": 12,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "Защита от выстрелов.|Пока рядом с Головорезом больше ваших существ, чем существ противника, он получает ⚔️1 и 🎯.",
        "rarity": "Частая",
        "index": 186,
        "description": "Опаснее бесчестного пирата может быть только команда бесчестных пиратов.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(186).jpg"
    },
    {
        "name": "Дозор Форрендора",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: Выстрел на 1. +1 к выстрелу по летающим существам.|При гибели летающего существа — Дозор Форрендора может получить полёт и +1 к 🗡 до конца боя (1 раз за бой).",
        "rarity": "Необычная",
        "index": 183,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(183).jpg"
    },
    {
        "name": "Жжраг",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "🎯.|Трупоедство.|При трупоедстве получает 3 дополнительные жизни.",
        "rarity": "Частая",
        "index": 179,
        "description": "Варвары степей верят, что ночь наступает из-за того, что солнце съедает огромный жжраг.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(179).jpg"
    },
    {
        "name": "Крондак",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": "Инквизитор",
        "stats": {
            "lifeCount": 7,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: Воздействие «разжигание костра» — положите маркер «костра» на свободную клетку (до конца хода противника), клетка с маркером «костра» считается занятой.|⤵️: Разряд на 1. +1 к разряду по летающим.",
        "rarity": "Частая",
        "index": 175,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(175).jpg"
    },
    {
        "name": "Лазутчица",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": "Пират",
        "stats": {
            "lifeCount": 10,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "🪓.|До набора отряда вы можете показать противнику Лазутчицу из своей раздачи, при этом посмотреть 2 случайные карты из раздачи противника; за каждую показанную 🔶 карту Лазутчица стоит на 1 🔷 меньше; вы обязаны взять её в отряд.",
        "rarity": "Частая",
        "index": 187,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(187).jpg"
    },
    {
        "name": "Линнет",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": "Ультраредкая",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "🔮.|-1 от дальних атак.|До набора отряда вы можете показать Линнет и существо стоимостью не больше 7🔶; возьмите Линнет и это существо в отряд за 🔷, это существо получает особенность «Погибает, когда ваша Линнет покидает поле боя».|⤵️: Разряд на 1-2-2.",
        "rarity": "Ультраредкая",
        "index": 180,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(180).jpg"
    },
    {
        "name": "Ловец удачи",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "1-2-3"
        },
        "abilities": "⤵️: ↗️ на 1.|⏳⤵️: Воздействие «удача» — +1 или -1 к броску кубика, или перебросить кубик.|В начале хода противника может открыться.",
        "rarity": "Частая",
        "index": 181,
        "description": "Не пытайтесь поймать Фортуну за её белый хвост.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(181).jpg"
    },
    {
        "name": "Мародёр",
        "cost": 3,
        "elite": false,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 5,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⤵️: ↗️ на 1.|При наборе Мародёра в отряд вы получаете 1🔶.",
        "rarity": "Частая",
        "index": 171,
        "description": "«Может, эти сапоги немного тесноваты, но гораздо крепче моих».",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(171).jpg"
    },
    {
        "name": "Матросы Аделаиды",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": "Пират",
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "2-2-3"
        },
        "abilities": "Прыжок, дальность 3.|Получает 🛡1 и -1 от слабых ��, пока стоит в центральном столбце.|Получает ⚔️1 и +1 к среднему и сильному 🗡, пока стоит в крайнем левом или правом столбце.",
        "rarity": "Частая",
        "index": 182,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(182).jpg"
    },
    {
        "name": "Наемник",
        "cost": 4,
        "elite": false,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "3-3-4"
        },
        "abilities": "🛡1.|Строй: -1 от выстрелов и метаний.",
        "rarity": "Ультраредкая",
        "index": 176,
        "description": "Говорят, что Архааль сумел добраться до затерянного среди торосов Йора племени таргов лишь благодаря безумной отваге небольшого отряда наёмников из вольных крепостей.",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(176).jpg"
    },
    {
        "name": "Отшельница",
        "cost": 5,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 9,
            "walkCount": "1",
            "simpleHit": "1-1-2"
        },
        "abilities": "⏳⤵️: Когда существо получает раны от удара — перераспределить эти раны на других ваших существ.|⤵️: Излечиться на 3.",
        "rarity": "Частая",
        "index": 184,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(184).jpg"
    },
    {
        "name": "Паладин Алламора",
        "cost": 6,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": "Эльф, Инквизитор",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-4"
        },
        "abilities": "Броня 1.|Строй: +1 к 🗡 по тёмным картам.|Ваши существа с выстрелом, метанием или разрядом в одном столбце с Паладином Алламора получают +1 к дальности.",
        "rarity": "Частая",
        "index": 188,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(188).jpg"
    },
    {
        "name": "Ревнитель Сеггера",
        "cost": 5,
        "elite": true,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": "Инквизитор",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-3"
        },
        "abilities": "При 🗡 выберите число, меньшее или равное Х, где Х — величина этого 🗡, при этом ваши существа справа и слева от Ревнителя Сеггера получают защиту от немагических атак такой величины до конца следующего хода противника.",
        "rarity": "Необычная",
        "index": 192,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(192).jpg"
    },
    {
        "name": "Следопыт",
        "cost": 4,
        "elite": false,
        "uniqueness": false,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "2",
            "simpleHit": "1-1-2"
        },
        "abilities": "После расстановки карт вскройте Следопыта — противник вскрывает карты своего первого ряда, а вы можете поменять расположение своих карт на вашей половине поля боя, не вскрывая их.|⤵️: Выстрел на 1.",
        "rarity": "Необычная",
        "index": 177,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(177).jpg"
    },
    {
        "name": "Тич",
        "cost": 7,
        "elite": true,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": "Пират",
        "stats": {
            "lifeCount": 12,
            "walkCount": "2",
            "simpleHit": "2-3-4"
        },
        "abilities": "🎯. ⚡️. ⚔️1.|При наборе Тича в отряд вы можете получить 2🔶, при этом в вашем отряде не может быть больше трёх стихийных карт.|При сильном 🗡 — ранить атакованное существо на величину слабого 🗡 стоящей сзади него карты (воздействие «коварный подкуп»).",
        "rarity": "Ультраредкая",
        "index": 199,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(199).jpg"
    },
    {
        "name": "Шакси",
        "cost": 5,
        "elite": false,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": null,
        "stats": {
            "lifeCount": 8,
            "walkCount": "1",
            "simpleHit": "2-3-3"
        },
        "abilities": "📜.|Прыжок, дальность 3. При прыжке бросьте кубик: если выпало 1 или 2 — ранить стоящее рядом существо на 2; если выпало 3 или 4 — излечить Шакси или стояшее рядом существо на 3; если выпало 5 или 6 — стоящее рядом существо получает ⚪️ (воздействие «удар копытцем»).",
        "rarity": "Редкая",
        "index": 185,
        "description": null,
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(185).jpg"
    },
    {
        "name": "Эорвал",
        "cost": 6,
        "elite": true,
        "uniqueness": true,
        "element": "Нейтральная",
        "class": "Дракон",
        "stats": {
            "lifeCount": 10,
            "walkCount": "1",
            "simpleHit": "2-3-5"
        },
        "abilities": "Эорвал получает +1 к 🗡, ⚔️1 и -1 от немагических атак, пока рядом с ним стоят существа минимум 4 разных классов.",
        "rarity": "Частая",
        "index": 197,
        "description": "«Сражайтесь, смертные! Ваша ненависть друг к другу питает меня!»",
        "set": "Война стихий",
        "image": "https://berserk.ru/image/data/00_Berserk/01_Война%20стихий/Card%20(197).jpg"
    }
]
const names = []

function importF() {
    Object.entries(c).forEach(c => {
        console.log(`"${c[0]}": cards.${generateName(c[0])},`)
        // names.push(generateName(c[0]))
    })

    // console.log(`export {${names.join(', ')}}`)
}

function generateName(name) {
    // const al = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    const card = data.find(card => card.name.toLowerCase() === name)
    if (card === undefined) return 'name'

    return `elw${card.index}`

    // let str = ''
    // for (let i = 0; i < 15; i++) {
    //     const index = !i ? Math.ceil(Math.random() * (al.length - 11)) : Math.ceil(Math.random() * (al.length - 1))
    //     str += al[index]
    // }

    // if (names.indexOf(str) === -1) {
    //     names.push(str)
    //     return str
    // }

    // return generateRandomName()

}
// console.log(data)
importF()