# escape-path-with-spaces
Escape if needed spaces contained in a string file path

## Install

```
$ npm install --save escape-path-with-spaces
```

## Usage
```js
const escape = require('escape-path-with-spaces');
// some paths
const aWindowsPath = "D:\\DDL\\ANIME\\les chevaliers du zodiaques\\whateverFile.avi";
const aPosixPath = "D:/DDL/ANIME/les chevaliers du zodiaques/whateverFile.avi";

// on Linux or Mac OS X
// gives "D:/DDL/ANIME/les\ chevaliers\ du\ zodiaques/whateverFile.avi"

// on Windows
console.log(escape(aWindowsPath));

// on recent builds ( >= Windows 10 1803)
// give the same path as recent builds handle spaces in path(s) 

// on old builds ( < Windows 10 1803)
// gives "D:\\DDL\\ANIME\\les%20chevaliers%20du%20zodiaques\\whateverFile.avi"
```

## API
### escape-path-with-spaces(filePath)

Escape if needed spaces contained in a string file path

# License
MIT
