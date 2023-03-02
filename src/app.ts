import {Category} from './enums';
import {getBookByCategory, getBooksByCategoryPromise, logCategorySearch, logSearchResults} from './functions';
import {RefBook} from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// eslint-disable-next-line no-underscore-dangle
// =====================================================

// Task 02.01
// console.log(getAllBooks());
// logFirstAvailable();
// getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(2));
// console.log(calcTotalPages());

// Task 03.01

// let myId: string = createCustomerID('Ann', 10);
// console.log(myId);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name1: string, id: number) => `${id} - ${name1}`;
// idGenerator = createCustomerID;
// console.log(createCustomerID('Ann', 10));
// let a: typeof createCustomerID;

// Task 03.02

// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookById(1));

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);


// Task 03.03
// console.log(getTitles(1, true));

// Task 03.04
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(123));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged(reason: string): void {
//         console.log(`Damaged: ${reason}`);
//     }
// };
//
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: Logger = (reason: string): void => {
//     console.log(`Damaged: ${reason}`);
// };
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 1
// };
//
// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical',
//     assistCustomer: null
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
//
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'TypeScript', 2023);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref);
// console.log(ref.getId());

// Task 05.02, 05.03
// const refBook = new Encyclopedia(1, 'TypeScript', 2023, 2);
// const refBook = new RefBook(1, 'TypeScript', 2023, 2);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 05.04
//     const favoriteLibrarian: Librarian & A = new Ul.UniversityLibrarian();
//     favoriteLibrarian.name = 'Anna';
//     favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
//     favoriteLibrarian.a = 2;

// Task 05.05
// const PersonBook: PersonBook = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     name:'Anna',
//     title: 'Unknown'
// };

// const config: TOptions = {
//     duration: 100
// };
// console.log(BookOrUndefined(config));

// Task 06.03
// printRefBook(new RefBook(1, 'TypeScript', 2023, 2));
// printRefBook(new Ul.UniversityLibrarian());

// Task 06.05
// const flag = false;
//
// if (flag) {
//     import('./classes')
//         .then(obj => {
//             const reader = new obj.Reader();
//             reader.name = 'Anna';
//             console.log(reader);
//         })
//         .catch(err => console.log(err));
// }
//
// if (!flag) {
//     const obj = await import('./classes');
//     const reader = new obj.Reader();
//     reader.name = 'Anna';
//     console.log(reader);
// }

// Task 06.06
// let lib: Library = new Library();
// let lib: Library = {
//     name: 'Anna',
//     id: 1,
//     address: ''
// };

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
//
// ];
//
// const r1: Book[] = purge<Book>(inventory);
// console.log(r1);
// const r2: number[] = purge<number>([1,2,3,4]);
// console.log(r2);

// Task 07.02, 07.03
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());
//
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
//
// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[0], 'author'));
// console.log(getObjectProperty(10, 'toFixed'));

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     markDamaged: null,
//     pages: 200,
//     title: 'Unknow'
// };
//
// const updatedBook: UpdatedBook = {
//     id: 1
// };
//
// let params: Parameters<СreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// Task 08.01, 08.02, 08.03
// const ul = new Ul.UniversityLibrarian();
// Ul.UniversityLibrarian['a'] = 123;
// Object.getPrototypeOf(ul)['b'] =  123;
// console.log(ul);
// ul.name = 'Anna';
// ul['printLibrarian']();

// (ul as Ul.UniversityLibrarian & pl).printLibrarian();
//
// type pl = { printLibrarian: () => void };

// Object.getPrototypeOf(ul).assistFaculty =  null;
// Object.getPrototypeOf(ul).teachCommunity =  null;

// Task 08.04
// const ref = new RefBook(1, 'TypeScript', 2023, 2);
// ref.printItem();

// Task 08.05, 08.06
// const ul = new Ul.UniversityLibrarian();
// ul.name = 'Anna';
// // ul.assistCustomer('Boris', 'Learn TypeScript');
// console.log(ul);

// Task 08.07
// const ref = new RefBook(1, 'TypeScript', 2023, 2);
// ref.copies = 10;
// console.log(ref);

// Task 09.01
// console.log('Begin');
// getBookByCategory(Category.JavaScript, logCategorySearch);
// getBookByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length + 1);
//     })
//     .then(Len => console.log(Len))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// Task 09.03
console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software)
    .catch(err => console.log(err));
console.log('End');