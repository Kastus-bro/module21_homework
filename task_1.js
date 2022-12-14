/* Этап 1. Подготовка данных */
// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
    <list>
        <student>
            <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student2>
            <name2 lang2="ru">
            <first2>Петр</first2>
            <second2>Петров</second2>
            </name2>
            <age2>58</age2>
            <prof2>driver</prof2>
        </student2>
    </list>
`;

/* Этап 2. Получение данных */
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

// Получение данных из атрибутов
const langAttr = nameNode.getAttribute('lang');

const list2Node = xmlDOM.querySelector("list");
const student2Node = list2Node.querySelector("student2");
const name2Node = student2Node.querySelector("name2");
const first2Node = name2Node.querySelector("first2");
const second2Node = name2Node.querySelector("second2");
const age2Node = student2Node.querySelector("age2");
const prof2Node = student2Node.querySelector("prof2");

// Получение данных из атрибутов
const lang2Attr = name2Node.getAttribute('lang2');

/* Этап 3. Запись данных */
const list = {
    name: firstNode.textContent + " " + secondNode.textContent,
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: langAttr,
};

const list2 = {
    name: first2Node.textContent + " " + second2Node.textContent,
    age: age2Node.textContent,
    prof: prof2Node.textContent,
    lang: lang2Attr,
};

const data = JSON.stringify(list);
const data2 = JSON.stringify(list2);

// выводим в консоль
console.log(data);
console.log(data2);