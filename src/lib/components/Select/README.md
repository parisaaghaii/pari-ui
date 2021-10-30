# Select Multiple Items



| Select Component info |
| --------------------- |
| description           |
| install info          |
| properties info       |

### This Component get multiple option and you can select your option .

#### The type of option is string .

#### For install this component do this step:

 ```bash
 npm i pari-ui
 ```

#### The properties need in component :

##### list : 

the  array list of  your option , and they type is string .

##### placeholder :

the title of your select component , and type is string .

##### selected :

the multiple options that you have , the type is string .

##### onChange :

by changing the option , the value sit on the placeholder .

##### children :

you can define option in the tag , in the program .



```javascript
import React, { useState } from "react";
import { Select } from "pari-ui";
function App() {
  const [value, setValue] = useState("")
  return (
        <Select
          list={["sara", "fateme"]}
          placeholder="names list :"
          selected={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value={"javad1"}>javad1</option>
          <option value={"javad2"}>javad2</option>
        </Select>
        )
 }
```

