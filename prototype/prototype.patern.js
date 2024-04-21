class FifaOnlinePlayer {
    constructor(name, team, position, goals, assits) {
        this.name = name
        this.team = team
        this.position = position
        this.goals = goals
        this.assits = assits
    }

    score() {
        this.goals++
    }

    clone() {
        return new FifaOnlinePlayer(this.name, this.team, this.position, this.goals, this.assits)
    }
}

FifaOnlinePlayer.prototype.stats = {
    minutePlayed: 0
}

const prototypePatern = new FifaOnlinePlayer('Cr7', 'Al Nassr', 'ST', 0 , 0)

// create multiInstance Fifaonline player
const cr7 = prototypePatern.clone()
cr7.stats.minutePlayed = '10000'
const m10 = prototypePatern.clone()
m10.name = 'messi'
m10.team = 'Inter miami'

cr7.score()

m10.score()

console.log(`${cr7.name} has score ${cr7.goals} for ${cr7.team} with ${JSON.stringify(cr7.stats)}`);
console.log(`${m10.name} has score ${m10.goals} for ${m10.team} with ${JSON.stringify(m10.stats)}`);