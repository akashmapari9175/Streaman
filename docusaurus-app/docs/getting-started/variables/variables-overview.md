---
id: variables-overview
title: Variables
sidebar_label: Overview
# slug: /variables/overview
---

<!-- ## Variables -->

With the release of **v1.28.0**, we’ve shifted to treating all **Request Variables** as strings instead of inferring the data type from the value. See the [discussion](#) for more information.

## Overview

Variables in Bruno allow you to store **dynamic values** that can be reused across multiple API requests, environments, and workflows.

This feature enhances:

- **Flexibility** – Use variables for frequently changing values.
- **Maintainability** – Manage tokens, environment-specific URLs, etc.
- **Efficiency** – Define values once and reuse them anywhere.

## Types

There are **6 types** of variables in Bruno:

1. **Global Variables**
2. **Environment Variables**
3. **Collection Variables**
4. **Folder Variables**
5. **Request Variables**
6. **Runtime Variables**

<!-- 7. [Runtime Variables (Highest priority)](getting-started/variables/runtime-variables)
8. [Request Variables](getting-started/variables/request-variables)
9. [Folder Variables](getting-started/variables/folder-variables)
10. [Environment Variables](getting-started/variables/environment-variables)
11. [Collection Variables](getting-started/variables/collection-variables)
12. [Global Variables (Lowest priority)](getting-started/variables/global-variables) -->

Additionally, you can define **Process Environment Variables** using an external environment configuration file:

- **Process Environment Variables**

## Variable Precedence

When accessing a variable, **precedence** determines which value is used:

1. **Runtime Variables** (Highest priority)
2. **Request Variables**
3. **Folder Variables**
4. **Environment Variables**
5. **Collection Variables**
6. **Global Variables** (Lowest priority)

🚀 **Process Environment Variables** are accessed using `{{process.env.VAR_NAME}}` and do not compete with the above precedence levels.

## Variable Data Type

All variables are **stored as strings**. Bruno does **not** infer or change the data type based on the assigned value.

## Scripting API

See the **[Scripting API](#)** for more information on accessing variables in your scripts.

---

_Last updated on **February 26, 2025**._
