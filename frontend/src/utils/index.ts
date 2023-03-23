import i18n, { ToCurrencyOptions } from "i18n-js";
import { FirebaseDocument, WithId } from "../types";

export const numbersDotCommaOnlyParser = (value: string) =>
  value.replace(/[^.,0-9]/g, "");

export const unit = "R$";
export const delimiter = ".";
export const separator = ",";

const removeOccurrences = (value: string, toRemove: string) => {
  const NewToRemove = toRemove.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  const re = new RegExp(NewToRemove, "g");
  return value.replace(re, "");
};

export const getRawValue = (value: string) => {
  if (value === "") return "0";
  let result = value;
  result = removeOccurrences(result, delimiter);
  result = removeOccurrences(result, separator);
  result = removeOccurrences(result, unit);
  return result;
};

const repeatZeroes = (times: number) => {
  let result = "";
  let i = 0;
  for (i = 0; i < times; i++) {
    result += "0";
  }
  return result;
};

export const formattedRawValue = (rawValue: string) => {
  let precision = 2;
  const minChars = "0".length + precision;
  let result = rawValue;
  if (result.length < minChars) {
    const leftZeroesToAdd = minChars - result.length;
    result = `${repeatZeroes(leftZeroesToAdd)}${result}`;
  }
  let beforeSeparator = result.slice(0, result.length - precision);
  let afterSeparator = result.slice(result.length - precision);
  if (beforeSeparator.length > 3) {
    var chars = beforeSeparator.split("").reverse();
    let withDots = "";
    for (var i = chars.length - 1; i >= 0; i--) {
      let char = chars[i];
      let dot = i % 3 === 0 ? delimiter : "";
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

export const formatCurrency = (
  value: number,
  options: ToCurrencyOptions = {
    unit: "R$ ",
    separator: ",",
  }
) => i18n.toCurrency(value / 100, options);

export const documentAs = <T extends object>(
  doc: FirebaseDocument
): WithId<T> => ({
  ...(doc.data() as T),
  id: doc.id,
});

export const documentsAs = <T extends object>(
  docs: FirebaseDocument[]
): WithId<T>[] => docs.map((doc) => documentAs<T>(doc));

export const formatHour = (value: string | undefined) => {
  let formatedNumber = "";
  if (value) {
    let hours = value.slice(0, 2);
    let minutes = value.slice(2, 4);
    if (parseInt(hours, 10) > 23) {
      hours = "00";
    }
    if (parseInt(minutes, 10) > 59) {
      minutes = "00";
    }
    if (minutes === "") {
      formatedNumber = `${hours}`;
    } else if (minutes !== "") {
      formatedNumber = `${hours}:${minutes}`;
    }
  }
  return formatedNumber;
};

export const formatCEP = (cep: string) => {
  return cep.replace(/(\d{5})(\d{3})/, "$1-$2");
};

export const getAdminLink = () => {
  const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
  let prefix = "";
  if (env !== "live") prefix = `${env}.`;
  return `http://${prefix}admin.appjusto.com.br/`;
};
