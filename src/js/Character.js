export default class Character{
    constructor(name, type){
        const  classСharacteristics = {'Bowman':{
            'attack': 25,
            'defence': 25,
        }, 
        'Swordsman' : {
            'attack': 40,
            'defence': 10,
        }
        , 'Magician' : {
            'attack': 10,
            'defence': 40,
        }, 'Daemon' : {
    
            'attack': 10,
            'defence': 40,
        }, 'Undead': {
            'attack': 25,
            'defence': 25,
        }, 'Zombie': {
            'attack': 40,
            'defence': 10,
        }}

        if (name.length > 2 || name.length < 10){
            this.name = name;
        }
        if(Object.keys(classСharacteristics).indexOf(type,0) != -1){
            this.type = type;
            this.health = 100;
            this.level = 1;
            this.attack = classСharacteristics[type]['attack'];
            this.defence = classСharacteristics[type]['defence'];
        }
        else{
            throw new Error('error')
        }
    }
}


