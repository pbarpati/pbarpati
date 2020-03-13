import {generateTests} from '@fds/suit-interactions-base';
import * as path from 'path';

import './register-dependencies';

generateTests(path.resolve('./tests/'));
