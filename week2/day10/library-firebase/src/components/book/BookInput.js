import React, { useState } from 'react';

export default function BookInput(props) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');


  function onBookFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
        return;
      }

    props.onBookCreate(name);
    setName('');
  }

  function isValid() {
    return name !== '' && (author !== '') & (isbn !== '');
  }

  return (
    <div>
      <form id="form" onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            placeholder="Enter Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">ISBN</label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            placeholder="Enter ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          ></input>
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
          </button>
        </div>
      </form>
    </div>
  );
}
