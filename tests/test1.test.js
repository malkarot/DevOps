const request = require('supertest')
const app = require('../server')

describe("Test suite 1:", ()=>{
    test("test 1: ", ()=>{
        expect(2).toEqual(2)
    })
    test("test 2: ", async ()=>{
        const res = await request(app).get('./')
        expect(res.statusCode).toEqual(200)
    })
    // test("test 3: ", async()=>{
    //     const res = await request(app).get('./1222')
    //     expect(res.statusCode).toEqual(404)
    // })
})