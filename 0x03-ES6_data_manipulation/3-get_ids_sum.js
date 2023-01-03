export default function getStudentIdsSum(getListStudents) {
  const myArray = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return myArray.reduce(((accumulator, myArray) => accumulator + myArray.id), 0);
}
