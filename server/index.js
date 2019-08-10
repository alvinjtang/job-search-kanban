const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
    info: String!
    boards: [Board]
}

type Board {
    id: ID!
    name: String!
    description: String
    lists: [List]!
}

type List {
    id: ID!
    name: String!
    cards: [Card]!
}

type Card {
    id: ID!
    companyName: String!
    position: String!
    url: String!
    notes: String!
    date: String!
}
`

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

const cards = [{
    id: 'card-0',
    companyName: 'company',
    position: 'engineer',
    url: 'alvintang.dev',
    notes: 'blah blah blah',
    date: `${mm}/${dd}/${yyyy}`
}]

const lists = [{
    id: 'list-0',
    name: 'List',
    cards: cards
}]

const boards = [{
    id: 'board-0',
    name: `Board`,
    description: `This is a Board`,
    lists: lists,
}]

const resolvers = {
    Query: {
        info: () => 'info',
        boards: () => boards,
    },
    Board: {
        name: (parent) => parent.name,
        description: (parent) => parent.description,
        lists: (parent) => parent.lists
    },
    List: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        cards: (parent) => parent.cards
    },
    Card: {
        id: (parent) => parent.id,
        companyName: (parent) => parent.companyName,
        position: (parent) => parent.position,
        url: (parent) => parent.url,
        notes: (parent) => parent.notes,
        date: (parent) => parent.date
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => console.log('Server is running on http://localhost:4000'));