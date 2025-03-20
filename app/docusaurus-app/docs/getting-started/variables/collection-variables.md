---
title: Collection Variables
description: Learn how to use Collection Variables in Bruno to store values used across multiple requests in a collection.
---

# Collection Variables

Collection variables are variables that are scoped to a **specific collection**. They are useful for storing variables that are used **across multiple requests** in a collection.

## Creating a Collection Variable

1. **Go to Collection Settings**.
2. Navigate to the **Variables** tab.
3. **Add your variable name and value** in the **Pre Request Vars** section.
4. Click **Save** to apply your changes.

<!-- ![Collection Variables](../assets/collection-variables.png) -->

![Exporting a Collection](/img/image3.png)

## Using a Collection Variable

You can use the **`{{varName}}`** syntax to use a collection variable in a request.

<!-- ![Collection Variables Usage](../assets/collection-variables-usage.png) -->

![Exporting a Collection](/img/image3.png)

## Access Collection Variable Inside Scripts

You can also use the **`bru.getCollectionVar()`** function to retrieve the value of a collection variable inside your **pre-request scripts**.

```js
let namespace = bru.getCollectionVar("namespace");
```
