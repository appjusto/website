import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { cityExists, emailExists, phoneExists } from './utils';

admin.initializeApp();

const updateSummary = async (profile: string, city: string) => {
  const sumarryRef = admin.firestore().collection('summary').doc('data');
  const registrationsRef = admin.firestore().collection('registrations');
  await sumarryRef.update({
    [profile]: admin.firestore.FieldValue.increment(1),
  })
  const isRegistratedCity = await cityExists(registrationsRef, city);
  if(!isRegistratedCity) {
    await sumarryRef.update({
      cities: admin.firestore.FieldValue.increment(1),
    })
  }
  return null;
}

export const createRegistration = functions.https.onCall(async (data, context) => {
 const { profile, phone, city } = data;
 const registrationsRef = admin.firestore().collection('registrations');
 const createdOn = admin.firestore.FieldValue.serverTimestamp();
 try {
   const alreadyRegistrated = await phoneExists(registrationsRef, phone, profile);
   if(alreadyRegistrated) {
    return {status: false, message: 'CellIsNotNew', error: ''};
  }
  await updateSummary(profile, city);
  await registrationsRef.add({profile, phone, city, createdOn})
  return {status: true, message: '', error: ''};
 } catch (error) {
  return {status: false, message: 'Error', error: error};
 }
});

export const createIndication = functions.https.onCall(async (data, context) => {
  const { email } = data;
  const indicationsRef = admin.firestore().collection('indications');
  const createdOn = admin.firestore.FieldValue.serverTimestamp();
  try {
    const alreadyIndicated = await emailExists(indicationsRef, email);
    if(alreadyIndicated) {
     return {status: false, message: 'EmailIsNotNew', error: ''};
   }
   await indicationsRef.add({email, createdOn})
   return {status: true, message: '', error: ''};
  } catch (error) {
   return {status: false, message: 'Error', error};
  }
 });
