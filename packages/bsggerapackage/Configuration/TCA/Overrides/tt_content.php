<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

ExtensionManagementUtility::addTcaSelectItemGroup(
    'tt_content',
    'CType',
    'sitepackage',
    'LLL:EXT:bsggerapackage/Resources/Private/Language/locallang_be.xlf:content_element.group.sitepackage',
    'after:default',
);
