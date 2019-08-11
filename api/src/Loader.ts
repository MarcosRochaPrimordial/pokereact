import { LoadApp } from 'decorated-router';

@LoadApp({
    controllers: [],
    serverSets: {
        door: 3000,
        methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    }
})
class Loader { }