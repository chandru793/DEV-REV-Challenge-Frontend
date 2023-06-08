import axios from "axios";

//=============jwt==============
//decode user token
export const decode = async (token) =>
  await axios.post(`${process.env.REACT_APP_HOST_URL}/api/decode`, { token: token });

//=============Books==============

//api to create new book
export const createBook = async (
  bname,
  author,
  publisher,
  year,
  genre,
  count
) => {
  await axios.post(`${process.env.REACT_APP_HOST_URL}/api/books`, {
    bookName: bname,
    authorName: author,
    publisherName: publisher,
    publishedYear: year,
    genre: genre,
    count: count,
  });
};

//api to get all book
export const getAllBook = async () =>
  await axios.get(`${process.env.REACT_APP_HOST_URL}/api/books`);


//=============Lend Books==============
//api to create lend book
export const lendBook = async (
  bname,
  author,
  publisher,
  year,
  sname,
  sid,
  pdate,
  ddate
) => {
  await axios.post(`${process.env.REACT_APP_HOST_URL}/api/lend`, {
    bookName: bname,
    authorName: author,
    publisherName: publisher,
    publishedYear: year,
    studentName: sname,
    StudentId: sid,
    publishedDate: pdate,
    dueDate: ddate,
  });
};

//api to get all lend book
export const getLendBook = async () =>
  await axios.get(`${process.env.REACT_APP_HOST_URL}/api/lend`);

//api to delete a lended book
export const deleteLendBook = async (id) =>
  await axios.delete(`${process.env.REACT_APP_HOST_URL}/api/lend/${id}`);