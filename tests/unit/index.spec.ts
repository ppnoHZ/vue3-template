import HelloWorld from '../../src/components/HelloWorld.vue'

test("1+1", () => {
    console.log(HelloWorld)
    expect(1 + 1).toBe(2)
})