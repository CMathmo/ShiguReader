const path = require('path');
const userConfig = require('../user-config');
const stringHash = require("string-hash");
const util = require("../util");

const isImage = util.isImage;
const isMusic = util.isMusic;
const cache_folder_name = userConfig.cache_folder_name;
const pfs = require('promise-fs');

const rootPath = path.join(__dirname, "..", "..");
const getRootPath = function(){
    return rootPath;
}

const fullPathToUrl = function (img){
    const fullpath = path.resolve(img);
    return turnPathSepToWebSep("..\\"+ path.relative(rootPath, fullpath));
}

const getOutputPath = function (cachePath, zipFn) {
    let outputFolder;
    outputFolder = path.basename(zipFn, path.extname(zipFn));
    if(!userConfig.readable_cache_folder_name){
        outputFolder = stringHash(zipFn).toString();
    }else{
        outputFolder = outputFolder.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>/]/gi, '');
    }
    return path.join(cachePath, outputFolder);
}

const turnPathSepToWebSep = function (fn) {
    return fn.replace(new RegExp(`\\${  path.sep}`, 'g'), '/');
}

const generateContentUrl = function (pathes, outputPath) {
    const files = [];
    const dirs = [];
    const musicFiles = [];
    const base = path.basename(outputPath);
    for (let i = 0; i < pathes.length; i++) {
        const p = pathes[i];
        let temp = path.join(cache_folder_name, base, p);
        temp = turnPathSepToWebSep(temp);
        if (isImage(p)) {
            files.push(temp);
        }else if(isMusic(p)){
            musicFiles.push(temp);
        }
    }
    return { files, dirs, musicFiles };
}

const isExist = async (path) => {
    try{
        const error = await pfs.access(path);
        return !error;
    }catch(e){
        return false;
    }
};

function isDirectParent(parent, filePath){
    const parentPath = path.resolve(filePath, "..");
    return parentPath === parent;
}

function isSub(parent, child) {
    if(child.length > parent.length && child.startsWith(parent)){
        let parentPath = path.resolve(child, "..");
        while(true){
            if(parentPath === parent){
                return true;
            }

            const newparentPath = path.resolve(parentPath, "..");
            if(newparentPath === parentPath){
                //go to the top
                return false;
            }
            parentPath = newparentPath;
        }
    }
    return false;
}

module.exports = {
    fullPathToUrl,
    getOutputPath,
    turnPathSepToWebSep,
    generateContentUrl,
    getRootPath,
    isExist,
    isDirectParent,
    isSub
};