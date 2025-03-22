# Code Style

A consistent code style helps to improve the approachability of code and reduce noise during pull requests caused by 
conflicting IDE settings between developers.

## Tools

The project a few tools to detect and address style violations. These tools are run against all Pull Requests.

### Spotless

Spotless is a tool that both detects and corrects style issues. This includes:

- Indentation using spaces, not tabs
- The order imports appear in
- Removal of unused imports
- Overall formatting of code
- Some safe code changes such as removal of unnecessary boxing.

To check for issues run the `spotlessCheck` gradle task - this will produce a report of all violations.
Then to fix issues run `spotlessApply`.

If there are portions of code for which spotless checks should not be applied - perhaps a section of code that
should be formatted in a particular way for readability - then it can be surrounded by a pair of comments containing
`spotless:off` and `spotless:on`:

```java
// spotless:off
public static final List<Vector2i> POSITIONS = List.of(
        new Vector2i(0, 1),
        new Vector2i(2, 3),
        new Vector2i(5, 8),
        new Vector2i(9, 13)
);
// spotless:on
```

### Checkstyle

Checkstyle is a tool that can only detect and report style issues. It can be run using the `checkstyleMain` gradle task. It has been configured to report:

- Wildcard or star imports
- Names that don't match the standard java style. e.g. packages should have all lowercase names, non-constant variables should start with a lowercase letter, method names should start with a lowercase letter
- If statements that don't use braces
- Declaration order - this checks that elements in a type are declared in the following order:
  1. Static variables (public, then protected, then package, then private)
  2. Instance variables (public, then protected, then package, then private)
  3. Constructors
  4. Methods
- Case statements with code that falls through to another case statement. e.g.
```java
switch (letter) {
    // This is fine, the case for 'a' has no code
    case 'a':
    case 'b':
        System.out.println("a or b");
        break;
    // This provokes a checkstyle error
    case 'c':
        System.out.println("only c");
    case 'd':
        System.out.println("only d");
}
```
This can be disabled by adding a comment of 'fall through' on the line before the case statement that can be fallen into.

Similar to spotless, checkstyle checks can be disabled using `CHECKSTYLE.OFF: <reason>` and `CHECKSTYLE.ON: <reason>` comment pairs. e.g.
```java
public void check() {
    // CHECKSTYLE.OFF: Performance optimisation - braces reduce framerate
    if (false) return;
    // CHECKSTYLE.ON: Performance optimisation
}
```