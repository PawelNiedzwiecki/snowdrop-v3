# GitHub Actions CI/CD Pipeline

This repository uses GitHub Actions for automated testing, building, and deployment.

## Workflows

### 1. CI Workflow (`ci.yml`)

**Triggers:**
- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch

**What it does:**
- Runs on Node.js 18.x and 20.x
- Installs dependencies
- Runs all tests with Vitest
- Builds the Gatsby site
- Uploads build artifacts (Node 20.x only)

**Badge:**
```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/badge.svg)
```

---

### 2. Deploy to GitHub Pages (`deploy.yml`)

**Triggers:**
- Push to `main` or `master` branch
- Manual trigger from Actions tab

**What it does:**
- Installs dependencies
- Runs tests to ensure quality
- Builds the Gatsby site for production
- Deploys to GitHub Pages

**Setup Required:**
1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. The site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO`

**Custom Domain:**
If using a custom domain, update the `PATH_PREFIX` in the workflow or remove it for root domain.

---

### 3. PR Checks (`pr-checks.yml`)

**Triggers:**
- Pull request opened, synchronized, or reopened

**What it does:**
- Runs tests with coverage (if available)
- Builds the site
- Reports build size
- Comments on PR with build status

---

## Local Testing

To test the workflows locally before pushing:

```bash
# Install act (GitHub Actions local runner)
# macOS
brew install act

# Linux
curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash

# Run workflows locally
act pull_request  # Test PR workflow
act push          # Test push workflow
```

## Environment Variables

No environment variables are required by default. If you need to add secrets:

1. Go to repository Settings → Secrets and variables → Actions
2. Add your secrets (e.g., `DEPLOY_TOKEN`, `API_KEY`)
3. Reference them in workflows with `${{ secrets.SECRET_NAME }}`

## Caching

The workflows use npm caching to speed up builds:
- Dependencies are cached based on `package-lock.json`
- Cache is automatically invalidated when dependencies change

## Build Artifacts

Build artifacts are stored for 7 days and can be downloaded from:
- Actions tab → Select workflow run → Artifacts section

## Troubleshooting

### Build Fails on GitHub but Works Locally

1. Check Node.js version compatibility
2. Ensure all dependencies are in `package.json`
3. Check for environment-specific code
4. Review workflow logs in Actions tab

### Tests Fail in CI

1. Ensure tests pass locally with `npm test -- --run`
2. Check for timezone or environment dependencies
3. Review test output in Actions logs

### Deployment Issues

1. Verify GitHub Pages is enabled in repository settings
2. Check `PATH_PREFIX` configuration in `gatsby-config.ts`
3. Ensure workflow has proper permissions

## Status Badges

Add status badges to your README:

```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/badge.svg)
![Deploy](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
```

## Customization

### Change Node.js Version

Edit the `node-version` in workflow files:

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20.x'  # Change this
```

### Add Linting

Add to `ci.yml` after install step:

```yaml
- name: Run linter
  run: npm run lint
```

### Slack Notifications

Add at the end of jobs:

```yaml
- name: Slack Notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: 'Build completed!'
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

## Performance

Average workflow times:
- **CI**: ~3-5 minutes (with cache)
- **Deploy**: ~4-6 minutes
- **PR Checks**: ~3-5 minutes

## Security

- Workflows run in isolated environments
- Dependencies are installed fresh each time
- Use `npm ci` instead of `npm install` for reproducible builds
- Secrets are encrypted and never exposed in logs
