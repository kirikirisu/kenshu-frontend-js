window.addEventListener("DOMContentLoaded", async (event) => {
  const listRoot = document.getElementById("list");
  const resData = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  for (const item of resData) {
    const li = document.createElement("li");

    const title = document.createElement("h2");
    const body = document.createElement("p");

    title.textContent = item.title;
    body.textContent = item.body;
    li.appendChild(title);
    li.appendChild(body);

    listRoot.appendChild(li);
  }
});
