# Contributing guidelines

## Git workflow

* We use trunk based development - create a feature branch from `main`, e.g. `feature/new-feature`
* Pull requests must contain a succinct, clear summary of what the user need is driving this feature change
* Ensure your branch contains logical atomic commits before sending a pull request - follow the [alphagov Git styleguide](https://github.com/alphagov/styleguides/blob/master/git.md)
* You may rebase your branch after feedback if it's to include relevant updates from the main branch. We prefer a rebase here to a merge commit as we prefer a clean and straight history on develop with discrete merge commits for features.

## Adding assets

To add new assets to the CDN, add them to a new branch from `main` and
submit a pull request on GitHub.

The pull request will be reviewed by the ONS Dissemination team.

## Removing assets

To remove assets, remove them in a branch off `main` and submit a
pull request on GitHub.

Please include the reason for removal.

We would not normally expect to remove assets since
it would be difficult to be certain they are no longer in use.

## Deployment

The same deployment process applies whether you are adding or removing assets.

Once the pull request has been merged, the change is published automatically to the **sandbox** environment.

Assets are **not** automatically deployed to staging or production. To promote a change, trigger the relevant job manually in the
[`cdn.ons.gov.uk-assets` Concourse pipeline](https://concourse.dp-ci.aws.onsdigital.uk/teams/main/pipelines/cdn.ons.gov.uk-assets):

* **deploy-staging** - trigger the staging deployment job to promote the change to staging. This depends on a successful sandbox deployment, so the merge must have published to sandbox first.
* **deploy-prod** - trigger the production deployment job to promote the change to production ONS CDN. This depends on a successful staging deployment, so `deploy-staging` must pass first.

When promoting to production, follow the existing deployment policies.
