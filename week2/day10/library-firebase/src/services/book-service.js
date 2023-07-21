import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
  } from 'firebase/firestore';
  
  import { db } from '../firebase/firebase';
  import { Task } from '../models/Book';
  
  class BookService {
    constructor() {
      this.collection = 'books';
    }
  
    async fetchBoks() {
      const collectionRef = collection(db, this.collection);
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
  
      const books = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const book = new Book(data.name, data.ISBN, data.author);
        books.push(book);
      });
  
      return books;
    }
  
    async createBook(book) {
      const collectionRef = collection(db, this.collection);
  
      const docRef = await addDoc(collectionRef, {
        name: book.name,
        isbn: book.isbn,
        author: book.author,
      });
  
      book.id = docRef.id;
      return book;
    }
  
    async updateBook(book) {
      const docRef = doc(db, this.collection, book.id);
  
      await updateDoc(docRef, {
        name: book.name,
        author: book.author,
        isbn: book.isbn,
      });
  
      return book;
    }
  
    async deleteTask(bookId) {
      const docRef = doc(db, this.collection, bookId);
      await deleteDoc(docRef);
    }
  }
  
  const service = new BookService();
  export default service;
  