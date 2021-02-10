
export const findEmail = async (dbRef: any, email: string) => {
  const query = await dbRef
    .where('email', '==', email)
    .get()
    .then((snapshot: any) => {
      //snapshot.metadata.fromCache: true means no connection
      if(snapshot.metadata.fromCache) {
        throw new Error("No connection");
      }
      if (snapshot.empty) {
        return true
      } else {
        return false
      }
    })
    .catch((err: any) => {
      throw new Error(err)
    });
  return query
}

export const findPhone = async (dbRef: any, phone: string, profile: string) => {
  const query = await dbRef
    .where('phone', '==', phone)
    .where('profile', '==', profile)
    .get()
    .then((snapshot: any) => {
      if(snapshot.metadata.fromCache) {
        throw new Error("No connection");
      }
      if (snapshot.empty) {
        return true
      } else {
        return false
      }
    })
    .catch((err: any) => {
      throw new Error(err)
    });
    return query
}

export const findCity = async (dbRef: any, city: string) => {
  const query = await dbRef.where('city', '==', city).get()
    .then((snapshot: any) => {
      if(snapshot.metadata.fromCache) {
        throw new Error("No connection");
      }
      if (snapshot.empty) {
        return true;
      } else {
        return false
      }
    })
    .catch((err: any) => {
      throw new Error(err)
    });
    return query
}
