interface mockObjType {
  id: string;
  value_area: number;
  value_bar: number;
}

interface mockDataType {
  [key: string]: mockObjType;
}

interface mockArrayObjType extends mockObjType {
  key: string;
}
