export const signUpSchema = {
  $schema:     'http://json-schema.org/draft-07/schema#',
  title:       'Login',
  description: 'Schema for sign up entity',
  type:        'object',
  properties:  {
    name: {
      type: 'string',
    },    
    email: {
      type:   'string',
      format: 'email',
    },    
    phone: {
      type:   'string',
    },
    password: {
      type:      'string',
      minLength: 8,
    },
  },
  additionalProperties: false,
  required:             [ 'name', 'email', 'phone', 'password' ],
};
