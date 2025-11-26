fetch("posts/")
  .then(res => res.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const files = [...doc.querySelectorAll("a")]
      .map(a => a.getAttribute("href"))
      .filter(name => name.endsWith(".md"));

    const ul = document.getElementById("post-list");

    files.forEach(file => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="post.html?file=posts/${file}">${file.replace(".md","")}</a>`;
      ul.appendChild(li);
    });
  });
