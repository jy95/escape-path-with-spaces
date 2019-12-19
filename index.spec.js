const os = require("os");
const escape_path_with_spaces = require("./index");

const some_paths = {
    "Linux_or_Mac_OS_X": {
        "/usr/jy95/Desktop/some folder/file.zip": "/usr/jy95/Desktop/some\\ folder/file.zip",
        "/user/some folder with many spaces": "/user/some\\ folder\\ with\\ many\\ spaces"
    },
    // on github actions, only Windows Server 2019 is available
    "Windows": {
        "D:\\Program Files (x86)\\EA Games": "D:\\Program Files (x86)\\EA Games",
        "C:\\Progs\\Java": "C:\\Progs\\Java"
    }
};

const whichTest = (os.platform() !== "win32") ? "Linux_or_Mac_OS_X" : "Windows";

test.each(
    Object.entries(some_paths[whichTest])
)('%s should give %s', (path, expect_result) => {
    expect(escape_path_with_spaces(path)).toBe(expect_result);
});