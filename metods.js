// 1=========================
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
for (let i = 0; i < friends.length; i++) { string += friends[i]; if (i < friends.length - 1) { string += ","; } }
// let string = friends.join(','); ------ через join
console.log(string);
// 2===========================================================================================
const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
]
// 2.3==========
const cardToRemove = cards.indexOf('Карточка-3');
cards.splice(cardToRemove, 1)
// 2.4===========
const cardToInsert = cards.splice(cards.length, 0, 'Карточка-6')
console.log(cards)











































// ===============================================================================================