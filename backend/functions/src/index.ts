import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


admin.initializeApp();

const getTotal = (array: number[]) => {
  if(array?.length > 0) {
    return array.reduce((total: number, current: number) => total + current, 0)
  }
  return 0;
}

export const updateSummary = functions.firestore.document('registrations/{id}')
  .onWrite(async (change, context) => {
    const sumarryRef = admin.firestore().collection('summary').doc('data');
    const registrations = (await admin.firestore().collection('registrations').get()).docs;
    const consumers = getTotal(registrations?.map(doc => doc.data().profile === 'consumers' ? 1 : 0));
    const couriers = getTotal(registrations?.map(doc => doc.data().profile === 'couriers' ? 1 : 0));
    const restaurants = getTotal(registrations?.map(doc => doc.data().profile === 'restaurants' ? 1 : 0));
    const citiesArr = registrations?.map(doc => doc.data().city);
    const cities = citiesArr.filter((city: string, index: number) => citiesArr.indexOf(city) === index).length || 0;
    await sumarryRef.update({
      cities,
      consumers,
      couriers,
      restaurants
    })
  })
