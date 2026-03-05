import fs from "fs";
import path from "path";

export function getAppRoutes(basePath = "src/app"): string[] {
  const routes: string[] = [];

  function scan(dir: string, parentPath = "") {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (file.startsWith("_") || file === "api") return;

        scan(fullPath, parentPath + "/" + file);
      } else if (
        file === "page.tsx" ||
        file === "page.jsx" ||
        file === "page.ts" ||
        file === "page.js"
      ) {
        routes.push(parentPath || "/");
      }
    });
  }

  scan(basePath);
  return routes;
}
