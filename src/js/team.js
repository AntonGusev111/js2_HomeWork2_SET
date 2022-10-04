//import Character from './Character.mjs';

//const char1 = new Character('Name','Bowman');

export default class Team {
    constructor() {
        this.members = new Set([]);
    }

    add(char){
        if (this.members.has(char)){
            throw "Character already added";
        }
        this.members.add(char)
    }

    addAll(...charList){
        for (let char of charList){
            this.members.add(char)
        }
    }

    toArray(){
        return Array.from(this.members.keys());
    }
}

//const newTeam = new Team();
//newTeam.add(char1)

//const one = newTeam.members.size

//console.log(one)
