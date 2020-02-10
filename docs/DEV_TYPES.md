# Type Safety

All code is written in `TypeScript`. It's particularly useful for large-scale codebases, it offers a great DX experience (intellisense & code refactoring). Often there are times where full coverage testing is not needed, as the code is completely typed. A good example is reducer under `web` package as the shape of the state is controlled by an interface, actions are typed - also their payload and it will not compile if we make a typo or don't provide all required attributes.
