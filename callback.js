var posts = [
  { title: "Post 1", body: "post one", createdAt: new Date().getTime() },
  { title: "Post 2", body: "post two", createdAt: new Date().getTime() },
];

var user = {
  username: "name",
  lastactivity: "jan 15",
};

var interval_id = 0;

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
createPost({ title: "Post 3", body: "post three" })
  .then(() => {
    console.log(posts);
    getPosts();
    deletePost()
      .then((post) => {
        console.log("deleted post ", post);
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// create4Post({ title: "Post 4", body: "post Four" }, getPosts);

Promise.all([createPost, updatelastactivity])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });

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
