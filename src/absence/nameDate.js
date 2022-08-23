import React, { useState } from 'react';
import { format, parse } from 'date-fns'

export default function NameDate({persons, handleNameDateSubmit}) {

    const [person, setPerson] = useState({id: 0});
    const [dt, setDt] = useState(new Date());


    const handleSubmit= (e) => {
        e.preventDefault();
        handleNameDateSubmit(person, dt);
    }

    const handlePersonSelect = (nameId) => {
        setPerson(persons[nameId]);
    }

    const handleDateSelect = (dateString) => {
        setDt(parse(dateString, "yyyy-MM-dd", new Date()))
    }

    return (
            <form onSubmit={e => {handleSubmit(e)}}>
                <label>Navn</label>
                <br />
                <select
                    name='name' 
                    type='text'
                    onChange={e => handlePersonSelect(e.target.value)}
                    value={person.id}
                >   <option key="0" value="0">
                {"Velg ansatt"}
            </option>
                    {Object.entries(persons).map((person, index) =>
                        <option key={index} value={person[1].id}>
                            {person[1].name}
                        </option>
                    )}
                </select>

                <br/>
                <label>Dato</label>
                <br />
                <input
                    name='dt' 
                    type='date'
                    onChange={e => handleDateSelect(e.target.value)}
                    value={format(dt,"yyyy-MM-dd")}

                />
                <br/>
                <input 
                    className='submitButton'
                    type='submit' 
                    value='Legg til' 
                />
            </form>
    );
}