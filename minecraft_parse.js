/**
 * Written by Nathan Nesbitt, Copyright 2021.
 */


/**
 * 
 * This is a markdown parser written to create a JSON file from
 * a markdown document. You can specify a title, description,
 * graph, lesson, and steps for the lesson in markdown format.
 *  
 */
class MinecraftParse {

    constructor(file) {

        this.regex = {
            "title": /# (.*)/,
            "description": /## Model Description([^#]*)/,
            "graph": /!\[(.*?)\]\((.*?)\)/,
            "lesson": /## Lesson([^#]*)/,
            "step": /### ([^\n]*)([^`]*)\n```([^`]*)```/
        }

        this.file = file;
        this.title = null;
        this.description = null;
        this.graph = null;
        this.graph_name = null;
        this.lesson = null;
        this.steps = {};
        this.parse_file();
    }

    /**
     * Function that parses the MD and produces a JSON object based on the
     * header levels and the different sections.
     */
    parse_file() {
        this.title = this.file.match(RegExp(this.regex.title))[1]
        this.description = this.file.match(RegExp(this.regex.description))[1]
        this.graph = this.file.match(RegExp(this.regex.graph))[2]
        this.graph_name = this.file.match(RegExp(this.regex.graph))[1]
        this.lesson = this.file.split(RegExp(this.regex.lesson))[2]
        var steps = this.lesson.split(RegExp(this.regex.step))
        console.log(this.lesson)
        console.log(steps)
        for(var i = 1; i < steps.length; i+=4) {
            this.steps[steps[i]] = {
                "text": steps[i+1],
                "code": steps[i+2]
            }
        }
    }

    
}

export {MinecraftParse};