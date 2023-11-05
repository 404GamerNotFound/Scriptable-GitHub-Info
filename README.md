# GitHub Repositories Widget for Scriptable

This Scriptable script generates a widget for your iOS Home Screen that displays repositories from the GitHub user "404GamerNotFound". Depending on the size of the widget (small, medium, large), it will show 2, 3, or 6 of the most recently created repositories respectively.

## Features

- **Dynamic Sizing:** The widget automatically adjusts to the size selected, displaying either 2, 3, or 6 repositories.
- **Repository Information:** For each repository, the widget shows the name, description, star count, fork count, and programming language.
- **Custom Design:** Text color and widget background are styled for both aesthetics and readability.

## Setup

1. Install the [Scriptable app](https://scriptable.app/) from the App Store on your iOS device.
2. Copy the JavaScript code provided above into a new Scriptable script.
3. Replace `"404GamerNotFound"` with your desired GitHub username, if different.
4. Run the script once in Scriptable to verify it works.
5. Add a new Scriptable widget to your Home Screen.
6. Long-press the widget, select "Edit Widget", and choose the script you just created.

## Usage

The widget will automatically update at regular intervals to display the most current repository data from the specified GitHub user. Tap the widget at any time to open Scriptable and manually refresh the data.

## Customization

You can edit the script to customize the following:

- `username`: Set this to any GitHub username whose repositories you want to track.
- Widget appearance: Modify colors and fonts to match your personal style.

## Known Issues

- Because of GitHub API rate limits, the widget may not update if too many requests are made in a short period.
- If the user has fewer repositories than the widget is set to display, some spaces will be empty.

## Contributing

If you have suggestions for improving the script, please open an issue or pull request on GitHub.

## License

This script is released under the MIT License. See `LICENSE` for more information.

---

Enjoy your personalized GitHub Repositories Widget for iOS!
