import { Octokit } from "@octokit/rest";
import matter from "gray-matter"; // Import gray-matter for front matter parsing
import dotenv from "dotenv";

dotenv.config();

interface PointsLog {
  team: string;
  points: number;
}

interface TeamPoints {
  [teamName: string]: number;
}

export const handler = async () => {
  try {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    // Fetch points log entries
    const pointsLogResponse = await octokit.repos.getContent({
      owner: process.env.GITHUB_OWNER as string,
      repo: process.env.GITHUB_REPO as string,
      path: "src/content/points-log",
    });

    if (!Array.isArray(pointsLogResponse.data)) {
      throw new Error("Unexpected response format");
    }

    // Parse points logs
    const pointsLogs: PointsLog[] = pointsLogResponse.data.map((file: any) =>
      JSON.parse(Buffer.from(file.content, "base64").toString())
    );

    // Calculate points per team
    const teamPoints: TeamPoints = pointsLogs.reduce((acc: TeamPoints, log: PointsLog) => {
      if (!acc[log.team]) {
        acc[log.team] = 0;
      }
      acc[log.team] += log.points;
      return acc;
    }, {});

    // Update each team's points in their Markdown files
    for (const [teamName, points] of Object.entries(teamPoints)) {
      const teamPath = `src/content/teams/${teamName}.md`;
      const teamResponse = await octokit.repos.getContent({
        owner: process.env.GITHUB_OWNER as string,
        repo: process.env.GITHUB_REPO as string,
        path: teamPath,
      });

      if (!("content" in teamResponse.data)) {
        throw new Error(`Unexpected response format for team: ${teamName}`);
      }

      // Parse the existing Markdown file using gray-matter
      const fileContent = Buffer.from(teamResponse.data.content, "base64").toString();
      const parsedContent = matter(fileContent);

      // Update the points in the front matter
      parsedContent.data.points = points;

      // Convert updated content back to Markdown string
      const updatedMarkdown = matter.stringify(parsedContent.content, parsedContent.data);

      // Update team content file with new points
      await octokit.repos.createOrUpdateFileContents({
        owner: process.env.GITHUB_OWNER as string,
        repo: process.env.GITHUB_REPO as string,
        path: teamPath,
        message: `Update points for team ${teamName}`,
        content: Buffer.from(updatedMarkdown).toString("base64"),
        sha: teamResponse.data.sha as string,
      });
    }

    return {
      statusCode: 200,
      body: "Points updated successfully!",
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};