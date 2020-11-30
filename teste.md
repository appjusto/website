## Incrementar valor

const admin = require('firebase-admin');
// ...
const washingtonRef = db.collection('cities').doc('DC');

// Atomically increment the population of the city by 50.
const res = await washingtonRef.update({
population: admin.firestore.FieldValue.increment(50)
});

## Usar transações para registro + incremento no sumário

// Initialize document
let cityRef = db.collection('cities').doc('SF');
let setCity = cityRef.set({
name: 'San Francisco',
state: 'CA',
country: 'USA',
capital: false,
population: 860000
});

let transaction = db.runTransaction(t => {
return t.get(cityRef)
.then(doc => {
// Add one person to the city population.
// Note: this could be done without a transaction
// by updating the population using FieldValue.increment()
let newPopulation = doc.data().population + 1;
t.update(cityRef, {population: newPopulation});
});
}).then(result => {
console.log('Transaction success!');
}).catch(err => {
console.log('Transaction failure:', err);
});

## Get simples

let doc = db.collection('cities').doc('SF');

let observer = doc.onSnapshot(docSnapshot => {
console.log(`Received doc snapshot: ${docSnapshot}`);
// ...
}, err => {
console.log(`Encountered error: ${err}`);
});
