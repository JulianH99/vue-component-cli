const fs = require('fs')
const PathUtil = require('./path')
const path = require('path')
const chalk = require('chalk')

class Component {


    constructor(name) {
        this.name = name.split('/').pop()
    }

    /**
     * returns the template string that will contain the component file content
     * 
     */
    makeTemplate() {
        return`
<template>
<div id="${this.name}">
</div>
</template>

<style>
.${this.name}{

}
</style>

<script>
export default {
    name: '${this.name}',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
        `
    }

    /**
     * creates the componentn and writes the file
     */
    create(path) {
        fs.writeFileSync(path, this.makeTemplate())

    }    

}

let createComponent = (name) => {

    if(!PathUtil.srcExists()){
        console.log(chalk.red("There is no src/components folder in this project"))
        process.exit(1)
    }

    let component = new Component(name)
    let componentsPath = PathUtil.getComponentsPath()

    if(PathUtil.hasSubDirs(name)){ // check if the name provided has subdir-syntax
        let subDirs = PathUtil.getSubDirs(name)

        let currentDir = ''
        subDirs.forEach(dir => {
            currentDir += `/${dir}` // we add each dir to the previous one to create the exact tree structure
            let dirPath = `${componentsPath}${currentDir}`
            if(!fs.existsSync(dirPath)) // if the current subdir does not exists, then we create it
                fs.mkdirSync(dirPath)
        })

        
    }
    let componentPath = path.normalize(`${PathUtil.getComponentsPath()}/${name}.vue`)

    // finally, create the component
    component.create(componentPath)

    console.log(chalk.green("Component created"))

}


module.exports = createComponent