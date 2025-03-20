# Create a Test

:::info
Bruno uses the [Chai library](https://www.chaijs.com/), so you can follow the same syntax for writing assertions in your tests.
:::

To ensure your API is behaving as expected, create a test against it.

Bruno supports writing tests through either:

- Assertions to declaratively write tests
- JavaScript

## Assertion

To get familiar with testing, open a Collection, select a request, and click on the `Assertions` tab.

You can then dictate an expression, operator, and value to test against.

<!-- ![Assertions Tab](image.png) -->

![Assertions Tab](/img/image.png)

## Testing with JavaScript

Bruno also supports writing automation test scripts in JavaScript for more advanced API testing scenarios. By automating your tests, you can increase efficiency and coverage, and integrate testing into CI/CD pipelines.

### Example

```javascript
test("should be able to login", function () {
  const data = res.getBody();
  expect(res.getStatus()).to.equal(200);
});

test("should return json", function () {
  const data = res.getBody();
  expect(res.getBody()).to.eql({
    hello: "Bruno",
  });
});
```

![Assertions Tab](/img/image.png)

In this example:

- 1 The first test checks that the response status is 200 (indicating a successful login).
- 2 The second test verifies that the response body is equal to the expected JSON object.

:::info
For more advanced testing scenarios and tips, view the [Scripting docs].
:::

For more advanced testing scenarios and tips, view the Scripting docs.

_Last updated on February 26, 2025._
