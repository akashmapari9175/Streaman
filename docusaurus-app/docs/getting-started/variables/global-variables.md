---
title: Global Environment Variables
description: Learn how to use Global Environment Variables in Bruno to store and manage common values across requests and collections.
---

# Global Environment Variables

Global environment variables can be used across all collections and requests. Think of them as a global store accessible throughout the app.

Instead of creating the same collection variable repeatedly in each collection, you can use global variables to store common values that need to be accessed across different collections. This eliminates the repetitive task of defining the same variables every time.

## Create a Global Environment Variable

1. **Go to the Global Environments section** (top right corner) and click **Configure**.
   <!-- ![Environment Variables location](../assets/env-location.png) -->

   ![Exporting a Collection](/img/image3.png)

2. **Select Create Global Environment**.
3. (Optional) If you need to import an existing environment, you can use the **Import Environment** option.

4. **Enter a name** for your environment and click **Create**.
   <!-- ![Environment Variables location](../assets/create-global-env.png) -->

   ![Exporting a Collection](/img/image3.png)

5. **Add a variable** by specifying the **Name** and **Value**.
   <!-- ![Environment Variables location](../assets/add-variable.png) -->

   ![Exporting a Collection](/img/image3.png)

6. **Click Save**.  
   Your global environment variable is now created and can be accessed across your workspace.

### 🔒 Hide Secret Values

You can click the **secret checkbox** to hide the values of variables while hovering over them.

## Using Global Environment Variables

To use a global environment variable, reference it using the format
`{{var_name}}` in any request or collection. These variables can be combined with other variables and used throughout your workspace, making them ideal for consistent value sharing.

<!-- ```bash
{{var_name}}
``` -->

![Exporting a Collection](/img/image3.png)

_Last updated on **February 26, 2025**._
