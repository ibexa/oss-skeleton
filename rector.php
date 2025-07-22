<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

use Ibexa\Contracts\Rector\Sets\IbexaSetList;
use Rector\Config\RectorConfig;

return RectorConfig::configure()
   ->withPaths(
       [
           __DIR__ . '/src', // see if it matches your project structure
           __DIR__ . '/tests'
       ]
   )
   ->withSets(
       [
           IbexaSetList::IBEXA_50->value // rule set for upgrading to Ibexa DXP 5.0
       ]
   );
