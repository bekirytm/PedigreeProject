import {observable,action} from 'mobx';

class AnimalStore{
    @observable animals = [];
    @action addAnimal(animal){
        this.animals = [...this.animals, animal];
    }
}

export default AnimalStore;