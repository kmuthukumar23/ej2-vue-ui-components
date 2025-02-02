# Changelog

## [Unreleased]

## 17.2.41 (2019-08-14)

### File Manager

#### Bug Fixes

- The issue with the `file manager that throws script error while accessing the shared folder in physical file provider` has been fixed.

#### New Features

- A method has been provided to customize the filtering support in file manager.

## 17.2.40 (2019-08-06)

### File Manager

#### New Features

- The `ID` based support has been provided to the `selectedItems` property to manage the files with duplicate names.

## 17.2.36 (2019-07-24)

### File Manager

#### Bug Fixes

- Issue with `when the component is rendering and you are trying to resize the window the component throws script error` is fixed.

## 17.2.35 (2019-07-17)

### File Manager

#### Bug Fixes

- Issue with `empty folder icon alignment when persistence enabled` is fixed.

## 17.2.34 (2019-07-11)

### File Manager

#### New Features

- Provided the `id` based support for `path` property to manage the files in an efficient way on going with file system providers.

## 17.2.28-beta (2019-06-27)

### File Manager

#### New Features

- Added file system provider support for SQL server database, Microsoft Azure cloud storage, NodeJS framework, and Google Drive cloud storage.
- Provided access control support for physical file system provider.
- Provided cut, copy, and paste file operations support.
- Provided drag and drop support.
- Provided rename and replace support for uploading files.
- Provided options to upload specific types of files based on extensions.

## 17.1.48 (2019-05-21)

### File Manager

#### New Features

- #144270 - Added support to use the JWT tokens with `beforeSend` event’s Ajax settings.

## 17.1.42 (2019-04-23)

### File Manager

#### New Features

- Added filesystem provider support for ASP.NET MVC 4 and 5 frameworks.

## 17.1.40 (2019-04-09)

### File Manager

#### Breaking Changes

- The `beforeFileLoad` event’s `module` argument values have been changed as follows:

| Argument Name | Old Value | New Value | 
|---|---|---|
| module | navigationpane | NavigationPane | 
| module | Grid | DetailsView | 
| module | LargeIcon | LargeIconView | 

## 17.1.32-beta (2019-03-13)

### File Manager

The `File Manager` is a graphical user interface component used to manage the file system. It enables the user to perform common file operations such as accessing, editing, uploading, downloading, and sorting files and folders. This component also allows easy navigation for browsing or selecting a file or folder from the file system.


- **Different Views** - Provides detailed and large icon views.
- **Context menu support** - Provides detailed and large icon views.
- **Custom toolbar support** - Customize the toolbar to provide only necessary features.
- **Multiple file selection** - Select multiple files simultaneously.
- **Accessibility** - Features built-in accessibility support that makes all features accessible through keyboard interaction, screen readers, or other assistive technology devices.
- **Localization** - Translate file names to any supported language.


