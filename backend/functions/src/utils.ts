import { firestore } from 'firebase-admin';

export const emailExists = async (
  dbRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>, 
  email: string
  ) => {
    try {
      console.log('email', email)
      const query = await dbRef.where('email', '==', email).get();
      console.log('query', query.docs)
      return query.docs.length > 0;
    } catch (error) {
      throw new Error(error)
    }
};

export const phoneExists = async (
  dbRef: firestore.CollectionReference<firestore.DocumentData>, 
  phone: string, 
  profile: string
  ) => {
    try {
      const query = await dbRef
        .where('phone', '==', phone)
        .where('profile', '==', profile)
        .get()
      return query.docs.length > 0;
    } catch (error) {
      throw new Error(error)
    }
}

export const cityExists = async (
  dbRef: firestore.CollectionReference<firestore.DocumentData>, 
  city: string
  ) => {
    try {
      const query = await dbRef.where('city', '==', city).get()
      return query.docs.length > 0;
    } catch (error) {
      throw new Error(error)
    }
}
