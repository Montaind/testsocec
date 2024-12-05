import { constitutionalQuestions } from './constitutional.js';
import { socialQuestions } from './social.js';
import { economicQuestions } from './economic.js';
import { politicalQuestions } from './political.js';
import { legalQuestions } from './legal.js';

export const questions = [
    ...constitutionalQuestions,
    ...socialQuestions,
    ...economicQuestions,
    ...politicalQuestions,
    ...legalQuestions
];