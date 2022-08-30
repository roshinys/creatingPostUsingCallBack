var posts = [
  { title: "Post 1", body: "post one", createdAt: new Date().getTime() },
  { title: "Post 2", body: "post two", createdAt: new Date().getTime() },
];
var user = {
  username: "name",
  lastactivity: "jan 15",
};

var interval_id = 0;

const posting = async () => {
  const getPosts = new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = "";
      posts.forEach((post) => {
        output += `<li>${post.title} - ${post.body} created at ${parseInt(
          (new Date().getTime() - post.createdAt) / 1000
        )} seconds ago</li>`;
      });
      document.body.innerHTML = output;
    }, 3000);
    resolve(`returned posts`);
  });
  let getPost = await getPosts;
  return getPost;
};
var post = {
  title: "Post 3",
  body: "post three",
};
const postsFunctionality = async (newpost) => {
  const createPost = new Promise((resolve, reject) => {
    posts.push({ ...newpost, createdAt: new Date().getTime() });
    console.log(posts);
    const err = false;
    if (!err) {
      // resolve(`${posts[posts.length - 1]}`);
      console.log("added post ", posts[posts.length - 1]);
      resolve();
    } else {
      reject("Something went wrong");
    }
  });
  const deletePost = new Promise((resolve, reject) => {
    if (posts.length !== 0) {
      let d = posts.pop();
      console.log("deleted post = ", d);
      resolve();
    } else {
      reject("No posts To delete");
    }
  }, 1000);
  let addPost = await createPost;
  // console.log(newpost);
  let deletedPost = await deletePost;
  return;
};

postsFunctionality(post).then(() => {
  console.log("added and deleted posts successfully");
});
posting().then((t) => {
  console.log(t);
});
//or

function getPosts() {
  setTimeout(() => {
    clearInterval(interval_id);
    interval_id = setInterval(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title} - ${post.body} created at ${parseInt(
          (new Date().getTime() - post.createdAt) / 1000
        )} seconds ago</li>`;
      });
      document.body.innerHTML = output;
      console.log("interval id is = ", interval_id);
    }, 1000);
  }, 1000);
}
// getPosts();
function createPost(post) {
  return new Promise((resolve, reject) => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    const err = false;
    if (!err) {
      resolve();
    } else {
      reject("Something went wrong");
    }
  });
}
var newtimer;
function deletePost() {
  return new Promise((resolve, reject) => {
    clearInterval(newtimer);
    newtimer = setInterval(() => {
      if (posts.length !== 0) {
        resolve(posts.pop());
      } else {
        reject("No posts To delete");
      }
    }, 1000);
  });
}

updatelastactivity = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastactivity = new Date().getTime();
      resolve(user.lastactivity);
    }, 1000);
  });
};

async function printPosts() {
  await createPost({ title: "Post 3", body: "post three" });
  await getPosts();
}
printPosts();
// createPost({ title: "Post 3", body: "post three" })
//   .then(() => {
//     console.log(posts);
//     getPosts();
//     deletePost()
//       .then((post) => {
//         console.log("deleted post ", post);
//         getPosts();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// create4Post({ title: "Post 4", body: "post Four" }, getPosts);

// Promise.all([createPost, updatelastactivity])
// .then((values) => {
//   console.log(values);
// })
// .catch((err) => {
//   console.log(err);
// });

var count = 0;
var timer;
function lastUpdatedPost() {
  clearInterval(timer);
  timer = setInterval(() => {
    count++;
    console.log(count);
  }, 1000);
}
// lastUpdatedPost();

//async and await
// console.log("person 1:brings ticket");
// console.log("person 2:brings ticket");

const preMovie = async () => {
  const wifeBringsTickets = new Promise((resolve, reject) => {
    resolve(`ticket`);
  });
  let ticket = await wifeBringsTickets;
  const getPopcorn = new Promise((resolve, reject) => {
    resolve(`popcorn`);
  });
  const getButter = new Promise((resolve, reject) => {
    resolve(`butter`);
  });
  const getColdDrinks = new Promise((resolve, reject) => {
    resolve(`cold drinks`);
  });

  console.log(`wife : i have ${ticket}`);
  console.log("husband : should we go in");
  console.log("wife : am hungry!!!");
  let popcorn = await getPopcorn;
  console.log(`husband : i have ${popcorn} `);
  console.log("husband : should we go in");
  console.log("wife : i need butter on my popcorn ");
  let butter = await getButter;
  console.log(`lets go i got ${butter} with ${popcorn}`);
  console.log("wife : i need coldrinks");
  console.log("husband : your such an headache");
  // Now create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code
  let drinks = await getColdDrinks;
  // console.log(`here is your ${drinks} now show the tickets`);
  let [x, y, z] = await Promise.all([getPopcorn, getButter, getColdDrinks]);
  console.log(`${x},${y},${z}`);
  return ticket;
};
// preMovie().then((t) => {
//   console.log(`wife shows ${t}`);
// });
// const wifeBringsTickets = new Promise((resolve, reject) => {
//   resolve(`ticket`);
// });

// const getPopcorn = wifeBringsTickets.then((t) => {
//   console.log("wife : i have tickets");
//   console.log("husband : should we go in");
//   console.log("wife : am hungry!!!");
//   return new Promise((resolve, reject) => {
//     resolve(`popcorn and ${t}`);
//   });
// });

// const getButter = getPopcorn.then((t) => {
//   console.log("husband : i have popcorn ");
//   console.log("husband : should we go in");
//   console.log("wife : i need butter on my popcorn ");
//   return new Promise((resolve, reject) => {
//     // console.log("butter with ", t);
//     resolve(`butter with ${t}`);
//   });
// });

// getPopcorn.then((t) => {
//   console.log(t);
// });

// wifeBringsTickets.then((t) => {
//   setTimeout(() => {
//     console.log(`wife brings ${t}`);
//   }, 3000);
// });

// console.log("person 3:brings ticket");
// console.log("person 4:brings ticket");
