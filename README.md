# Minecraft_Parse
A simple markdown parser to JSON.

You can import it by running 

```html
<script type="module">
    // Import the library //
    import {MinecraftParse} from "https://nathan-nesbitt.github.io/Minecraft_Parse/minecraft_parse.js";

    // Write your code here //
```

The main function takes a file, and strips all of the data into a JSON model.
## Model

```js
{
    title: "",
    description: "",
    graph: "",
    graph_name: "",
    steps: {
        "step 1 name": {
            code: "",
            text: ""
        }
    }
}
```


### title
Contains the title of the lesson. 

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