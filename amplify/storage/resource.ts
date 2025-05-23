import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'amplifys3-211125605907',
    access: (allow) => ({
      'private/{entity_id}/*': [
        allow.guest.to(['read']),
        allow.entity('identity').to(['read', 'write', 'delete'])
      ],
      'public/*': [
        allow.authenticated.to(['read','write']),
        allow.guest.to(['read', 'write'])
      ],
    })
  });
