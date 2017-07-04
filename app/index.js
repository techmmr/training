import http from 'http';
import {generateTax} from './generateTax';
import {createList} from './createList';
generateTax(createList());
