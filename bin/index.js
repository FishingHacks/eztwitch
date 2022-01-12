#!/usr/bin/env node

const chalk = require('chalk'),
	fs = require('fs'),
	commandLineArgs = require('command-line-args'),
	axios = require('axios').default;

import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

let db = new JsonDB(new Config('config', true, false, '/'));

const mainDefinitions = [ { name: 'command', defaultOption: true } ];
