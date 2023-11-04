# JavaScript Functions and Events

A JavaScript **function** is a block of JavaScript code that can be executed when "called" for. For example, a function can be called when an event occurs, like when the user clicks a button.


## JavaScript in &lt;head&gt; or &lt;body&gt;

When adding JavaScript to an HTML document, you have the option of placing it in either the `<head>` or `<body>` section.

- Placing JavaScript in the `<head>`:
  - JavaScript code placed within the `<head>` section is typically used for scripts that should be loaded before the page content. This is often the case for external libraries and scripts required for the page to function correctly.

  # Example: JavaScript Function in &lt;head&gt;

    ```html
    <!DOCTYPE html>
    <html>
    <head>
    <script>
    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    </head>
    <body>
    <h2>Demo JavaScript in Head</h2>

    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>

    </body>
    </html>


- Placing JavaScript in the `<body>`:
  - JavaScript code placed within the `<body>` section is typically used for scripts that interact with or manipulate the content of the page. This is often the case for event handlers, dynamic content updates, and other user-facing functionalities.

  # Example: JavaScript Function in &lt;body&gt;

    ```html
    <!DOCTYPE html>
    <html>
    <body>

    <h2>Demo JavaScript in Body</h2>

    <p id="demo">A Paragraph</p>

    <button type="button" onclick="myFunction()">Try it</button>

    <script>
    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>

    </body>
    </html>

The choice of where to include JavaScript in your HTML document depends on your specific requirements and performance considerations.


## JavaScript Placement for Performance

Placing scripts at the bottom of the `<body>` element improves the display speed, because script interpretation slows down the display.

> **Note:** By moving JavaScript to the bottom of the `<body>` section, you ensure that the HTML content is loaded and displayed before scripts are executed. This can lead to a better user experience and faster page rendering.

# External JavaScript

Scripts can also be placed in external files. External scripts are practical when the same code is used in many different web pages. JavaScript files have the file extension `.js`.

To use an external script, put the name of the script file in the `src (source)` attribute of a `<script>` tag.

> **Note:** For example, you can include an external script like this:
>
> ```html
> <script src="myScript.js"></script>
> ```

## Example: Demo External JavaScript

```html
<!DOCTYPE html>
<html>
<body>

<h2>Demo External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>This example links to "myScript.js".</p>
<p>(myFunction is stored in "myScript.js")</p>

<script src="myScript.js"></script>

</body>
</html>
```    

# Placing External Scripts

You can place an external script reference in `<head>` or `<body>` as you like. The script will behave as if it was located exactly where the `<script>` tag is located.

> **Note:** External scripts cannot contain `<script>` tags.