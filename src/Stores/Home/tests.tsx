import IQuestion from 'Models/questions';
import IOption from 'Models/options';

const tests: IQuestion[] =
[
    {
        "id": "question1", 
        "text": "question text",
        "options": [ 
            { "id": "a", "text": "b", "selected": true },
            { "id": "b", "text": "b", "selected": false },
            { "id": "c", "text": "c", "selected": false }
        ] as IOption[]
    },
    {
        "id": "question2",
        "text": "question text2",
        "options": [
            { "id": "a", "text": "b", "selected": true },
            { "id": "b", "text": "b", "selected": false },
            { "id": "c", "text": "c", "selected": false }
        ] as IOption[]
    }, 
    { 
        "id": "question3",
        "text": "question text2",
        "options": [ 
            { "id": "a", "text": "b", "selected": true },
            { "id": "b", "text": "b", "selected": false },
            { "id": "c", "text": "c", "selected": false }
        ] as IOption[]
    },
    {
        "id": "question4",
        "text": "question text2", 
        "options": [ 
            { "id": "a", "text": "b", "selected": true },
            { "id": "b", "text": "b", "selected": false },
            { "id": "c", "text": "c", "selected": false }
        ] as IOption[]
    }
]
export default tests;