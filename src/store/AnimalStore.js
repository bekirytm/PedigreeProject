import {observable,action, configure} from 'mobx';
import { createContext } from 'react';


configure({
    enforceActions: 'observed'
})

class AnimalStore{
    @observable animals = [
        {
            nickname: 'testCow',
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        }
    ];


    @action addAnimal(animal){
        this.animals = [...this.animals, animal];
        console.log(this.animals);
    }
}

export default AnimalStore = createContext(new AnimalStore());