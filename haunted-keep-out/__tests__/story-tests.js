const storyGenerator = require("../story-generator.js");
const sentenceStarterGenerator = require("../sentence-starter-generator")

describe('storyGenerator', () => {
    test('returns an object', () => { 
        expect(typeof storyGenerator()).toBe("object")
        expect(Array.isArray(storyGenerator())).toBe(false)
    })
    test('has a story value that is a string', () => { 
        const storyObject = storyGenerator()
        console.log(storyObject)
        expect(typeof storyObject.story).toBe("string")
    })
});

describe('sentenceStarterGenerator', () => {
    test('returns a string containing a name variable that defaults to \'the cursed northcoder\'', () => { 
        expect(sentenceStarterGenerator().includes('the cursed northcoder')).toBe(true)
    })
    test('returns a string containing the name variable passed', () => { 
        expect(sentenceStarterGenerator('Rose').includes('Rose'))
    })
});

// describe('titleGenerator', () => { 
//     test('returns a string containing the adjective and noun passed')
// })
