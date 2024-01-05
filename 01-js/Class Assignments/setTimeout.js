const startTime = Date.now();

function myFunction() {
  const endTime = Date.now();
  const elapsedTime = endTime - startTime;
  console.log(`Time taken by inner function to run ${elapsedTime} milliseconds.`);
}

setTimeout(myFunction, 1000);