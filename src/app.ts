/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ----------------------------------------------------\
type Book = {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
};

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.JavaScript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.JavaScript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];

    return books;
}

// any[] = Array<any>, object[], any, Array<unknown>
function getAllBooks2(): ReadonlyArray<Book> {
    const books: readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.JavaScript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.JavaScript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];

    return books;
}

// Book[], any[], unknown[]
// void, undefined
function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);
    const title = books.find(({ available }) => available).title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(categoryFilter: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    const filteredBooks = books.filter(({ category }) => category === categoryFilter).map(({ title }) => title);
    return filteredBooks;
}

function logBookTitles(titles: string[]): void {
    console.log(titles);
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index] ?? {};
    console.log([title, author]);

    return [title, author];
}

function culcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    age && console.log(`Customer age: ${age}`);
    city && console.log(`Customer city: ${city}`);
}

function getBookById(id: number): Book {
    const books = getAllBooks();
    return books.find(({ id: propId }) => propId === id);
}

function checkoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log(`Customer: ${customer}`);

    return bookIds
        .map(id => getBookById(id))
        .filter(book => book.available)
        .map(book => book.title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    } else {
        return [];
    }
}

function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value must be a string');
    }
}

function bookTitleTransform(title: any) {
    assertStringValue(title);
    return [...title].reverse().join('');
}

// interface TOptions {
//     id: number;
//     title: string;
//     fn: (a: number) => number;
// }

// const f: FnType = function(o: TOptions) {

// };

// type FnType = (a: Toptions) => number;

// function f(cb: (a: number) => number) {

// }

// function fb(cb: FnType) {

// }

// function createCustomerId(name: string, id: number): string {
//     return `${id}/${name}`;
// }

// Task 02.01
// logFirstAvailable(getAllBooks());

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// logBookTitles(getBookTitlesByCategory(Category.Angular));

// getBookAuthorByIndex(2);

// console.log(culcTotalPages());

// Task 03.01
// const myID: string = createCustomerId('Andy', 1);
// console.log(myID);

// // let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerId;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerId;
// idGenerator = createCustomerId;
// console.log(idGenerator('Anna', 2));

// Task 03&02

// createCustomer('Andy');
// createCustomer('Andy', 30);
// createCustomer('Andy', undefined, 'Kyiv');
// createCustomer('Andy', 30, 'Kyiv');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookById(1));
// console.log(checkoutBooks('Anna', 1, 2, 4));

// Task 03.03
// const checkedoutBooks = getTitles(3, true);
// console.log(checkedoutBooks);

// Task 03.04
console.log(bookTitleTransform('TS'));
console.log(bookTitleTransform(123));
