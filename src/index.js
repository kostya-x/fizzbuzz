function buzzfizz(number) {
  const startNumber = 1;
  const endNumber = number;
  let result = startNumber;

  for (i = 0; i < endNumber; i++) {
    if (result % 3 === 0 && result % 5 === 0) {
      console.log('fizzbuzz');
    } else if (result % 3 === 0) {
      console.log('fizz')
    } else if (result % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(result);
    }
    
    result++;
  }
}