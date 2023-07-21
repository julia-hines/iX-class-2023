export class Book {
    constructor(name, isbn, author) {
      this.name= name;
      this.isbn = isbn;
      this.author = author;
    }
  
    static fromJson(json) {
      return new Book(json.name, json.isbn, json.author);
    }
  }
  