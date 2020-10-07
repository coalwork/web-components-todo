class Todo extends HTMLElement {
  constructor(template) {   
    if (!template) { throw Error('constructor may not be called directly'); }
    
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
  static async create(todo) {
    return new Todo(
      fromHTML(
        await cacheFetch('/Todo.html').then((res) => res.clone().text())
      )
    );
  }
  connectedCallback() {
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('value');
    console.log('Todo has been created:', this);
  }
}

self.customElements.define('app-todo', Todo);