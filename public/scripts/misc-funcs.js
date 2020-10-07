function fromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}

const cacheFetch = (() => {
  const cache = {};
  return function cacheFetch(path) {
    if (path in cache) { return cache[path]; }

    return cache[path] = fetch(path);
  };
})();