# landing-polyfeds

Static Polyfeds landing page with the existing branch-based GitHub Pages preview
and a manual production release workflow.

## GitHub Pages preview

GitHub Pages is configured in the repository settings to deploy from the root of
`main`. GitHub's built-in `pages-build-deployment` workflow updates the public
preview after changes reach `main`; no custom Pages workflow is required.

## Production setup

Create a protected GitHub Environment named `production` and add the following
environment secrets:

- `PRODUCTION_HOST` - SSH hostname
- `PRODUCTION_USER` - SSH user
- `PRODUCTION_SSH_KEY` - private deployment key
- `PRODUCTION_KNOWN_HOSTS` - pinned `known_hosts` entry for the server
- `PRODUCTION_PATH` - absolute root such as `/var/www/polyfeds`
- `PRODUCTION_URL` - public URL used by the post-deployment health check

The server must have `rsync`, and the SSH user must be able to write to
`PRODUCTION_PATH`. Configure the web server document root as
`PRODUCTION_PATH/current`.

To publish, test the Pages preview, copy its exact commit SHA, then run
**Actions > Deploy production > Run workflow**. Releases are uploaded to
`releases/<full SHA>` and `current` is switched only after a successful upload.

To revert, run **Actions > Rollback production** with a full SHA already present
in the server's `releases` directory.
