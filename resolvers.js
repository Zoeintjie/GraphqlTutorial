const authors = [{
    id: 1,
    name: 'JK Rowling',
    age: 50,
    books: ['Harry Potter']
},{
    id: 2,
    name: 'Stephan King',
    age: 60,
    books: ['The green mile']
}]

const resolvers = {
    Query: {
        authors: () => {
            return authors;
        },
        author: (root, {id}) => {
            return authors.find(author=>author.id === id);
        }
    }
}

export default resolvers;