import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resources'

const backend = defineBackend({
  auth,
  data,
  storage
});

export default backend;
