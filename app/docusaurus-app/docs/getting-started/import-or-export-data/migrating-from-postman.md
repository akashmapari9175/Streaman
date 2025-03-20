---
title: Migrating from Postman
---

# Migrating from Postman

Bruno makes migrating from Postman easy. All you need to do is export your collections and environments and import them into Bruno.

## Collection Export

1. Open **Postman** and select the collection you want to migrate.
2. Click on the `···` (three dots) next to the collection, then select **View more actions**.
3. Scroll down and click **Export**.

   <!-- ![Open the collection's dropdown menu](#) -->

   ![Open the collection's dropdown menu](/img/postman-export-dialog.png)

4. A popup dialog will appear. Choose either **Collection v2** or **Collection v2.1** format.
5. Click the **Export** button.

   ![Export collection dialog](/img/postman-pre-dropdown.png)

   <!-- ![Export collection dialog](/img/postman-export-dialog.png){.small-img} -->

   <!-- <img src="/img/postman-export-dialog.png" alt="Export collection dialog" width="300" height="200"> -->

6. Your collection will be downloaded as a JSON file.
7. Now, follow the instructions for **Importing Collections** in Bruno.

---

## Export Data Dump (Premium)

<!-- 🚀 **Bulk Import from Postman** is included in **Bruno Ultimate Edition**. -->

:::tip
Bulk Import from Postman is included in Bruno Ultimate Edition
:::

To export all your collections and environments from Postman:

1. Click the **Settings** icon in the Postman header and go to **Settings**.
2. Navigate to the **Data** tab.
3. Click **Request Data Export**.
4. Select **Export Data** and choose the data types you want to export (collections, environments, or both).
5. Click **Request Data Export**.

### Importing Data Dump into Bruno:

1. Open **Bruno** and go to the import menu.
2. Select **Postman Data Export**.
3. Choose the exported `.zip` file.
4. A list of all available collections will appear.
5. Select the collections you want to import and specify the destination.
6. Click **Import**.

⚠️ **Note:** Although Bruno has a Postman script translator, it's always a good practice to review imported collections for deprecated Postman syntax.

---

## Environment Export

To export an environment from Postman:

1. Open **Postman** and select the environment to migrate.
2. Click on the `···` (three dots) next to the environment.
3. Select **Export**, then choose a location to save the environment file.

   ![Open the environment's dropdown menu](#)

### Importing the Environment into Bruno:

1. Open **Bruno** and select any request within a collection.
2. Click the **Configure** button in the upper-right corner.

   ![Import environment button](#)

3. A dialog box will appear, displaying your exported environment file.
4. Click **Import** and select **Postman Environment**.
5. Choose the environment file, and you're done!

---

_Last updated on February 26, 2025_
