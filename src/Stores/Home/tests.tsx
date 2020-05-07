import IQuestion from 'Models/questions';
import IOption from 'Models/options';

const tests: IQuestion[] =
[
    {
        "id": "question1", 
        "text": "question text 1",
        "options": [ 
            { "id": "a", "text": "a", "selected": true },
            { "id": "b", "text": "b", "selected": false },
            { "id": "c", "text": "c", "selected": false }
        ] as IOption[]
    },
    {
        "id": "question2",
        "text": "question text 2",
        "options": [
            { "id": "a", "text": "a", "selected": false },
            { "id": "b", "text": "b", "selected": true },
            { "id": "c", "text": "c", "selected": false }
        ] as IOption[]
    }, 
    { 
        "id": "question3",
        "text": "question text 3",
        "options": [ 
            { "id": "a", "text": "a", "selected": false },
            { "id": "b", "text": "b", "selected": false },
            { "id": "c", "text": "c", "selected": true }
        ] as IOption[]
    },
    {
        "id": "question4",
        "text": "question text 4", 
        "options": [ 
            { "id": "a", "text": "a", "selected": true },
            { "id": "b", "text": "b", "selected": false },
            { "id": "c", "text": "c", "selected": false }
        ] as IOption[]
    }
]
export default tests;