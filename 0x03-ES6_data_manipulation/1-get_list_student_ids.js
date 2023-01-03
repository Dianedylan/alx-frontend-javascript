export default function getListStudentIds(obj) {
  const myArray = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  const mapArray = myArray.map((element) => element.id);
  if (Array.isArray(obj)) {
    return mapArray;
  }
  return [];
}
