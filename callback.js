var posts = [
  { title: "Post 1", body: "post one", createdAt: new Date().getTime() },
  { title: "Post 2", body: "post two", createdAt: new Date().getTime() },
];

var interval_id = 0;

function getPosts() {
  setTimeout(() => {
    clearInterval(interval_id);
    setInterval(() => {
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
function createPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
  }, 2000);
}
function create4Post(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
  }, 6000);
}
createPost({ title: "Post 3", body: "post three" }, getPosts);
create4Post({ title: "Post 4", body: "post Four" }, getPosts);

var count = 0;
var timer;
function lastUpdatedPost() {
  clearInterval(timer);
  timer = setInterval(() => {
    count++;
    console.log(count);
  }, 1000);
}
lastUpdatedPost();
