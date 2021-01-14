export const createLeadSchema = {
  $schema:     'http://json-schema.org/draft-07/schema#',
  title:       'createLead',
  description: 'Schema for create Leads data',
  type:        'object',
  properties:  {
    title: {
      type: 'string',
    },    
    amount: {
      type: 'number',
    },    
    pipeline: {
      type: 'string',
    },
    clientHash: {
      type: 'string',
    },
    status: {
      type: 'string',
    },
    deadline: {
      type: 'string',
    },
    comment: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required:             [ 'title', 'amount', 'pipeline', 'clientHash', 'status', 'deadline', 'comment' ],
};