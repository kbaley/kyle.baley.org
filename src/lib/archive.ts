import fs from "node:fs";
import path from "node:path";

const postsDir = path.resolve("_posts");

export type ArchivePost = {
  title: string;
  date: Date;
  slug: string;
  year: string;
  month: string;
  archivePath: string;
  legacyPath: string;
  html: string;
  sourcePath: string;
};

function decodeEntities(value: string) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function parseScalar(frontmatter: string, key: string) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.*)$`, "m"));
  if (!match) return "";
  return decodeEntities(match[1].trim().replace(/^["']|["']$/g, ""));
}

function cleanHtml(html: string) {
  return html
    .replaceAll("http://kyle.baley.org/assets/", "/legacy-assets/")
    .replaceAll("https://kyle.baley.org/assets/", "/legacy-assets/")
    .replaceAll('src="/assets/', 'src="/legacy-assets/')
    .replaceAll("src='/assets/", "src='/legacy-assets/")
    .replace(/\{\{\s*site\.baseurl\s*\}\}/g, "");
}

function parseDate(value: string, year: string, month: string) {
  const match = value.match(
    /^(\d{4})-(\d{2})-(\d{2})(?:\s+(\d{2}):(\d{2}):(\d{2}))?/
  );

  if (!match) return new Date(`${year}-${month}-01T00:00:00Z`);

  const [, parsedYear, parsedMonth, day, hour = "00", minute = "00", second = "00"] = match;
  return new Date(
    Date.UTC(
      Number(parsedYear),
      Number(parsedMonth) - 1,
      Number(day),
      Number(hour),
      Number(minute),
      Number(second)
    )
  );
}

function parsePost(filePath: string): ArchivePost | null {
  const fileName = path.basename(filePath);
  const match = fileName.match(/^(\d{4})-(\d{2})-\d{2}-(.*)\.html$/);
  if (!match) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const parts = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!parts) return null;

  const [, frontmatter, body] = parts;
  const title = parseScalar(frontmatter, "title") || match[3].replaceAll("-", " ");
  const dateValue = parseScalar(frontmatter, "date") || `${match[1]}-${match[2]}-01`;
  const slug = match[3] || "untitled";
  const year = match[1];
  const month = match[2];
  const date = parseDate(dateValue, year, month);

  return {
    title,
    date,
    slug,
    year,
    month,
    archivePath: `/archive/${year}/${month}/${slug}/`,
    legacyPath: `/${year}/${month}/${slug}/`,
    html: cleanHtml(body),
    sourcePath: filePath
  };
}

export function getArchivePosts() {
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".html"))
    .map((file) => parsePost(path.join(postsDir, file)))
    .filter((post): post is ArchivePost => Boolean(post))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function formatPostDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}
