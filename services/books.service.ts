import connection from '../models/connection';
import Book from '../interfaces/book.interface';
import BookModel from '../models/books.models';

export default class BookService {
public model: BookModel;

constructor() {
    this.model = new BookModel(connection);
}

public async getAll(): Promise<Book[]> {
  const books = await this.model.getAll();
  return books;    
}

public async getById(id: number): Promise<Book> {
   
const book = await this.model.getById(id);
return book;    
}
public async create(book: Book): Promise<Book> {
   
  return this.model.create(book);
  
}

}    