import Team from '../team';
import Character from '../Character';

test('test team class', () => {
    const char1 = new Character('Name','Bowman');
    const char2 = new Character('Name', 'Bowman');
    const newTeam = new Team();
    newTeam.add(char1);
    newTeam.add(char2);
    const result = newTeam.members.size;

    expect(result).toBe(2);
});