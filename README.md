# Note-app
## Simple Note app to learn more about node.js

# help
```
Commands:
  add     add new note
  list    all notes lists
  read    read one note
  remove  remove one note

Options:
  --help  Show help                                                    [boolean]
```
  # add & read &  help
```
  Options:
  --help       Show help                                               [boolean]
  --title, -t  title of note                                          [required]
  --body, -b   body of note                                           [required]
```
  # remove help
```
  Options:
  --help       Show help                                               [boolean]
  --title, -t  title of note                                          [required]
```
  # command 
```
$ node app.js add -t="ahmed andaloes" -b="hello every one ..."
note created
--
Title : ahmed andaloes
Body  : hello every one ...

$ node app.js read -t="ahmed andaloes" -b="hello every one ..."
note found
--
Title : ahmed andaloes
Body  : hello every one ...

$ node app.js list -t="ahmed andaloes" -b="hello every one ..."
Printing 4 note(s).
--
Title : to buy
Body  : food
--
Title : remove
Body  : i'm here
--
Title : andaloes
Body  : the big one
--
Title : ahmed andaloes
Body  : hello every one ...

$ node app.js remove -t="ahmed andaloes"
note was removed

```
  

