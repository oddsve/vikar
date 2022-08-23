import React, { useState } from 'react';
import NameDate from './nameDate';
import AbsenceClasses from './AbsenceClasses';
import Data from './data';
import { format, set } from 'date-fns'

export default function Absence() {
    const [absentPerson, setAbsentPerson] = useState({name:""});
    const [absentDate, setAbsentDate] = useState(new Date());
    const [classes, setClasses] = useState([]);
    const [showClasses, setShowClasses] = useState(false);

    const persons = Data.persons;
    


    const handleNameDateSubmit = (absentPerson, date) => {
        setAbsentDate(date);
        setAbsentPerson(absentPerson);  
        if (absentPerson.id == 0) {
            return;
        }

        if (persons[absentPerson.id].classes[format(date,'i')]){
            console.log(absentPerson.id,date);
            setClasses(persons[absentPerson.id].classes[format(date,'i')]);
        } else {
            setClasses([]);
        }
        setShowClasses(true);
    }

    const handleNeededTemps = (classes) => {

    }

    return (
        <div>
            <h2>Registrer fravær!</h2>
            <NameDate 
                persons={persons} 
                handleNameDateSubmit={handleNameDateSubmit}/>
            {showClasses &&
                <AbsenceClasses 
                    absentName={absentPerson.name} 
                    classes={classes} 
                    handleNeededTemps={handleNeededTemps} />   
            }
        </div>
    );
}