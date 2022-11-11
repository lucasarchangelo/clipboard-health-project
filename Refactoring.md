# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Before refactoring the code, I developed the tests I needed to cover all code.
I replaced Ifs statements with logic operators and separated all code with methods. That way, I think the code could be more clean and easy to understand.
If I had access to event object that this method receive. I could do a better work.
I don't know if it's possible to happen, I'll just let it registered here:
But if `event.partitionKey` could return a object, and after `stringfy` the length is less than `MAX_PARTITION_KEY_LENGTH` it's going to return a `stringfy json`.
