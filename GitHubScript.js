const username = "404GamerNotFound"; // GitHub username

async function fetchRepos(repoCount) {
  const url = `https://api.github.com/users/${username}/repos?sort=created&per_page=${repoCount}`;
  const request = new Request(url);
  const response = await request.loadJSON();
  return response;
}

function createRepoText(widget, repo) {
  let repoName = widget.addText(repo.name);
  repoName.textColor = Color.green();
  repoName.font = Font.boldSystemFont(16);

  if (repo.description) {
    let description = widget.addText(repo.description);
    description.textColor = Color.white();
    description.font = Font.systemFont(12);
    description.textOpacity = 0.8;
  }

  let starsAndForks = `⭐️ ${repo.stargazers_count} | 🍴 ${repo.forks_count}`;
  if (repo.language) starsAndForks += ` | ${repo.language}`;
  let details = widget.addText(starsAndForks);
  details.textColor = Color.yellow();
  details.font = Font.systemFont(12);
  details.textOpacity = 0.8;
}

async function createWidget(repos) {
  let widget = new ListWidget();
  widget.backgroundColor = new Color("#000000");

  for (let repo of repos) {
    createRepoText(widget, repo);
    widget.addSpacer(4);
  }

  return widget;
}

async function main() {
  let repoCount;
  switch (config.widgetFamily) {
    case 'small':
      repoCount = 2;
      break;
    case 'medium':
      repoCount = 3;
      break;
    case 'large':
      repoCount = 6;
      break;
    default:
      // Defaults to small if not running in a widget (i.e., app or notification)
      repoCount = 2;
  }

  let repos = await fetchRepos(repoCount);
  let widget = await createWidget(repos);

  if (config.runsInWidget) {
    Script.setWidget(widget);
  } else {
    // Present a small widget preview if running inside the app
    // You can change this to medium or large for other previews
    widget.presentSmall();
  }

  Script.complete();
}

main();
