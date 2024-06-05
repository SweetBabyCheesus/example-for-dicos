export interface MyCustomFormData {
  nachname: string;
  vorname: string;
  geburtsdatum: string;
  strasse: string;
  hausnummer: string;
  plz: string;
  ort: string;
  land: string;
}

export type customTableData = tableData & { company: company, address: address, phone: string };

export type tableData = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}
type company = {bs: string, catchPhrase: string, name: string}
type address = {city: string, geo: {lat: string, lng: string}, street: string, suite: string, zipcode: string}