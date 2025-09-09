class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  toString() {
    return `${this.getFullName()}, ${this.age} лет`;
  }
}

class UserManager {
  constructor() {
    this.users = [];
    this.form = {
      firstName: document.getElementById('firstName'),
      lastName: document.getElementById('lastName'),
      age: document.getElementById('age'),
      addBtn: document.getElementById('addBtn'),
      list: document.getElementById('userList'),
    };

    this.init();
  }

  init() {
    this.form.addBtn.addEventListener('click', () => this.addUser());
  }

  addUser() {
    if (
      !this.form.firstName.value ||
      !this.form.lastName.value ||
      !this.form.age.value
    ) {
      alert('Заполните все поля!');
      return;
    }

    const newUser = new User(
      this.form.firstName.value.trim(),
      this.form.lastName.value.trim(),
      parseInt(this.form.age.value)
    );

    this.users.push(newUser);
    this.renderUsers();
    this.clearForm();
  }

  renderUsers() {
    this.form.list.innerHTML = this.users
      .map((user) => `<li>${user.toString()}</li>`)
      .join('');
  }

  clearForm() {
    this.form.firstName.value = '';
    this.form.lastName.value = '';
    this.form.age.value = '';
  }
}

// Инициализация приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  new UserManager();
});
