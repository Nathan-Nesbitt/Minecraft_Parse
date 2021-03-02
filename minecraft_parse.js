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
            "step": /### ([^\n]*)([^`]*)\n```([^`]*)```/,
            "overview": /## Overview([^#]*)/,
            "overview_values": /### ([^\n]*)([^#]*)/
        }

        this.file = file;
        if(!this.file)
            throw new Error("No file was passed to MinecraftParse");
        // Defaults all the values //
        this.title = null;
        this.description = {};
        this.overview = {};
        this.graph = null;
        this.graph_name = null;
        this.steps = {};
        // Parse the file //
        this.parse_file();
        // Check if required values got set //
        if(!this.title)
            throw new Error("The file specified is missing a title");
        if(!this.description)
            throw new Error("The file specified is missing a description");
        if(!this.steps.text || !this.steps.code) 
            throw new Error("The file specified is missing parts of the lesson");
    }

    /**
     * Function that parses the MD and produces a JSON object based on the
     * header levels and the different sections.
     */
    parse_file() {
        this.title = this.file.match(RegExp(this.regex.title))[1]
        this.description = this.file.match(RegExp(this.regex.description))[1]
        
        var overview = this.file.split(RegExp(this.regex.overview))[2]
        if(!overview)
            throw new Error("The file specified doesn't have a proper overview section");
        this.overview.title = overview.match(RegExp(this.regex.overview_values))[1]
        this.overview.data = overview.match(RegExp(this.regex.overview_values))[2]
        
        this.graph = this.file.match(RegExp(this.regex.graph))[2]
        this.graph_name = this.file.match(RegExp(this.regex.graph))[1]
        
        var lesson = this.file.split(RegExp(this.regex.lesson))[2]
        if(!lesson)
            throw new Error("The file specified doesn't have a proper lesson section");
        
        var steps = lesson.split(RegExp(this.regex.step))
        for(var i = 1; i < steps.length; i+=4) {
            this.steps[steps[i]] = {
                "text": steps[i+1],
                "code": steps[i+2]
            }
        }
    }

    
}

export {MinecraftParse};