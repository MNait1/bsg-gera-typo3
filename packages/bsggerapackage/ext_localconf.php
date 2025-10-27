<?php

declare(strict_types=1);

defined('TYPO3') or die();

/**
 * Add RTE zazu preeset configuration
 */

if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['zazu'])) {
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['zazu']
        = 'EXT:bsggerapackage/Configuration/RTE/zazu-rte.yaml';
}

