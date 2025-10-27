.. sitepackage documentation master file, created by
   sphinx-quickstart on Sun Mar 31 20:01:01 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

####################################
bsggerapackage Documentation TYPO3 12
####################################

.. toctree::
   :maxdepth: 2
   :caption: Contents:::


******************
Indices and tables
******************

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`


*****
Whois
*****

As readme.rst file on bitbucket, this documentation looks not perfect. Not everything
is rendered correctly. Better check "Documentation/build/html/index.html"

:Version: 20240115
:Author: Thomas Hezel

|

***********************
Instructions and Issues
***********************

|

Open Tasks
==========
- build .md markdown files for bitbucket readme.md since readme.rst is not rendered correctly
- propper yaml sequence for CKEditor and usage inside DCE

.. note:: zazu.berlin Headline Sequence: ## ** = - ^ "

|

Changes and bugfixes for this Installation
==========================================

|

Changes for TYPO3 12.4.x
========================
- defined('TYPO3') or die('Access denied.'); replaces "TYPO3_MODE", produces white page and errores in empty cache and database check
- ext_emconf.php can be removed for composer mode
- the extension icon is now in Icons and needs the name: Extension.svg or png
- extensions are in vendor/typo3/cms/extensions/ and not in typo3conf/ext/ any more
- the extension folder "ext" is not needed any more
- config.php is now paralell to public folder in config/system/settings
- ENABLE_INSTAL_TOOL goes in var/transient/ENABLE_INSTALL_TOOL
- vendor/bin/typo3 list (comand to list all commands, kept fixfoldersturcture and other scripts in composer.json)
- sitepackage switched from "master" to "main" branch
- include TypoScript from extensions is now in TypoScript/Edit TyposScript Record menu
- changed TypoScript to combine backendtemplate with layout template
- JavaScript now TypeScript
- DCEs have svg icons in fileadmin

|

Changes for TYPO3 11.5.0
========================

- file ext_emconf.php is with composer optional and can be omitted
- cookies extension now with categories: one must still tick the bootstrapFallback in the Constants section!
- cookies extension "delete cookies" is not working see blog article
- changed some css for cookies 8 for T11
- change conditon from general cookie to statistic cookie

new grid layout (2023)
----------------------

.. code-block:: css

  /*======= 320  padding l,r  15  = 290 ===*/
  /*======= 576 ========= MEDIA QUERIES ======= border 15 = 546 ===*/
    @media only screen and (min-width: 576px) {}
  /*======= 768 ========= MEDIA QUERIES ======= border 15 = 738 ===*/
    @media only screen and (min-width: 768px) {}
  /*======= 990 ======== MEDIA QUERIES ======== border 15 = 960 ===*/
    @media only screen and (min-width: 990px) {}
  /*======= 1398 ======= MEDIA QUERIES ======== border 30 = 1338 ==*/
    @media only screen and (min-width: 1398px) {}
  /*======= 2512 ======= MEDIA QUERIES ==== border 151-45 = 2396 ==*/
    @media only screen and (min-width: 2512px) {}


Changes for TYPO3 10.4.3
========================

- typoscript conditons from [globalVar = TSFE:id = 2]  to [page["uid"] == 2] more information here: https://docs.typo3.org/m/typo3/reference-typoscript/master/en-us/Conditions/Index.html#conditions
- typoscript condtions language ID [globalVar = GP:L = 1] is now [siteLanguage("languageId") == "1"]
- in ext_localconf.php for the RTE Global array must be the extensions name and not the the $_EXTKEY variable, same for RTE the variable is not known here
- in DCE where you select something e.g. h2-5 the second line after "select" must be "<renderType>selectSingle</renderType>"
- in ext_emconf.php this line is added as a dependencie: 'rte_ckeditor' => '10.4.0-10.4.99', same for composer.json : "typo3/cms-rte-ckeditor": "^10.4",
- in news template Detail you must ommit the if condition: "n:social-dis" delete
- without a site setting in the BE it doesn't work any more
- form TYPO3 9 to TYPO3 10 changes in tables as usual with Maintenance
- form in typoscript setup needs the "module.tx_form { ..." so the form definition is found in the extension


|

powermail
=========

- in php TYPO3 Installation-Wide Option set for sendmail a default Sender email and Sender name
- or better set in TypoScript default sender and default referrer

|

general changes
===============

- 20211021 removed config language from typo3 setup since it is now inside yaml


|
|

**********************************
Part 1 Documentation bsggerapackage
**********************************

x-z-z-x-package is the start-package for zazu.berlin TYPO3 websites

|

A. Start a new sitepackage (new: preferable put it into DDEV local_packages)
============================================================================
1. duplicate the x-zzxpackage
2. move the copy to the folder DDEV local_packages of the DDEV installation
3. change the name to the new name, replace "x-z-z-x" (name is without the hyphens) of the folders
4. delete the git files
5. change inside with textedit NEWpackage-workspace.code-workspace
6. open in VSC the workspace
7. replace in files with VSC (313 results in 33 files) "x-z-z-x" to new name (x-z-z-x without the hyphens)
8. correct the classes part at the end of composer.json for the extension, both words start with a capital letter: "Zazuberlin\\bsggerapackage\\": "Classes/"
9. correct the classes part in ext_emconf.php to capital letters like above
10. change the sftp.json file to the new sftp upload destination at the place where the site is hosted
11. make a new project on bitbucket, don't include a README or a .gitignore repository must be empty, main branch is "master"
12. in VSC then: ``git init``
13. ``git add .``
14. ``git commit -m "initial commit"``
15. ``git branch release``
16. ``git remote add origin git@bitbucket.org:thomas-hezel/bsggerapackage.git`` (this version works with ssh and key)
17. ``git push -u origin main`` (new from TYPO3 12 master branch now main)

|

Aa. The folder "Initialisation" for getting fileadmin files from the x-z-z-x-Installation - not tested
------------------------------------------------------------------------------------------------------

1. adding a folder Initialisation to the folder bsggerapackage makes it possible to transfer files to the fileadmin
2. the folder will be in the fileadmin in a masterfolder with the name "bsggerapackage"
3. it is also possible to load "data.t3d" to the root level


|

B. Start a new TYPO3 website: Full Hardware Server Setup
=========================================================
1. Terminal: make a folder where everything goes to
2. give the folder the rights "2775" and the owner "yourTerminalUser:www-data" ("2" in front is important!)
3. # Download the Base Distribution, the latest "sprint" release (10): composer create-project "typo3/cms-base-distribution:^11.5" my-new-project
4. compare the two composer.json and make the final one
5. put the basic composer.json into this folder from the folder "Extras"
6. run inside this folder "composer update"
7. give the folder with -R again new rights and owndership see above (otherwise it will give you a white page in the Browser
8. cd inside the public folder and do: "touch FIRST_INSTALL"
9. get your Database connection details (user and password) / you can create a DB or let TYPO3-FIRST_INSTALL do it
10. with the Browser navigate into the public folder and do TYPO3 first install …
11. if you followed the above you should end up in the new backend

|

C. DDEV setup instead of a full server
=======================================

see also TYPO3:
`<https://typo3.com/blog/tutorial-get-a-local-typo3-v10-installation-with-no-effort>`_

