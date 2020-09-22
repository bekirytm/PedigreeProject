import {observable,action, configure} from 'mobx';
import { createContext } from 'react';


configure({
    enforceActions: 'observed'
})

class AnimalStore{
    @observable animals = [];


    @action addAnimal(animal){
        this.animals = [...this.animals, animal];
        console.log(this.animals);
    }
}

export default AnimalStore = createContext(new AnimalStore());
