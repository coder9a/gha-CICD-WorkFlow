# Workflow Documentation

## Introduction

This document provides an in-depth explanation of the project workflow, detailing code management, testing, deployment, and versioning processes. The workflow is meticulously designed to maintain code integrity, security, and seamless integration and deployment operations.
## Workflow Overview

The workflow consists of several key stages:

1. **Feature Development**: Developers create feature branches for new development work.

2. **Pull Request Creation**: When a feature is ready for integration, a pull request is opened.

3. **Testing**: Automated tests are run on the feature branch, including both custom tests and CodeQL vulnerability checks.

4. **Deployment**: Upon request, feature branches can be deployed to isolated environments for testing.

5. **Merge to Main**: Once tests pass and code is approved, feature branches are merged into the main branch.

6. **Versioning**: Changes made in feature branches are versioned and documented.

7. **Release Management**: Upon merging to main, a release process is initiated, generating release notes and updating version numbers.

8. **Deployment to Staging and Production**: Code changes are deployed to staging for further testing and then to production after manual approval.

## Detailed Workflow Steps

### Feature Development

1. Developers create feature branches for new work.

### Pull Request Creation

1. Developers open pull requests when features are ready for review and integration into the main branch.
2. Pull requests cannot be directly pushed to the main branch; they must go through the pull request process.

### Testing

1. Automated tests are triggered upon pull request creation.
2. Tests include custom test workflows and CodeQL vulnerability scans.
3. Failures in tests prevent the pull request from being merged until issues are addressed.

### Deployment

1. Feature branches can be deployed to isolated environments upon request by adding a specific comment to the pull request (`/deploy`).
2. AWS is utilized to set up separate environments for testing.

### Merge to Main

1. Once tests pass and code is approved, feature branches are merged into the main branch.
2. Long-lived feature branches are avoided to maintain continuous integration.

### Versioning

1. Changes made in feature branches are versioned using changeset files.
2. Versioning follows semantic versioning conventions (major, minor, patch).
3. Changeset files document the nature of changes made in each feature.

### Release Management

1. Upon merging to the main branch, a versioning pull request is automatically generated.
2. Versioning pull requests update the app version based on changeset files and generate release notes.
3. Changeset files are combined into a changelog file.
4. Versioning pull requests are reviewed and merged into the main branch to create new releases.
5. GitHub releases are tagged with the generated version numbers.

### Deployment to Staging and Production

1. After merging into the main branch, code changes are deployed to staging for further testing.
2. Deployment to production requires manual approval.
3. Production deployments are managed with AWS infrastructure.

## Conclusion

This workflow ensures that code changes are thoroughly tested, versioned, and documented before deployment to production. By automating various steps and utilizing feature flags and isolated environments, the process promotes collaboration and continuous integration while maintaining stability and reliability in the production environment.
