import Ajv from 'ajv';
import { clientsSchema } from './schema';

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(clientsSchema);

export { validate as ClientValidator };