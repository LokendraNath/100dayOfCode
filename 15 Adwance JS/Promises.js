const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let result = true;

    if (result) {
      resolve("Your Work Is Done");
    } else {
      reject("Your Work is Not Done");
    }
  }, 2000);
});

fetchData
  .then((respnse) => {
    console.log(respnse);
    return `Lokendra`;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
