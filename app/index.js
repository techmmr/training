import http from 'http';
import {generateTax} from 'app/generateTax';
import {createList} from 'app/createList';

generateTax(createList);
