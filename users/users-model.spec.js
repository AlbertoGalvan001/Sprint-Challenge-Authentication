const db = require('../database/dbConfig.js');
const Users = require('./users-model.js');

describe('users model', function () {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('insert()', function () {
        it('should add user to db', async function () {
            await Users.insert({ username: "Sam", password: "pass" });

            const users = await db('users')
            expect(users).toHaveLength(1);
        })
    })

    describe('find()', function () {
        beforeEach(async () => {
            await db('users').truncate();
        });

        it('should return array of users', async function () {
            await Users.find({ username: "Sam", password: "pass" });

            let allUsers = await find();
            expect(allUsers).toBe('object');
        })
        it('should have a user named Sam', async function () {
            await Users.find({ username: "Sam", password: "pass" })

            let allUsers = await find();
            expect(allUsers[0].username).toBe("Sam");
        })
    })

    describe('findBy()')
})

