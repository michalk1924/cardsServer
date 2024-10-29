
const Cards = [
    {
        id: 0,
        text: "text 1",
        color: 'red',
    },
    {
        id: 1,
        text: "text 2",
        color: 'blue',
    },
    {
        id: 2,
        text: "text 3",
        color: 'green',
    },
    {
        id: 3,
        text: "text 4",
        color: 'yellow',
    }
]

let cardId = 4;

const getNextId = () => cardId++;

module.exports = {Cards, getNextId};