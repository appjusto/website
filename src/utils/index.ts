import IBGEUrl from '../services/ApiIBGE'
import Ufs from '../services/ufs'

export const ufsList = Ufs.map(uf => ({
  value: uf.sigla, label: uf.sigla
}))

export const getCities = async (uf: string) => {
  const response = await fetch(`${IBGEUrl}/${uf}/municipios`)
  const cities = await response.json()
  const citiesList = cities.map(city => (
    { value: city.nome, label: city.nome}
  ))
  return citiesList
}

export const profileOptions = [
  { value: "consumers", label: "Cliente"},
  { value: "couriers", label: "Entregador"},
  { value: "restaurants", label: "Restaurante"}
]