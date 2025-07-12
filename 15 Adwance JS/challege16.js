//========= Exercise 40 ============//

///=== Simulating Asynchronous Behavior ===///
function simulateAsyncTask() {
  console.log("Task started");

  setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}

///=== Simulate Multiple Async Tasks with Different Delays ===///

function simulateMultipleTasks() {
  setTimeout(() => {
    console.log("Task 1 finished");
  }, 1000);
  setTimeout(() => {
    console.log("Task 2 finished");
  }, 2000);
  setTimeout(() => {
    console.log("Task 3 finished");
  }, 3000);
}

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback("Fetched data");
  }, 2000);
}

///////////////////////////////
//========= Exercise 41 ============//
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return "Rate limit exceeded";
    } else {
      lastCalled = now;
      return fn(...args);
    }
  };
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

///////////////////////////////
//========= Exercise 43 ============//

// Task 1
const person = {
  name: "Alice",
  introduce() {
    return `Hi, my name is ${this.name}`;
  },
};

const boundIntroduce = person.introduce.bind(person);

// Task 2
function introduce() {
  return `Hi, my name is ${this.name}`;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

introduce.call(person1);
introduce.call(person2);

// Task 3
function sum(a, b) {
  return (a + b) * this.multipliyer;
}
const num1 = { multipliyer: 2 };
const num2 = { multipliyer: 3 };
console.log(sum.apply(num1, [8, 6]));

///////////////////////////////
//========= Exercise 44 ============//
// Task 1
function fetchUser() {
  return new Promise((res) => {
    setTimeout(() => {
      res("fetch user");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((res) => {
    setTimeout(() => {
      res("fetch post");
    }, 1000);
  });
}

 async function fetchAllData() {
  const [user,posts] = await Promise.all([fetchUser(),fetchPosts()])
  console.log(user);
  console.log(posts);
}
fetchAllData()

// Task 2
function fetchSuccess() {
  return new Promise(res => {
    setTimeout(() => {
      res("Successfully")
    }, 1000);
  })
}

function fetchFailure() {
  return new Promise((_,rej) => {
    setTimeout(() => {
      rej("error")
    }, 1000);
  })
}

async function handlePromises() {
  try {
    const [success,error] = await Promise.all([fetchSuccess(),fetchFailure()])
    success()
  } catch (error) {
    console.log(error);
  }
}
handlePromises()

// Task 3

function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject('Timeout exceeded'), timeout)
  );
  
  return Promise.race([promise, timeoutPromise]);
}
 
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 3000));
}

