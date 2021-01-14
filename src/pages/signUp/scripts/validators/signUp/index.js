import Ajv from 'ajv';
import { signUpSchema } from './schema';

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(signUpSchema);

export { validate as signUpValidator };