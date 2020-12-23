import { rejects } from 'assert'
import { resolve } from 'path'
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

export const timeoutTest = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(true), 2000)
})

export const setFirestoreTimeout =
  (method: string, func: Function, [...args], timeout = 8000) =>
    new Promise((resolve, reject) => {
  try {
    if(method !== "find" && method !== "add") {
      throw new Error(
        `Unknown method "${method}". Valid methods are "find" and "add"`
      )
    }
    let success = null
    func.apply(null, args).then((result: string) => {
      console.log("func then")
      if(success === null) {
        console.log("func resolve")
        success = true
        if(method === "find") {
          resolve(result)
        } else {
          resolve(true)
        }
      }
      return
    })
    const timer = setTimeout(() => {
      console.log("setT")
      if(!success) {
        console.log("setT resolve")
        success = false
        if(method === "find") {
          resolve("error")
        }
        resolve(false)
      }
    }, timeout)
  } catch (error){
    console.log(error)
    reject(false)
  }
});
