---
title: Environment Variables
description: Learn how to use Environment Variables in Bruno to store values specific to different environments such as development and production.
---

# Environment Variables

Environment variables are variables that are scoped to an environment, such as local development or production. They are useful for storing variables that can be reused across the collection but may differ depending on the environment.

An example would be the **host URL** of the server you want to test.

## Creating an Environment Variable

1. **Go to environments** (top right) and press **Configure**.  
   ![Exporting a Collection](/img/image3.png)

2. If there are **no environments**, you will be prompted to **create one**.

3. **Add your variable name** and **value** for the specific environment.
   <!-- ![Environment Variables Menu](../assets/env-menu.png)   -->

   ![Exporting a Collection](/img/image3.png)

4. **Save your changes.**

## Using an Environment Variable

Just like other variables, you can use the **`{{varName}}`** syntax to use an environment variable in a request.

On the **top-right**, you can see which environment you are currently using and **select a different one**.

## Using the `./environments` Directory

Environment variables are synced with the **`/environments`** directory inside your collection.  
You can also create and manage environments there.

Each environment is saved in a `<environment-name>.bru` file, which looks like this:

```bru
local.bru
vars {
  host: http://localhost:8787
}
```