and Using DDEV-CLI:
`<https://ddev.readthedocs.io/en/stable/users/cli-usage/>`_

1. Make a new directory on the coding computer inside the DDEV folder (Name starts with capital letter e.g. "Abc", same name as sitepackage name first part e.g. "abcpackage")
2. cd into the folder with the terminal and do "ddev config"
3. run the create "ddev composoer create" command

.. code-block:: bash

    ddev config --project-type=typo3 --docroot=public --create-docroot=true
    ddev composer create typo3/cms-base-distribution:"^12.4" --prefer-dist

    # don't use "dev-master" use "^12.4" or other version, "dev-master" would not meet constraints of all sys-extensions and would be a latest
    # version beyond the LTS
    # for host entrys in the system ddev needs the sudo password of the account you are working on

4. to recreate the AdditionalConfiguration.php file which got deleted in the last step we have to do ddev start

.. code-block:: bash

    ddev start

5. with TYPO3 12 the low level system package must be installed by hand

.. code-block bash

  ddev composer require typo3/cms-lowlevel

6. First install for TYPO3 needs the FIRST_INSTALL file in public

.. code-block:: bash

    touch public/FIRST_INSTALL

7. go to the browser and open the site on https://fliesensite.ddev.site
8. go through the TYPO3 setup process (database credentials will be skipped)
9. create a folder "local_packages" for the sitepackage to be manageable on spot
10. copy the [project]composer.json of the x-z-z-x-package into the new installation and change the "x-z-z-x" (without the hyphens) with the new name (3 occurrences)
11. make sure that the project composer.json includes in "repositories" the "./local_packages"
12. sometimes dev-master (it is still master for composer) for the sitepackage is not working in local_packages composer, change to a version number for the sitepackage (as in the sitepackage composer.json)
13. duplicate the x-z-z-x-package (without the hyphens) as described in section "A" into a new sitepackage, if not already done
14. "composer update" to get all extensions loaded (it will symlink from the local_packages)
15. export the last version of x-z-z-x-package database with "ddev export-db" or "ddev snapshot" (see below)
16. import the exported database from x-z-z-x-package, new password for admin is the IBM-server password with a "!" added from TYPO3 12 onwards
17. clear cache
18. add Site Configuration
19. sometimes include static template for sitepackage (at the end of all templates)
20. add files to fileadmin: test images and the Icons for DCE and map marker for the leaflet map
21. change in the "form" plugin the used template to the new sitepackage form template
22. start coding the new site

B2a. different db export with snapshot (above point 14.)
--------------------------------------------------------

1. export the database with ddev snapshot" and it goes into this folder::

   /Users/thomas/CODE/DDEV-Projekte/fliesensite/.ddev/db_snapshots/fliesensite_20220317104325

2. move the snapshot in the new project in .ddev/db_snapshots/ (with the db_snapshots folder)
3. import snapshot in the new ddev-site: ddev snapshot restore [snapshot_name] [flags]
4. the new password after db-import will be the one of fliesen, this is fine for the website building time

.. code-block:: bash

    # normal database export and import
    cd /project_base_folder_of_fliesen
    ddev export-db > /tmp/db.sql.gz
    ddev import-db < /tmp/db.sql
    # didn't work with .gz first unpack!


.. code-block:: bash

    # ddev snapshot for database export out of fliesen (will be in .ddev/db_snapshots)
    # !import of the snapshot didn't work so far with MariaDb 10.4!

    ddev snapshot

    # ddev in the new site to import the snapshot, but first **move the fliesen-snapshot into .ddev/db_snapshots**
    # if it is alread running you must restart ddev, after moving the snaps into the folder
    # zipped files seem not to work

    ddev snapshot restore fliesensite_2022031


B2b. Change to SSH for connecting with VSC to Bitbucket
--------------------------------------------------------


