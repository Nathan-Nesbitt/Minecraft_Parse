# Minecraft_Parse
A simple markdown parser to JSON.

You can import it by running 

```html
<script type="module">
    // Import the library //
    import {MinecraftParse} from "https://nathan-nesbitt.github.io/Minecraft_Parse/minecraft_parse.js";

    // Write your code here //
</script>
```

The main function takes a file, and strips all of the data into a JSON model.
## Model

The produced output from a properly formatted file should match the following
JSON object:

```js
{
    title: "<title of the lesson>",
    description: "<description of the lesson>",
    overview: {
        title: "<title of the overview page>",
        data: "<text for the overview page>"
    },
    graph: "<graph location>",
    graph_name: "<graph text>",
    steps: {
        "<step name>": {
            code: "<code for lesson>",
            text: "<text for lesson>"
        }
    }
}
```

See [example.py](./example.py) for an example of how to format the markdown 
files to fit the parser. And see [example.html](./example.html) to see an 
example on how to integrate this into a webpage.

### title
Contains the title of the lesson. 

### overview
Information for the overview of the lesson.

#### title
The overview title specified in the file.

#### data
The information for the overview.

### description
Contains the description of the lesson.

### graph
Contains the location of the graph.

### graph_name
Contains the name of the graph.

### steps
Contains a json file with the title of each step, along with an explanation of how to do the step, and the code for the step

#### code
The code for the step you are currently on.

#### text
The text that explains the code for the current step.