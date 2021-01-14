export const loginSchema = {
  $schema:     'http://json-schema.org/draft-07/schema#',
  title:       'Login',
  description: 'Schema for login entity',
  type:        'object',
  properties:  {
    email: {
      type:   'string',
      format: 'email',
    },
    password: {
      type:      'string',
      minLength: 8,
    },
  },
  additionalProperties: false,
  required:             [ 'email', 'password' ],
};
