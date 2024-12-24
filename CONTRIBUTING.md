# Contributing to SahiHisab Web Project

Thank you for taking the time to contribute to the SahiHisab Web Project! We appreciate your effort and welcome your contributions. To ensure a smooth collaboration, please follow the guidelines outlined below.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How to Contribute](#how-to-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Enhancements](#suggesting-enhancements)
   - [Submitting Pull Requests](#submitting-pull-requests)
3. [Code Style](#code-style)
4. [Branching Strategy](#branching-strategy)
5. [Commit Messages](#commit-messages)
6. [License](#license)

---

## Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to foster a welcoming and respectful environment for all contributors.

## How to Contribute

### Reporting Bugs

If you encounter any bugs while using SahiHisab:

- Check if the issue has already been reported.
- If not, open a new issue with the following details:
  - Clear description of the bug.
  - Steps to reproduce the bug.
  - Expected behavior vs. actual behavior.
  - Any relevant screenshots or logs.

### Suggesting Enhancements

Have an idea for improving SahiHisab? Here’s how you can suggest an enhancement:

- Search the issue tracker to see if someone has already suggested it.
- If it’s a new idea, open a new issue and include:
  - A clear description of the enhancement.
  - The reasons why it would benefit the project.
  - Any ideas for implementation or alternatives.

### Submitting Pull Requests

Before submitting a pull request (PR):

- Ensure your changes align with the project’s objectives and follow the code style guidelines.
- Make sure your branch is up-to-date with `develop`.
- Write or update tests as needed.

To submit a PR:

1. Fork the repository and create your feature branch (e.g., `feature/add-reporting-feature`).
2. Ensure all tests pass and code is linted.
3. Commit your changes with a clear, descriptive message.
4. Push your changes and create a pull request:
   - Fill out the PR template if applicable.
   - Reference any related issues in the PR description.

### PR Review Process

Once you submit a PR:

- Ensure all tests pass on CI.
- Be responsive to feedback from the maintainers.
- Your PR will be reviewed and, if approved, merged into the `develop` branch.

## Code Style

- Write clean and maintainable code.
- For C# backend, follow .NET conventions (e.g., PascalCase for public members, camelCase for locals, etc.).
- For frontend (React, Vite, Tailwind CSS), use consistent naming conventions and follow JavaScript best practices.
- Always ensure your code passes any linters or formatters configured for the project (e.g., ESLint, Prettier).
- Write unit tests for any new functionality or features.

## Branching Strategy

- `main`: Production-ready code.
- `develop`: Active development branch. All new features should be merged here.
- `feature/*`: For new features or major changes (e.g., `feature/group-expense`).
- `fix/*`: For bug fixes (e.g., `fix/authentication-bug`).

## Commit Messages

Follow these rules for writing commit messages:

1. Use the present tense: "Fix bug" (not "Fixed bug").
2. Use the imperative mood: "Add feature" (not "Adds feature").
3. Keep messages concise but descriptive.
4. Reference issues or PRs when applicable (e.g., `Fixes #42`).

Example:
feat: Add group expense tracking
fix: Resolve issue with date picker on mobile devices (#57)
chore: Update third-party dependencies


## License

By contributing to this project, you agree that your contributions will be licensed under the [LICENSE](./LICENSE) of the SahiHisab Web Project.
