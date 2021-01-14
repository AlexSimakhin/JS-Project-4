import Ajv from 'ajv';
import { loginSchema } from './schema';

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(loginSchema);

export { validate as loginValidator };