1. made a new key on the laptop with ssh-keygen
2. called it Bitbucket, got "Bitbucket" and "Bitbucket.pub"
3. connected this key to ssh `<https://support.atlassian.com/bitbucket-cloud/docs/set-up-personal-ssh-keys-on-linux/>`_
4. made a cofig file inside ~/,ssh on the laptop
5. entered Bitbucket in the config file and the new key
6. copied the key to Bitbucket user settings (not project settings)
7. changed inside VSC the destination for git

.. code-block:: bash

  git remote set-url origin git@bitbucket.org:thomas-hezel/bsggerapackage.git

8. now ssh with key is used to connect to Bitbucket, no password must be provided

C. Errors when setting up a new page
====================================

1. make sure that all templates are included of the extensions in the main template, sitepackage goes last underneath
2. database exchange from the x-z-z-x-package brings a new admin password (the password from x-z-z-x-package, the standard development password)


D. Mittwald preparations
========================

1. new 2022 Mittwald provides a composer TYPO3 setup
2. import a database into Mittwald hosting `mittwald info <https://www.mittwald.de/faq/administration/datenbank/datenbank-exportieren-und-importieren>`_
3. before open the zip compression ``gzip -d file.gz`` and upload it via FTP to Mittwald (e.g. folder files)

.. code-block:: bash

    mysql -u'Datenbank-Benutzer' -p -h'Hostname/Datenbank-Server' 'Datenbank' < Name-der-Datenbank-Datei.sql
    mysql -u 'p123456' -p -h'db001242.mydbserver.com' 'usr_p123456_1' < dump.sql

4. Extra in case it is needed export database at Mittwald

.. code-block:: bash

    mysqldump --opt --no-tablespaces -u'Datenbank-Benutzer' -p -h'Hostname/Datenbank-Server' Datenbank > Name-der-Datenbank-Datei.sql


E. TYPO3 Setup
==============

1. Sites: "Add new site configuration for this site" -> do all settings
2. go to Home and test it - you should see the default header and the footer

F. Admin Tools section
======================

1. Manage Language Packs -> update
2. Settings -> Debug Settings -> go from "live" to "Debug" -> press Activate
3. Check "Password hashing settings" should be "Argon2d" - you need to make new admin pw after moving
4. Configure Installation Wide Options -> put SYS.systemLocale = de_DE.UTF-8
5. Environment - Directory Status: check rights
6. #show errors on frontend - must be set additional to debug, see next line
7. avoid white page at error in typoscript: config.contentObjectExceptionHandler = 0

G. Some dirty work – to get your just DCEs from another TYPO3 installation
==========================================================================

1. export from your base installation with phpMyAdmin "tx_dce_domain_model_dce" and "tx_dce_domain_model_dcefield", uncheck "validate foreign key"
2. delete the two tables in the destination, your new website
3. import the exported .sql file, uncheck "validate foreign key" for import
4. go to Admin Tools -> Analyze Database Strukture: should be "green" if you use the same versions of extensions and TYPO3.
5. go to SYSTEM -> DB check -> Manage Referenz Index: "Update reference index" / will be very "red" -> update

H. Sitemap plus Sitemap news
============================

1. extend the site-configuration-yaml with the code in the folder Extras of the sitepackage
2. add the static template XML sitemap (SEO)
3. put in the TypoScript the numbers of news folder and single page
4. check under your-domain.de/sitemap.xml
5. use Google search-tools to add the sitemap to Google
6. https://docs.typo3.org/p/georgringer/news/9.2/en-us/Tutorials/BestPractice/Seo/Index.html#seo

I. Cookies Extension
====================

1. in constans tick the bootstrap fallback box
2. don't tick the delete cookies option

J. felogin
==========

1. felogin needs a sender email in settings or in the php settings as a general setting for sender email and name

K. .htaccess
============

1. take it form TYPPO3 12
2. add redirects https www
3. enable compression
4. enable compression in php settings

L. favicons
============

1. generate favicons from the logo https://realfavicongenerator.net/

|
|
|

*****************
Part 2: Pre-Stuff
*****************

|
|

Sphinx for .rst reStructuredText Documentation
==============================================

Build a new directory ::

    mkdir Documentation
    cd Documentation
    sphinx-quickstart

more details:
`<https://docs.readthedocs.io/en/stable/intro/getting-started-with-sphinx.html>`_

change custom.css
put it in source/_static/
put the logo also in source/_static/
inside conf.py ::

    html_theme = 'classic'
    html_logo = '_static/logo-zazu-berlin.gif'
    html_style = 'custom.css'

    language = 'en'

If your are not setting the language you get an error::

   ``"<frozen importlib._bootstrap>", line 961, in _sanity_check``
   ``ValueError: Empty module name``


command to render html - it will be in build/html/index.html
change to a terminal window, go to Documentaion and then "make"
the rst2pdf has bugs but is ok to read, the main thing ist the html version

.. code-block:: bash

    cd Documentation

    make html

    #the long way also works / -b stands for a builder
    sphinx-build -b html sourcedir builddir

.. note:: zazu.berlin Headline Sequence: ## ** = - ^ "

|

Create a PDF with Sphinx
========================

20230323 new installed with sudo apt install rst2pdf on Linux

To get a software to create pdf from rest

.. code-block:: bash

  $ pip install --user rst2pdf

to build the pdf

.. code-block:: bash

   rst2pdf Documentation/source/index.rst Documentation/build/documentation.pdf

|

Composer
========

Extension has composer.json

