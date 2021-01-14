export const clientsSchema = {
  $schema:     'http://json-schema.org/draft-07/schema#',
  title:       'Client',
  description: 'Schema for client entity',
  type:        'object',
  properties:  {
    name: {
      type:   'string',
    },
    email: {
      type:   'string',
      format: 'email',
    },
    phone: {
      type:   'string',
      minLength: 10,
    },
    password: {
      type:      'string',
      minLength: 8,
    },
  },
  additionalProperties: false,
  required:             ['name', 'email', 'phone' ,'password' ],
};