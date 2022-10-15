function sentenceStarterGenerator(name = 'the cursed northcoder') { 
    const sentenceStarters = [
    `Icy fingers grip ${name}'s arm in the darkness.`,
    `Wandering through the graveyard it feels like something is watching ${name}.`,
    `The eyes in the painting follow ${name} down the corridor.`,
    `${name} shivered as A shrill cry echoed in the mist`
    ]
    return sentenceStarters[Math.floor(Math.random()*sentenceStarters.length)]
}

module.exports = sentenceStarterGenerator