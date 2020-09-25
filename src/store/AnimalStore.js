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
            "father": "03",
            "gender": "female",
            "id": "05",
            "mother": "04",
            "nickname": "Child1"
        },
        {
            "animalId": 123124124,
            "date": "21/12/2018",
            "father": "01",
            "gender": "female",
            "id": "04",
            "mother": "02",
            "nickname": "Mother"
        },
        {
            "animalId": 94235423,
            "date": "21/12/2018",
            "father": "06",
            "gender": "male",
            "id": "03",
            "mother": "07",
            "nickname": "Father"
        },
        {
            "animalId": 94534223,
            "date": "21/12/2018",
            "father": "03",
            "gender": "male",
            "id": "09",
            "mother": "04",
            "nickname": "Child2"
        },
        {
            "animalId": 94312453423,
            "date": "21/12/2018",
            "father": "03",
            "gender": "female",
            "id": "10",
            "mother": "04",
            "nickname": "Child2"
        },
        {
            "animalId": 121334523,
            "date": "21/12/2018",
            "father": "18",
            "gender": "female",
            "id": "11",
            "mother": "05",
            "nickname": "Torun"
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
