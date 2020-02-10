# Common Tooling

Some minor functionality which we also have in place - the idea is to let tools be the bad guys:

- **eslint** as a javascript and typescript linter
- **prettier** for avoiding any code style conversations (also for `sass` files)
- **commitlint** for linting git commit messages (useful for generating changelogs)
- **husky** for setting up git hooks (runs `commitlint` & `prettier` on every commit)
