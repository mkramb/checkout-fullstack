# Testing

Facebook's `jest` is used for unit testing. All `.spec.ts`/`.spec.tsx` will be executed and generates code coverage reports for all source files. In `web` package we have a lot of components which are `pure components` meaning that their output is only controlled by provided `props`, which allows us to have an isolated dev environment and demoable components.
