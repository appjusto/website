import i18n, { ToCurrencyOptions } from 'i18n-js';
import IBGEUrl from '../services/ApiIBGE'
import Ufs from '../services/ufs'
import { FirebaseDocument, WithId } from '../types';

export const profileOptions = [
  { value: "consumers", label: "Consumidor"},
  { value: "couriers", label: "Entregador"},
  { value: "restaurants", label: "Restaurante"}
]

export const numbersDotCommaOnlyParser = (value: string) => value.replace(/[^.,0-9]/g, '');

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

export const unit = 'R$';
export const delimiter = '.';
export const separator = ',';

const removeOccurrences = (value: string, toRemove: string) => {
  const NewToRemove = toRemove.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
  const re = new RegExp(NewToRemove, 'g');
  return value.replace(re, '');
};

export const getRawValue = (value: string) => {
  if (value === '') return '0';
  let result = value;
  result = removeOccurrences(result, delimiter);
  result = removeOccurrences(result, separator);
  result = removeOccurrences(result, unit);
  return result;
};

const repeatZeroes = (times: number) => {
  let result = '';
  let i = 0;
  for (i = 0; i < times; i++) {
    result += '0';
  }
  return result;
};

export const formattedRawValue = (rawValue: string) => {
  let precision = 2;
  const minChars = '0'.length + precision;
  let result = rawValue;
  if (result.length < minChars) {
    const leftZeroesToAdd = minChars - result.length;
    result = `${repeatZeroes(leftZeroesToAdd)}${result}`;
  }
  let beforeSeparator = result.slice(0, result.length - precision);
  let afterSeparator = result.slice(result.length - precision);
  if (beforeSeparator.length > 3) {
    var chars = beforeSeparator.split('').reverse();
    let withDots = '';
    for (var i = chars.length - 1; i >= 0; i--) {
      let char = chars[i];
      let dot = i % 3 === 0 ? delimiter : '';
      withDots = `${withDots}${char}${dot}`;
    }
    withDots = withDots.substring(0, withDots.length - 1);
    beforeSeparator = withDots;
  }
  result = beforeSeparator + separator + afterSeparator;
  if (unit) {
    result = `${unit} ${result}`;
  }
  return result;
};

export const formatCurrency = (value: number, options: ToCurrencyOptions = {
  unit: 'R$ ',
  separator: ','
}) =>
  i18n.toCurrency(value / 100, options);

export const documentAs = <T extends object>(doc: FirebaseDocument): WithId<T> => ({
  ...(doc.data() as T),
  id: doc.id,
});

export const documentsAs = <T extends object>(docs: FirebaseDocument[]): WithId<T>[] =>
  docs.map((doc) => documentAs<T>(doc));

export const formatHour = (value: string | undefined) => {
  let formatedNumber = '';
  if (value) {
    let hours = value.slice(0, 2);
    let minutes = value.slice(2, 4);
    if (parseInt(hours, 10) > 23) {
      hours = '00';
    }
    if (parseInt(minutes, 10) > 59) {
      minutes = '00';
    }
    if (minutes === '') {
      formatedNumber = `${hours}`;
    } else if (minutes !== '') {
      formatedNumber = `${hours}:${minutes}`;
    }
  }
  return formatedNumber;
};
