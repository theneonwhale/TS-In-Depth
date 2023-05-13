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
function logFirstAvailable(books: readonly Book[]): void {
    console.log(`Number of books: ${books.length}`);
    const title = books.find(({ available }) => available).title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(categoryFilter: Category): string[] {
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

function createCustomerId(name: string, id: number): string {
    return `${id}/${name}`;
}

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
