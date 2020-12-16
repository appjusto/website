import IBGEUrl from '../services/ApiIBGE'
import Ufs from '../services/ufs'

export const ufsList = Ufs.map(uf => uf.sigla)

export const getCities = async (uf: string) => {
  const response = await fetch(`${IBGEUrl}/${uf}/municipios`)
  const cities = await response.json()
  const citiesList = cities.map(city => city.nome)
  return citiesList
}

export const profileOptions = [
  { value: "consumers", label: "Consumidor"},
  { value: "couriers", label: "Entregador"},
  { value: "restaurants", label: "Restaurante"}
]

const binarySearch = (dim: string) =>
  function bin(start: number, end: number) {
    const guess = Math.floor((start + end) / 2);
    if (window.matchMedia(`(${dim}: ${guess}px)`).matches) {
      return guess;
    }
    return window.matchMedia(`(min-${dim}: ${guess}px)`).matches
      ? bin(guess, end)
      : bin(start, guess);
  };

export const getCorrectDimension = (dim: string, range = 2000) => {
  let prop = "inner" + dim.charAt(0).toUpperCase() + dim.slice(1);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (window.matchMedia(`(${dim}: ${window[prop]}px)`).matches) {
        res(window[prop]);
      }
      const start = window[prop] - range >= 0 ? window[prop] - range : 0;
      const end = window[prop] + range;
      res(binarySearch(dim)(start, end));
    }, 50);
  });
};

export const findEmail = (dbRef: any, email: string) => {
  const query = dbRef
    .where('email', '==', email)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        return true;
      } else {
        return false
      }
    })
    .catch(err => {
      console.log('Error getting documents', err)
      return false;
    });
    return query
}

export const findPhone = (dbRef: any, phone: string, profile: string) => {
  const query = dbRef
    .where('phone', '==', phone)
    .where('profile', '==', profile)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        return true;
      } else {
        return false
      }
    })
    .catch(err => {
      console.log('Error getting documents', err)
      return false;
    });
    return query
}

export const findCity = (dbRef: any, city: string) => {
  const query = dbRef.where('city', '==', city).get()
    .then(snapshot => {
      if (snapshot.empty) {
        return true;
      } else {
        return false
      }
    })
    .catch(err => {
      console.log('Error getting documents', err)
      return false;
    });
    return query
}
