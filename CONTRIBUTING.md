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

Once the pull request has been merged, assets will be published
to the ONS CDN.

## Removing assets

To remove assets, remove them in a branch off `main` and submit a
pull request on GitHub.

Please include the reason for removal.

We would not normally expect to remove assets since
it would be difficult to be certain they are no longer in use.
