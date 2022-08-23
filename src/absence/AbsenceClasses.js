import React, { useState } from 'react';
import { format, parse } from 'date-fns';
import './Button.css';

export default function AbsenceClasses({absentName, classes, handleNeededTemps}) {

    const [person, setPerson] = useState({id: 0});
    const [dt, setDt] = useState(new Date());
    
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(e);
    }

    const handleButtonClick= (event) => {
        console.log(event.target.checked);
        console.log(event.target.value);
    }

    return (
        <div>
            <p>Timene til {absentName}</p>
            
            <form onSubmit={e => {handleSubmit(e)}}>
                {classes.map((oneClass, index) =>
                    <span className='cb-button' key={index}>
                        <input 
                            className='hidden-cb' 
                            id={"cb"+index} 
                            type="checkbox"  
                            value={index}  
                            onChange={handleButtonClick}/>
                        <label htmlFor={"cb"+index} >{oneClass.classNr} {oneClass.subject} {oneClass.grade} trinn</label>
                    </span>                    
                )}

                { classes.length > 0 && 
                    <input 
                        className='submitButton'
                        type='submit' 
                        value='Legg til' 
                    />
                }

                { classes.length == 0 && 
                    <p>Ingen timer for denne dagen</p>
                }
            </form>
        </div>
    );
}