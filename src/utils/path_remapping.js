import glob from "glob";
import fs from "node:fs";
import { argv } from "node:process";

function getFileContent(file) {
  try {
    const content = fs.readFileSync(file, "utf8");
    return content;
  } catch (err) {
    console.error(`Error reading file ${file}:`, err);
    return null;
  }
}

function replaceIncorrectLink(fileData, verbose) {
  const searchString = "/src/";
  const replacementString = "../../";

  const searchRegex = /\/src\//g;

  if (fileData.content.includes(searchString)) {
    const updatedContent = fileData.content.replace(
      searchRegex,
      replacementString,
    );

    if (updatedContent !== fileData.content) {
      try {
        fs.writeFileSync(fileData.path, updatedContent, "utf8");
        console.log(`File updated successfully: ${fileData.path}`);
        fileData.content = updatedContent;
      } catch (err) {
        console.error(
          `Error writing updated content to file ${fileData.path}:`,
          err,
        );
      }
    } else {
      verbose &&
        console.log(
          `Replacement resulted in no change for file: ${fileData.path}`,
        );
    }
  }
}

function readMarkDownFiles(_glob, verbose) {
  glob(_glob, (err, files) => {
    console.log(`\n--- searching through glob: ${_glob} ---\n`);
    if (err) {
      console.error("Error finding files:", err);
      return;
    }

    if (files.length === 0) {
      console.log("No markdown files found in the specified path.");
      verbose && console.log(`No markdown files found in glob: ${_glob}.`);
      return;
    }

    files.forEach((filePath) => {
      const content = getFileContent(filePath);

      if (content !== null) {
        const fileData = {
          path: filePath,
          content: content,
        };
        replaceIncorrectLink(fileData);
        verbose && console.log(`Trying to replace links in: ${fileData.path}`);
        replaceIncorrectLink(fileData, verbose);
      } else {
        console.log(`Skipping file due to read error: ${filePath}`);
      }
    });
    console.log(`\n--- end of searching ${_glob} ---\n`);
  });
}

function main() {
  let verbose = false;
  argv.forEach((arg) => {
    if (arg === "-v") {
      verbose = true;
    }
  });

  const globs = ["../content/**/*.{md,mdx}"];
  globs.forEach((_glob) => {
    readMarkDownFiles(_glob, verbose);
  });
}

main();
