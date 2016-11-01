// @flow

import type {LoggerFactory} from '../types';
import {create as createReport} from 'istanbul-reports';

class Reporter {
  constructor() {}

  onRunStart() {
    console.log('Reporter.onRunStart');
  }

  onBrowserStart() {
    console.log('Reporter.onBrowserStart');
  }

  onBrowserComplete() {
    console.log('Reporter.onBrowserComplete');
  }

  onSpecComplete() {
    console.log('Reporter.onSpecComplete');
  }

  onRunComplete() {
    console.log('Reporter.onRunComplete');
  }

  onExit() {
    console.log('Reporter.onExit');
  }
}

function makeReporter(
  config: Object,
  helper,
  logger: LoggerFactory,
  emitter
) : void {
  new Reporter(config, helper, logger, emitter);
}

makeReporter.$inject = ['config', 'helper', 'logger', 'emitter'];
export default makeReporter;
