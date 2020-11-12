const enhancer = require('./enhancer.js');
const {success,fail,repair,get, } = require('./enhancer');
const { it, expect, test } = require('@jest/globals');
// test away!
testItem = {
    name: 'DanTheMan',
    enhancement:0,
    durability:50
}
testItem2 = {
    name:'Dmoney',
    enhancement:20,
    durability:50
}
describe('repair item function test', () => {
    it('exists', () =>{
        expect(repair).toBeDefined()
    })
    it('returns an item object', () =>{
        expect(repair(testItem)).toBeInstanceOf(Object)
    })
    it('returns an Object with name, enhancement and durability properties', () => {
        expect(repair(testItem)).toHaveProperty('name')
        expect(repair(testItem)).toHaveProperty('enhancement')
        expect(repair(testItem)).toHaveProperty('durability')
    })
    
    it('returns an object with durability set to 100', () => {
        expect(repair(testItem)).toMatchObject({ name: 'DanTheMan',enhancement:0,durability:100})
    })

})
describe('success function test', () => {
    it('exists', () =>{
        expect(success).toBeDefined()
    })
    it('returns an item object', () =>{
        expect(success(testItem)).toBeInstanceOf(Object)
    })
    it('returns an Object with name, enhancement and durability properties', () => {
        expect(success(testItem)).toHaveProperty('name')
        expect(success(testItem)).toHaveProperty('enhancement')
        expect(success(testItem)).toHaveProperty('durability')
    })
    it('returns item with enhancement level increased by 1', () =>{
        expect(success(testItem)).toMatchObject({name:'DanTheMan', enhancement: 1, durability:50})
    })
    it('returns item with enhancement level not changed when level 20', () => {
        expect(success(testItem2)).toMatchObject({name:'Dmoney',enhancement:20,durability:50})
    })
    it('returns item with durability not changed', () => {
        expect(success(testItem2)).toMatchObject({name:'Dmoney',enhancement:20,durability:50})
    })
})
describe('fail function test', () => {
    it('exists', () =>{
        expect(fail).toBeDefined()
    })
    it('returns an item object', () =>{
        expect(fail(testItem)).toBeInstanceOf(Object)
    })
    it('returns an Object with name, enhancement and durability properties', () => {
        expect(fail(testItem)).toHaveProperty('name')
        expect(fail(testItem)).toHaveProperty('enhancement')
        expect(fail(testItem)).toHaveProperty('durability')
    })
    it('returns the item with durability decreased by 5, when enhancement level < 15', () =>{
        expect(fail(testItem)).toMatchObject({name:'DanTheMan', enhancement:0,durability:45})
    })
    it('returns the item with durability decreased by 10, when enhancement level > 15', () =>{
        expect(fail(testItem2)).toMatchObject({name:'Dmoney', enhancement:19,durability:40})
    })
    it('returns the item with level decreased by 1, when enhancement level > 16', () =>{
        expect(fail(testItem2)).toMatchObject({name:'Dmoney', enhancement:19,durability:40})
    })
})