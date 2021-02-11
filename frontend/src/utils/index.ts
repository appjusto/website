import IBGEUrl from '../services/ApiIBGE'
import Ufs from '../services/ufs'

export const profileOptions = [
  { value: "consumers", label: "Consumidor"},
  { value: "couriers", label: "Entregador"},
  { value: "restaurants", label: "Restaurante"}
]

export const removeAccents = (str: string) => {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
export const ufsList = Ufs.map(uf => uf.sigla)

export const getCities = async (uf: string) => {
  const response = await fetch(`${IBGEUrl}/${uf}/municipios`)
  const cities = await response.json()
  const citiesList = cities.map(city => city.nome)
  return citiesList
}

export const findEmail = async (dbRef: any, email: string) => {
  const query = await dbRef
    .where('email', '==', email)
    .get()
    .then(snapshot => {
      //snapshot.metadata.fromCache: true means no connection
      if(snapshot.metadata.fromCache) {
        throw new Error("No connection");
      }
      if (snapshot.empty) {
        return "not_found";
      } else {
        return "found"
      }
    })
    .catch((err) => {
      throw new Error(err)
    });
  return query
}

export const findPhone = async (dbRef: any, phone: string, profile: string) => {
  const query = await dbRef
    .where('phone', '==', phone)
    .where('profile', '==', profile)
    .get()
    .then(snapshot => {
      if(snapshot.metadata.fromCache) {
        throw new Error("No connection");
      }
      if (snapshot.empty) {
        return "not_found";
      } else {
        return "found"
      }
    })
    .catch((err) => {
      throw new Error(err)
    });
    return query
}

export const findCity = async (dbRef: any, city: string) => {
  const query = await dbRef.where('city', '==', city).get()
    .then(snapshot => {
      if(snapshot.metadata.fromCache) {
        throw new Error("No connection");
      }
      if (snapshot.empty) {
        return true;
      } else {
        return false
      }
    })
    .catch((err) => {
      throw new Error(err)
    });
    return query
}
