const path = require('path')
const fs = require('fs')

const srcPath = path.join(process.cwd(), "src", "components")

module.exports = class PathUtil {
   
    /**
     * returns if the ./src/components exists in the current project directory
     */
    static srcExists() {

        return fs.existsSync(srcPath)

    }

    /**
     * returns the components path for the current working directory
     */
    static getComponentsPath() {
        return srcPath
    }

    /**
     * checks if the string provided has subdir-syntax (e.g. /new/app/add)
     * @param {*} str string to check for
     */
    static hasSubDirs(str){
        return str.includes('/')
    }

    /**
     * returns the subdirs found in the string
     * @param {*} str string to split
     */
    static getSubDirs(str){

        let subDir = str.split('/')
        subDir.pop()
        return subDir

    }


}