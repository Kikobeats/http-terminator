// @flow

import type {
  HttpTerminatorType,
  HttpTerminatorConfigurationInputType,
} from '../types';
import createInternalHttpTerminator from './createInternalHttpTerminator';

export default (configurationInput: HttpTerminatorConfigurationInputType): HttpTerminatorType => {
  return createInternalHttpTerminator(configurationInput);
};
