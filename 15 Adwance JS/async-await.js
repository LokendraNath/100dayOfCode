const fetchUserData = () => {
  return new Promise((res,rej) => {
    setTimeout(() => {
      rej({ name: "Lokendra", age: 19, district: "durg" });
    }, 2000);
  });
};
async function getUserData() {
  try {
    console.log("fetching user data");
    let userData = await fetchUserData();
    console.log("User Data Fetch Successfull")
    console.log("User Data is :", userData);
  } catch (error) {
    console.log("Error Fetching Data", error);
  }
}
getUserData()
