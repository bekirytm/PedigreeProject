import {observable,action} from 'mobx';

class PersonStore{
    @observable persons = [];
    @action addAnimal(person){
        this.persons = [...this.persons, person];
    }
}

export default PersonStore;