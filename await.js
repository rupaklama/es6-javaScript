// ES8 (es2017) - async/await got introduced to make easier to consume Promises

// this function runs asynchronously in the background
async function getRecipies() {
  // await expression really stop code from executing until Promise is fulfilled
  // If promise is successful, will be assign to the variable 
  const IDs = await getIDs;
  console.log(IDs)
}

getRecipies();