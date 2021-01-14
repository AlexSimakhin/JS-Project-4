import Ajv from 'ajv';
import { createLeadSchema } from './schema';

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(createLeadSchema);

export { validate as createLeadValidator };