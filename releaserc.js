module.exports = {
  branches: ['master'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'docs', scope: 'README', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { scope: 'no-release', release: false },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};
