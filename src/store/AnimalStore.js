import {observable,action, configure} from 'mobx';
import { createContext } from 'react';


configure({
    enforceActions: 'observed'
})

class AnimalStore{
    @observable animals = [
        {
            "animalId": 9592183120,
            "date": "21/12/2018",
            "father": "01",
            "gender": "female",
            "id": "03",
            "mother": "02",
            "nickname": "TestCow1"
        },
        {
            "animalId": 123124124,
            "date": "21/12/2018",
            "father": "DadCow2",
            "gender": "female",
            "id": "02",
            "mother": "MomCow2",
            "nickname": "TestCow2"
        },
        {
            "animalId": 943534523,
            "date": "21/12/2018",
            "father": "DadCow3",
            "gender": "male",
            "id": "03",
            "mother": "MomCow3",
            "nickname": "TestCow3"
        }
    ];


    @action addAnimal(animal){
        this.animals = [...this.animals, animal];
        console.log(this.animals);
    }


    @action searchPedigree(id){

        console.log(this.animals.filter(id));
    }
}

export default AnimalStore = createContext(new AnimalStore());
