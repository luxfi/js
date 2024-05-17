import * as core from "@actions/core";
import * as github from "@actions/github";
import * as colors from "colorette";

export function run() {
  try {
    // Remove the `refs/heads/` prefix from the branch name
    const rawBranchName = github.context.ref.split("refs/heads/").pop();

    // If the branch name is undefined, throw an error
    if (!rawBranchName) {
      throw new Error("Unable to detect branch name.");
    }

    // Truncate the name to a reasonable length and
    // replace all non-alphanumeric characters with a dash
    const sanitizedBranchName = rawBranchName
      .slice(0, 30)
      .replace(/[^a-zA-Z0-9]/g, "-");

    console.info(
      colors.whiteBright("The subject of your canary deploy will be: "),
      colors.blueBright(sanitizedBranchName),
    );
    core.setOutput("canary-subject", sanitizedBranchName); // Set the environment variable

    // console.info(colors.whiteBright('🏷️ Added Label: '), colors.blue(labelToAdd));
  } catch (error) {
    core.setFailed((error as { message: string }).message);
  }
}

run();
