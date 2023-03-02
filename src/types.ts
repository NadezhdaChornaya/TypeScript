import {Author, Book, Person} from './interfaces';
import {createCustomer, getBooksByCategoryPromise} from './functions';

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };
//
// type Book2 = Book & { page: number };

export type BookProperties = keyof Book;
export type PersonBook = Book & Person;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type СreateCustomerFunctionType  = typeof createCustomer;

export type fn  = (a: string, b: number, c: boolean) => symbol;
export type Param1<T>  = T extends (a: infer U, b: number, c: boolean) => symbol ? U : never;
export type Param2<T>  = T extends (a: string, b: infer U, c: boolean) => symbol ? U : never;
export type Param3<T>  = T extends (a: string, b: number, c: infer U) => symbol ? U : never;

export type P1  = Param1<fn>;
export type P2  = Param2<fn>;
export type P3  = Param3<fn>;

export type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends  Pick<T, prop> ? never : prop
}[keyof T];

// type T1 = RequiredProps<Book>['id' | 'title'];
// type T1 = RequiredProps<Book>; // [keyof Book];

// Pick<Book, 'id'> => {id: number}
// {} extends {id?: number}

export type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends  Pick<T, prop> ? prop : never
}[keyof T];

type T1 = OptionalProps<Book>; // [keyof Book];

// Pick<Book, 'id'> => {pages?: number}
// {} extends {page?: number}

type BookRequiredProps  = RequiredProps<Book>;
type BookOptionalProps  = OptionalProps<Book>;

type RemoveProps <T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type F = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;

// Unpromisify<Promise<string[]>> => string[]
