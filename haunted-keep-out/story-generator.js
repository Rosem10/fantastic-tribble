const {sentenceStarters} = require('./data/storydata')
const sentenceStarterGenerator = require('./sentence-starter-generator')

function storyGenerator(name='the cursed northcoder') {
    const storyObject = {

    }
    const story = []
    story.push(sentenceStarterGenerator(name))
    storyObject.story = story.join(',')
    return storyObject
 }

module.exports = storyGenerator