plus a file for TYPO3 composer install [project]composer.json, this has to got into
the base folder for the TYPO3 project (delete the "[project]".
It will install all files and TYPO3 in a folder called public.
This folder needs later on write permissions for the server-process and ftp etc.

.. note::

  Extensions should be installed through root composer and not as dependencies of the sitepackage - zazu decision.

.. code-block:: bash

  composer install

or newer version (dont't create a project folder on the server, composer will do it)

.. code-block:: bash

composer create-project typo3/cms-base-distribution YourNewProjectFolder

and

.. code-block:: bash

  composer update

The composer.json inside bsggerapackage should install all that zazupackage needs.

This will start getting an extension.

.. code-block:: bash

  composer require vendor/extension


.. note:: If you get problems with composer updating or "not getting updates" or some similar warnings: DELETE the .composer in your home directory of the server.

Versions
--------

- "dev-main" will install the latest from main branch
- "^" - means only inside this main version
- "vendor/name" will install the latest version with a full annotated tag


Installing TYPO3 composer on a hardware server
----------------------------------------------

- the directory must have 775
- since the terminal user that executes composer is terminalUser:terminalUser, the group should be changed for the web-process (terminalUser:www-data)

|

Directories and Files of the bsggerapackage
==========================================

| .vscode
|     settings.json - *for vsc project level* (*above is workspace then user*)
|     sftp.json - *for sftp vsc-extension connect via sftp to the server*
|     tasks.json - *start a VSC task to build on save for TypeScript*
|
| Classes
|     Controller - *is empty / has .gitkeep*
|     Domain - *is empty / has .gitkeep*
|     Model - *is empty / has .gitkeep*
|     Repository - *is empty / has .gitkeep*
|     ViewHelpers - *is empty / has .gitkeep*
|     .htaccess *rquire all denied, blocks Apache to get access to the files*
|
| Configuration
|     Form-yaml
|         Forms
|             kontakt.form.yaml *the form that is used on the contact page*
|         form-finisher.ymal *response after sending the form*
|         form-setup.yaml *paths to the layout, templates and partials of form*
|
|     RTE
|         zazu-settings-RTE.yaml
|         zzz-Default-RTE-package.yaml - the original yaml from TYPO3 S. Kott
|
|     TCA
|         Overrides
|             pages.php - *registers the file* **All.tsconfig** *witch then includes all* **TsConfig** *files*
|             sys_template.php - *puts the static template files with the TS in the BE list for including*
|
|     TsConf
|         Page
|             Mod
|                 WebLayout
|                     BackendLayouts
|                         package-bel.tsconfig - *config for the backend layout, generated in the BE*
|                     BackendLayouts.tsconfig - *includes the above file and all in the folder*
|         All.tsconfig - *include file for all .tsconfig below*
|         RTE.tsconfig - *the new zazu preset for the RTE in the DCEs if you choose RTE you can select "zazu"*
|         TCEFORM.tsconfig - *empty*
|         TCEMAiN.tsconfig - *this is to choose news different selfmade modules to use*
|
|     TypoScript
|          Helper
|              dynamicContent.typoscript - *lib to get stuff from tt_content left, middle etc.*
|              news.typoscript - *all typoscript for news*
|          constants.typoscript - *some are with #cat to work on in the BE, some not*
|          setup.typoscript - *this is the* **main TypoScript**
|          .htaccess - *rquire all denied, blocks Apache to get access to the files*
|
| Documentation
|     build
|         doctrees
|             - different files *generated by Sphinx*
|         html
|             - different files *generated by Sphinx, has sub-files: usually HTML,CSS,Js files*
|         documentation.pdf *genereated by rest2pd documentation.pdf*
|     source
|         _static
|             custom.css - *css that is moved into build/_static while "make"*
|             logo-zazu-berlin.gif - *logo to put into the build*
|         _templates
|             - *empty*
|         config.py - *python config file for the make process*
|         index.rst - **this is documentation source file**
|     Makefile - *the make script*
|
| Extras
|     [porject]composer.json - *the composer json for the TYPO3 project for the server base directory*
|     [site-configuration]config.yaml - *the yaml of site-config - extended with routeEnhacer for news config url*
|     code-on-hold - *code that might be usefull, just a storage*
|     datenschutz.html - *the GDPR base file*
|     impressum.html - *the GDPR base file*
|
| Resources
|     Private
|         Language
|             locallang_fe.xlf – *language file for the frontend, things out puted*
|             locallang_be.xlf – *language file for the backend*
|             de.locallang_fe.xlf – *language file for the frontend, things out puted - German*
|             de.locallang_be.xlf – *language file for the backend - German*
|
|         Layouts
|             ContentElements
|                 Fluid-Styled-Content
|                     Default-orig.html  - *original Layout file for fluid standard elements*
|                     Defaul.html  - *removed the outside div container for all fluid-content elements*
|
|              Form - *empty*
|
|              News - *empty*
|
|              Page
|                  Default-simple.html - *just the main menu and render section "main"*
|                  Default.html – *the top of the page file, renders section "main" in Default.html Template* **MAIN Layout**
|
|         Partials
|             ContentElements - *no need - we use DCEs / has .gitkeep*
|
|             Form
|                 Field
|                     Field.html - *standard form field - changed postion of label*
|
|             News
|                 Detail
|                       Shariff.html - *whith sozial media to display at the bottom of news*
|
|                 List
|                       downloadItem.html - *Gesitrel download sections*
|                       Item-orig.html
|                       Item.html
|                       ItemBrowseList.html - *media and news slider*
|                       ItemLatest.html - *usaually on Home or in the footer*
|
|             Page
|                 Navigation
|                     BreadcrumbItem.html – *one li-element for breadcrumb imported from the main page template*
|                 Shariff.html – *which social media for shariff at the bottom of every page*
|
|         Templates
|             ContentElements - *.gitkeep*
|             Cookies/Main - *.gitkeep*
|             Form
|                 Finisher
|                    Confirmation
|                       Confirmation.html - *adding the zazu wrapper div*/
|                 Form.html - *adding the zazu wrapper divs and headline*
|
|              News
|                  News
|                      Detail-orig.html
|                      Detail.html
|                      List-orig.html
|                      List.html
|                      zazuList.html - *older version of zazu list with all the template options*
|             Page
|                 Default.html - *the MAIN Template with section "main" rendered by Layout*
|                 Two-Columns-simple.html *a real two column layout - two different data base tables*
|                 Two-Column.htm - *main two-column in this case same like Default.html, auto chosen by backendLayouts*
|     Public
|         Css
|             Min – *minimalized css, for production mode*
|             Src – *normal css*
|                 01-normalize-801.css – *from the Normalize project version 8.0.1*
|                 02-boilerplate-701.css – *some basic settings from Boilerplate version 7.0.1*
|                 03-basic-styles.css – *from zazu: fonts, headlines, wrapper etc.*
|                 04-default-layout.css – *layout css: menu, header, IMPORT all other css*
|                 05-default-template.css – *template css: footer*
|                 06-dce.css – *this is the content through DCEs*
|                 07-all-content.css – *content not coming through DCEs*
|                 rte.css – *css for the RTE CKEditor*
|                 zzz_css-depot.css *some css stuff that could be used later or again*
|
|        Ext - *all kind of web extensions jQuery player etc.*
|             FlexSlider-2.7.2
|                 *all FelxSlider files*
|             Leaflet-1.9.3
|                 *all Leaflet files*
|
|         Fonts – *all font folders*
|
|         Icons – *basically BE icons plus favicons, plus sitepackage icon*
|
|         Images – *images that belong directly to the template, content is in fileadmin*
|
|         JavaScript
|             Min – *minified versions*
|             Src – *normal js, while under construction*
|                 leaflet-zazu.js
|                 package-site.js
|             TypeScript
|                 package-site.tsconfig - *the package JS in TypeScript form*
|                 tsconfig.json - *TypeScript settings file for tsc*
|
| .editorconfig – *give different editors the same behavior*
| .gitignore – *things that are not relevant for the public*
| composer.json – *this is the json for this Extension!*
| ext_conf_template.txt – *empty,setting that can be accessed in the TYPO3 backend-settings*
| ext_localconf.php – *IMPORTANT includes All.tsconfig and RTE Default.yaml - from T12 it can also be in /Configuration/page.tsconfig*
| ext_tables_static+adt.sql – *empty no database tables for sitepackage*
| ext_tables.php – *empty core: mostly no longer needed, TCA is in Configuration*
| ext_tables.sql – *empty sql table definitions*/
|
| readme.md - *copy of the index.md file to show documentation in Bitbucket - converted .rst to .md online*
|
|

**********
Main-Stuff
**********

|
|

Fluidtemplate setup
===================

.. code-block:: typoscript

   // Part 1: Fluid template section
   10 = FLUIDTEMPLATE
   10 {
        # Template names will be generated automatically by converting the applied
        # backend_layout, there is no explicit mapping necessary anymore.
      templateName = TEXT
      templateName {
            cObject = TEXT
            cObject {
                data = pagelayout
                required = 1
                case = uppercamelcase
                split {
                    token = pagets__
                    cObjNum = 1
                    1.current = 1
                }
            }
            ifEmpty = Default
      }
      //second line is constants $page the "page-object-variable"
      templateRootPaths {
         0 = EXT:bsggerapackage/Resources/Private/Templates/Page/
         1 = {$page.fluidtemplate.templateRootPath}
      }

      partialRootPaths {
         0 = EXT:bsggerapackage/Resources/Private/Partials/Page/
         1 = {$page.fluidtemplate.partialRootPath}
      }

      layoutRootPaths {
         0 = EXT:bsggerapackage/Resources/Private/Layouts/Page/
         1 = {$page.fluidtemplate.layoutRootPath}
      }
   }

The template names in the Backendlayout must match the template files "default" and "two-columns"
convert to "Default.html" and "Two-columns.html"

|

Old version direct to the template file
=======================================

.. code-block:: typoscript

   10 = FLUIDTEMPLATE
   10 {
   template = FILE
   template.file = fileadmin/Resources/Private/Templates/mainTemplate.html


   }

|

pagets__site_package_default
============================

\pagets__\  is a pre-variable for backendlayout names set in the backendlayout
it is called with the function: PageTsBackendLayoutDataProvider

To set the TS-for backendLayouts not in a database-folder of the page-tree
but in files one has to make a file xx.tsconfig and then register it in a new
page.php file

Register static Page TSconfig files

Register PageTS config files in Configuration/TCA/Overrides/pages.php
of any extension,
which will be shown in the page properties (the same way as TypoScript
static templates are included):


.. code-block:: php

  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'extension_name',
    'Configuration/TSconfig/Page/myPageTSconfigFile.txt',
     'My special config'
   )

All other methods that I found online didn't work!!!!
Kott has an additional comand in the ext_localconf.php but it seems not necessary!

The trick is to load one file in TsConf/Page/All.config
that has the include commands for all the other files in the folder

Starting with TYPO3 v12.0 page TSconfig in a file named Configuration/page.tsconfig in
an extension is automatically loaded during build time.

|

CONSTANTS
=========

Constants are set in the file: "Configuration/TypoScript/constants.typoscript"

then

inserted with a constant placement '$NAME/path ...' in setpu.typoscript

if

in constants.typoscript the comment after # is semantic it will be
in BE-Template-Constant-Editor for setting through the BE user of TYPO3

can be used also then in Fluidtemplates "{name.name}" !

|

RTE CKEditor configuration and individual config activation
===========================================================

Good introduction
`<https://www.nitsan.in/de/blog/post/einfache-schritte-zur-konfiguration-des-ckeditors-in-typo3>`_

Graphical interface to style the toolbar of the CKEditor
`<https://ckeditor.com/latest/samples/toolbarconfigurator/index.html#basic>`_

Homepage of the ckeditor
`<https://ckeditor.com/docs/ckeditor4/latest/guide/dev_installation.html>`_
`<http://docs.ckeditor.com/#!/api/CKEDITOR.config>`_


ext_localconf.php
    register with globas config_vars the preset
    "zazu" with a file source and name
    EXT:zazupackage/Configuration/RTE/zazu-settings-RTE.yaml

Configuration/RTE/Default-RTE-zazu.yaml
    file with the configuraton based on the default-setup changed for zazupackage

TsConfig
    Page/RTE.tsconfig will be included in All.tsconfig
    is setting the preset for all pages TSConfig to
    RTE.default.preset = zazu
    To change for a single page the preset must be written directly in the page TSConfig


CKEditor
--------
1. Step one: tags you can use to format ('a' doesn't work here!)

.. code-block:: yaml

    editor:
        config:
            format_tags: "p;h1;h2;h3;h4;h5;pre;address;div"



2. Menues to be shown

.. code-block:: yaml

   editor:
       config:
           toolbarGroups:
               - { name: clipboard, groups: [clipboard, undo] }
               - "/"
               - { name: styles }


3. add classes

.. code-block:: yaml

   editor:
       config:
           stylesSet:
               - { name: "quote-style", element: "p", attributes: { class: "quote-style"}}
               - { name: "Load More Button", element: "a", attributes: { class: "load-more"}}
               - { name: "More Content", element: "div", attributes: { class: "more-content"}}


4. To have a preview inside the CKEditor of a style, the style must be set in the rte.css

.. code-block:: yaml

    editor:
        config:
            contentsCss: "EXT:zazupackage/Resources/Public/Css/Src/rte.css"

shows a class or a styling inside the CKEditor in the intended way and
is not effecting output!!! if rte.css is not added to 04-default-layout.css

|

System Extension Form
=====================

.. warning::

    (outdated in 2023) On a new setup from x-z-z-x-package you must change with phpMyAdmin in tt_content -> pi_flexform form zazupackage to YOURpackage!
    Otherwise there is a Call to userfunct = 0 in the BE and in the Referenzindex of the database!

Steps:
    1. add static Template (easily forgotten)
    2. add fluid_styled_content static Template (not sure whether realy needed)
    3. create /Configuration/Form-yaml/form-setup-zazu.yaml -> Path own Templates and Paritals
    4. TypoScript to tell the plugin (FE) and the module (BE) where to find the setup
    5. create Folder in Form-yaml with a Formdefinition created in BE -> transfer in EXT:
    6. add path to EXT: ... Forms/zazukontakt.form.yaml in form-setup-zazu.yaml

distinguish between:
    - plugin and module
    - Forms.yaml and form.config.yaml


.. note:: Add additional multi setups in the YAML can be made on the corresponding intend line!


Good Link for Howto own form.yaml new storage place:
  `<https://jweiland.net/typo3/codebeispiele/typoscript/ext-form-speicherort-der-formulare-festlegen.html>`_

Confirmation Message
--------------------

Confirmation is not found directly in EXT:zazupackage through setup Template pathes.

.. note:: Confirmation has to be set inside the zazukontakt.form.yaml setup!

.. code-block:: yaml

    options:
      message: 'Vielen Dank für die Nachricht, wir werden uns umgehend bei Ihnen melden!'
      contentElementUid: ''
      templateName: Confirmation.html
      templateRootPaths:
        20: EXT:zazupackage/Resources/Private/Templates/FormTemplates/Finishers/Confirmation/
    identifier: Confirmation


Modifications and settings
--------------------------

Templates modified
    - Form.html - surrounding divs
    - add kontakt-fields div for column
    - h2 Form name from EXT:LLL

Partials modified
    - Field.html - label class, div around input classes
    - label below imput
    - class getting field names in input classes: <div class="{element.properties.containerClassAttribute} {element.properties.containerClassAttribute}-{element.uniqueIdentifier}">

zazukontakt.form.yaml
    - deleted form label, to get it outside of kontakt fields for 2 coumun layout


To avoid that the headline (Form Name) is getting the two column out of balance
the h2 must go on top and the fields must get a div for the css column setting.
Form is rendering the fields and the label of the form (headline) in one go, so
the headline label has to be omitted in the setup.yaml and put inside the template
with a LLL Headline Name reference.


CSS column bugs
---------------

CSS avoid column break inside an element inconsistency in browsers ::

    .kontakt-fields {
        column-count: 2;
        column-gap: 80px;
        margin: 0;
        -webkit-column-break-inside: avoid;
        break-inside: avoid;
        break-inside: avoid-column;
    }

    .kontakt .form-group {
        -webkit-column-break-inside: avoid;
        -moz-column-break-inside: avoid;
        column-break-inside: avoid;
        break-inside: avoid-column;
        page-break-inside: avoid;
        display: inline-block;
    }


|

Leaflet map and OpenStreetmap
=============================

Settins in DCE (.js) and setup.typoscript (css)
-----------------------------------------------

in the DCE 101 template
    - full name of the sitepackage
    - coordinates center of the map, lati - longi
    - location 1, lati1 - longi1
    - location 2, lati2 - longi2
    - JavaScript from the Extension and from zazu plus Extension CSS loaded through "f:asset"

in *x-z-z-xsitepackage/Resources/Public/JavaScript/Src/leaflet-zazu.js*
    - leaflet-zazu.js - added in DCE 101 with f:asset
    - zoom factor
    - url of the pointer-logos "leaf-green.png", "leaf-shadow.png" - they are now in fileadmin
    - on pointer-logo-click message
    - osm or mapbox maps
    - jQuery activate button DSGVO - runs leaflet map

in Resources/Public/Ext/Leaflet-1.x.x
    - leaflet.js -> TYPO3 12, new as f:asset in DCE
    - leaflet.css -> TYPO3 12, new as f:asset in DCE


DSGVO-Sequence

  1. DCE creates js "var lati", js "var longi" etc.
  2. leaflet.css - loaded for the page with f:asset in DCE
  3. leaflet-zazu.js - loaded for the page with f:asset in DCE
  4. leaflet-zau.js - activates function with DSGVO button onclick
  5. leaflet-zazu.js - function loads the variable lati/longi
  6. leaflet-zazu.js - hides DSGVO button, and static map background

|

jQuery and JavaScript
=====================

jQuery
    is included in the Templates/Page/Default.html (or whatever Template) at the bottom
    because Extensions (e.g. shariff) go usually on the top of "includeJSFooter"
    so would be before jQuery. And if jQuery is in the header Google is complaining:
    "no code before content"


JavaScript
    is included with "includeJSFooter" in setup.typoscript (only there TYPO3 will compress it)

|

News tx_news and news slider on Home called without news-plugin but TyposScript
===============================================================================

Changed Templates and Partials
------------------------------

Templates
   - Templates/News/News/Detail.html (3 divs added, prev-next to bootom)
   - Templates/News/News/Detail.html (moved back-link into div of main text)
   - Templates/News/News/List.html (if template 9 or 10 etc.)



Partials
   - Partials/News/Detail/Shariff.html (choose social medias)

Partials/List
   - Item.html
   - new: ItemBrowseList.html (for the news FlexSlider)
   - new: ItemLatest.html (the layout 9 for Latest in the footer)
   - new: downloadItem.html (the layout for Gesitrel Downloads with news)

.. warning:: static templates - news must be included BEFORE zazupackage otherwise news settings in setup.typoscript will not come through

1. TypoScript/Helper/news.typoscript .lib = construct news List for slider
2. add DCE 26 news slider to home
3. make pages for "all news" and "single news" install plugin news on the pages
4. special list-template for the news slider


add to 2.
a. the lib inserts the news (like a plugin), and creates a template-case
b. in the fluid-template you refer to the case::

.. code-block:: fluid

|    <f:if condition="{settings.templateLayout} == 10">
|        <f:then>
|            <f:render partial="List/BrowseList" arguments="{newsItem: newsItem,settings:settings,iterator:iterator}" />
|        </f:then>
|        <f:else>
|            <f:render partial="List/Item" arguments="{newsItem: newsItem,settings:settings,iterator:iterator}" />
|        </f:else>
|    </f:if>


c. if you want to use the distingtion in the regular plugin you must add it to the TSConfig of the pages


News FlexSlider
---------------

In the Templates/News/News/List.html choose the Partial for the FlexSlider-News

.. code-block:: fluid

    <f:if condition="{settings.templateLayout} == 10">
        <f:then>
            <f:render partial="List/ItemBrowseList" arguments="{newsItem: newsItem,settings:settings,iterator:iterator}" />
        </f:then>



Inside Partials/News/List/ItemBrowseList.html is a cycle viewhelper that puts allways 2 news in on <li></li>

.. code-block:: fluid

    <f:cycle values="{0: '<li>', 1: ''}" as="lis">
        <f:format.raw>{lis}</f:format.raw>
    </f:cycle>

    #partial here

    <f:cycle values="{0: '', 1: '</li>'}" as="endLis">
        <f:format.raw>{endLis}</f:format.raw>
    </f:cycle>


    <f:if condition ="{iterator.isLast}" >
        <f:if condition ="{iterator.isOdd}">
            </li>
        </f:if>
    </f:if>


News prepeared cases for List
-----------------------------
Set in TCEMAIN.tsconfig for the plugin ::

    tx_news.templateLayouts {
        9 = newsLatest
        10 = caseListBrowse
        11 = caseDownloads
    }


About special list-templates for news:

    `<https://die-schwarzwald-werbeagentur.zazudesign.de/internet-programmierung/news-latest-typo3-extension-news-or-tx_news.html>`_


Detail and List view image size
-------------------------------

#the plugin-settings are sufficient to render the right image size - render - but news original css (css news basic) .news-single .article .news-img-wrap is limiting to 282 px.

.. code-block:: typoscript

   plugin.tx_news {
      settings {
         detail {
            media {
               image {
                  maxWidth = 600
                  maxHeight = 600
               }
            }
         }
         #Same image size then detail so only one image to load, with many
         #news this has to change!
         list {
            media {
               image {
                  maxWidth = 600
                  maxHeight = 600
               }
            }
         }
      }
   }

.. note::

    **No struggle with closing brackets:**
    News list on the normal news-list page has a 2 column backend-layout, but it is the same template behind it like the normal page-layout-template.
    The second column with the news-aside goes directly inside the news list.html template:

    ``<f:cObject typoscriptObjectPath="lib.dynamicContent" data="{pageUid: '{data.uid}', colPos: '2'}" />``


Some News setting stuff
-----------------------

.. code-block:: typoscript

    settings {
        # Geänderte CSS verknüpfen:
        cssFile = EXT:bsggerapackage/Templates/Resources/Public/Css/tx_news.css

        # Platzhalterbild entfernen:
        displayDummyIfNoMedia = 0

        # Bildgrößen:
        detail.media.image.maxWidth = 200
        list.media.image.maxWidth = 110
        list.media.image.maxHeight =

        # rel-Attribut für Fancybox vergeben:
        # im Partial "FalMediaImage.html" muss für Fancybox auch die Klasse "fancybox" vergeben werden!
        detail.media.image.lightbox = fancybox

        # Social-Texte übersetzen:
        facebookLocale = de_DE
        googlePlusLocale = de
        disqusLocale = de

        # Social-Links entfernen:
        detail.showSocialShareButtons = 0

        list.paginate.itemsPerPage = 5

        # Datum in URL einfügen:
        link {
            skipControllerAndAction = 1
            hrDate = 1
            hrDate {
            day = j
            month = n
            year = Y
        }
    }

    #in TSconfig
    CAdefaults.sys_file_reference.showinpreview = 1

    plugin.tx_news._LOCAL_LANG.de.more-link = weiter
    plugin.tx_news._LOCAL_LANG.en.more-link = read more
    plugin.tx_news._LOCAL_LANG.fr.more-link = lire la suite

    plugin.tx_news._LOCAL_LANG.de.back-link = zurück zur Übersicht
    plugin.tx_news._LOCAL_LANG.en.back-link = back to list view
    plugin.tx_news._LOCAL_LANG.fr.back-link = retour à la liste

|

News update from TYPO3 11.5
---------------------------

The paginated view-helper must be omitted for the new pagination setup
I needs now the paginated extension from Georg Ringer

|
|

News-Route Enhancer for speaking news URL
=========================================

config.yaml for routing and speaking URL paths of news
------------------------------------------------------

extend after "websiteTitle:''" with the following:

.. code-block:: yaml

    websiteTitle: ''
    routeEnhancers:
      News:
        type: Extbase
        extension: News
        plugin: Pi1
        routes:
          - routePath: '/'
            _controller: 'News::list'
          - routePath: '/page-{page}'
            _controller: 'News::list'
            _arguments:
              page: 'currentPage'
          - routePath: '/{news-title}'
            _controller: 'News::detail'
            _arguments:
              news-title: news
          - routePath: '/{category-name}'
            _controller: 'News::list'
            _arguments:
              category-name: overwriteDemand/categories
          - routePath: '/{tag-name}'
            _controller: 'News::list'
            _arguments:
              tag-name: overwriteDemand/tags
        defaultController: 'News::list'
        defaults:
          page: '0'
        aspects:
          news-title:
            type: PersistedAliasMapper
            tableName: tx_news_domain_model_news
            routeFieldName: path_segment
          page:
            type: StaticRangeMapper
            start: '1'
            end: '100'
          category-name:
            type: PersistedAliasMapper
            tableName: sys_category
            routeFieldName: slug
          tag-name:
            type: PersistedAliasMapper
            tableName: tx_news_domain_model_tag
            routeFieldName: slug
      PageTypeSuffix:
        type: PageType
        map:
          'feed.xml': 9818
          'calendar.ical': 9819
          /: 0
          sitemap.xml: 1533906435

|

Hard coded base url!
^^^^^^^^^^^^^^^^^^^^

List item of news "isBasedOn" meta data the detail news article: inside List/Item.html add before the closing div

.. code-block:: html

    <span  itemprop="isBasedOn" itemscope itemtype="https://schema.org/CreativeWork">
        <meta itemprop="url" content='https://test.gesitrel.ch<n:link newsItem="{newsItem}" settings="{settings}" uriOnly="true" ></n:link>' />
    </span>

to add a publisher meta data for news: inside Templates/NewsTemplates/News/Detail.html

.. code-block:: html

    <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
        <meta itemprop="name" content="Gesitrel AG" />
    </div>

|

FlexSlider
==========

FlexSlider has a white border - remove it
-----------------------------------------

.. code-block:: css

    .flexslider {
        background: none;
        border: none;
        box-shadow: none;
        margin: 0;
    }


Felxslider show arrows in mobile sizes
--------------------------------------

.. code-block:: css

    /* take the arrow off-screen on small screens but then
    you don't know that it is a slider on small screens*/

    .d16 .flex-direction-nav .flex-prev {
        left: -60px;
    }

    .d16 .flex-direction-nav .flex-next {
        right: -60px;
    }


FlexSlider put caption on top of image
--------------------------------------

.. code-block:: css

    /* felx-Caption*/
    .d16 .flexslider .slides li {
        position: relative;
    }

    .d16 .flex-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        padding: 1em;
        font-family: 'noto_sansregular', Arial, Helvetica, sans-serif;
        font-weight: 500;
        background-color: rgba(220, 220, 220, 0.6);
        font-size: 1em;
        line-height: 1.2em;
        width: 70%;
        height: 50%;
    }


|

Import/Export of database for the DCEs
======================================

If you want just to import/export the DCE tables -> it is a long story ...

Best is to use phpAdmin and ignore the warnings for the uids.

|

SVGs are still a hassle
=======================

works for the i-world and the rest but gets bigger, svg as background-image

    make them all Base64 encode

    `<https://b64.io/>`_


works for firefox but not the i-world

    url-encode background-image

    `<https://yoksel.github.io/url-encoder/>`_
