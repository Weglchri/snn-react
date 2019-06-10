import { Meteor } from 'meteor/meteor';
import { readKerasModel } from '../imports/model/helper'

import '../imports/api/tasks.js';

Meteor.startup(() => {
  console.log("Hello World, I'm up and running!");
});
