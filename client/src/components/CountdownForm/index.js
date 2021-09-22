import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COUNTDOWN } from '../../utils/mutations';
import { QUERY_COUNTDOWNS, QUERY_ME } from '../../utils/queries';

const CountdownForm = () => {
    const [formState, setFormState] = useState({ countdownTitle: '', targetDate: ''});
    const [addCountdown, { error }] = useMutation(ADD_COUNTDOWN, {
        update(cache, { data: { addCountdown } }) {
            const { countdowns } = cache.readQuery({ query: QUERY_COUNTDOWNS });

            cache.writeQuery({
                query: QUERY_COUNTDOWNS,
                data: { countdowns: [addCountdown, ...countdowns] }
            });

            const {me} = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, countdowns: [...me.countdowns, addCountdown]}}
            });
        }
    });

    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        
        try {
            await addCountdown({
                variables: {...formState}
            });

        } catch (e) {
            console.error(e);
        }

        setFormState({
            countdownTitle: '',
            targetDate: ''
        });  
    };

    return (
        <div >
            <form className="user-form" onSubmit={handleFormSubmit}>
                <input 
                type="text" 
                placeholder="Title" 
                name="countdownTitle"
                onChange={handleChange}
                value={formState.countdownTitle}
                ></input>
                <input 
                type="date" 
                name="targetDate"
                onChange={handleChange}
                value={formState.targetDate}
                ></input>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default CountdownForm;