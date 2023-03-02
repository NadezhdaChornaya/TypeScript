import { Category } from './enums';
import {Book, Callback, LibMgrCallback, TOptions} from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/encyclopedia';

/* eslint-disable no-redeclare */
export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript,author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    const firstAvailable: string = books.find(book => book.available)?.title;

    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available: ${firstAvailable}`);
}

export function getBookTitlesByCategory(categoryFilter: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books
        .filter(({category}) => category === categoryFilter)
        .map(({title}) => title);
}

export const logBookTitles = (titles: string[]): void => console.log(titles);

export function getBookAuthorByIndex(index: number): [title: string, author: string] | undefined {
    const books = getAllBooks();
    const book = books[index];

    if (!book) return undefined;

    const {title, author} = book;
    return [title, author];
}

export const calcTotalPages = (): bigint => {
    const libraries = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    // return BigInt(libraries.reduce(
    //     (acc, { books, avgPagesPerBook }) => {
    //         return acc + (books * avgPagesPerBook);
    //     }
    //     , 0));
    return libraries.reduce(
        (acc, { books, avgPagesPerBook }) => {
            return acc + (BigInt(books) + BigInt(avgPagesPerBook));
        }, 0n);
};

export function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`customer name: ${name}`);

    if (age) {
        console.log(`customer age: ${age}`);
    }

    if (city) {
        console.log(`customer city: ${city}`);
    }
}

export function getBookById(pid: Book['id']): BookOrUndefined {
    const books = getAllBooks();

    return books.find(({id}) => id === pid);
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);

    return bookIDs
        .map(id => getBookById(id))
        .filter(({available}) => available)
        .map(({title}) => title);
}

export function getTitles(author: string): string[]; // signature
export function getTitles(available: boolean): string[]; // signature
export function getTitles(id: number, available: boolean): string[]; // signature
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books
                .filter(({author}) => author === arg)
                .map(({title}) => title);
        } else if (typeof arg === 'boolean') {
            return books
                .filter(({available}) => available === arg)
                .map(({title}) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books
                .filter((book) => book.id === id && book.available === available)
                .map(({title}) => title);
        }
    }

    return [];
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw Error('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw Error('It is not an instance of RefBook');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties | 'isbn'): any {
    const value = book[prop];
    return typeof value === 'function' ? value.name : value;
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];
    return typeof value === 'function' ? value.name : value;
}

export function BookOrUndefined(options: TOptions): TOptions {
    options.duration ??= 200;
    options.speed ??= 90;
    return options;
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getBookByCategory(category: Category, callback: LibMgrCallback): void {
// export function getBookByCategory(category: Category, callback: Callback<string>[]): void {};
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category) {
    const results: Awaited<Promise<string[]>> = await getBooksByCategoryPromise(category);
    // console.log(results[0].toUpperCase());
    console.log(results);
}