import { getArchivePosts } from "./archive";

export type WritingItem = {
  title: string;
  date: Date;
  url: string;
  source: "Kyle Baley" | "Western Devs";
  summary: string;
  category: string;
  isExternal?: boolean;
};

type LocalWritingPost = {
  id: string;
  data: {
    title: string;
    date: Date;
    summary: string;
    category: string;
  };
};

export function getWritingSlug(id: string) {
  return id.replace(/\.mdx?$/, "");
}

export function getLocalWritingItems(posts: LocalWritingPost[]): WritingItem[] {
  return posts.map((post) => ({
    title: post.data.title,
    date: post.data.date,
    url: `/writing/${getWritingSlug(post.id)}/`,
    source: "Kyle Baley",
    summary: post.data.summary,
    category: post.data.category
  }));
}

export const westernDevsPosts: WritingItem[] = [
  {
    title: "An exploration of Azure Functions for a side project",
    date: new Date(Date.UTC(2024, 5, 23)),
    url: "https://www.westerndevs.com/_/azure-functions-for-side-projects/",
    source: "Western Devs",
    summary:
      "Notes from moving a bash workflow into Azure Functions, including logging exceptions and saving generated PDFs to Google Drive.",
    category: "Azure",
    isExternal: true
  },
  {
    title: "Truly syncing multiple calendars",
    date: new Date(Date.UTC(2024, 5, 17)),
    url: "https://www.westerndevs.com/_/syncing-multiple-calendars/",
    source: "Western Devs",
    summary:
      "A practical look at juggling personal and client calendars without letting schedule management become its own job.",
    category: "Workflow",
    isExternal: true
  },
  {
    title: "Go just big enough for your needs or go home",
    date: new Date(Date.UTC(2020, 4, 18)),
    url: "https://www.westerndevs.com/bash/Go-just-big-enough-for-your-needs-or-go-home/",
    source: "Western Devs",
    summary:
      "A small-tool story about matching the size of the solution to the size of the actual problem.",
    category: "Bash",
    isExternal: true
  },
  {
    title: "I regret nothing!",
    date: new Date(Date.UTC(2016, 4, 8)),
    url: "https://www.westerndevs.com/career/I-regret-nothing/",
    source: "Western Devs",
    summary:
      "A career reflection on programming regrets, or the deliberate refusal to frame a career as a list of them.",
    category: "Career",
    isExternal: true
  },
  {
    title: "Prairie Dev Con 2016 Presentation Materials",
    date: new Date(Date.UTC(2016, 3, 18)),
    url: "https://www.westerndevs.com/conferences/Prairie-Dev-Con-2016-Presentation-Materials/",
    source: "Western Devs",
    summary: "Materials from the Death to the Batch Job and Docker presentations.",
    category: "Speaking",
    isExternal: true
  },
  {
    title: "Why can't you just communicate properly?",
    date: new Date(Date.UTC(2016, 0, 27)),
    url: "https://www.westerndevs.com/communication/Why-can-t-you-just/",
    source: "Western Devs",
    summary: "A few simple communication rules for improving engagement.",
    category: "Communication",
    isExternal: true
  },
  {
    title: "Migrating from Jekyll to Hexo: Part 2",
    date: new Date(Date.UTC(2015, 11, 28)),
    url: "https://www.westerndevs.com/jekyll/hexo/Migrating-from-Jekyll-to-Hexo-Part-2/",
    source: "Western Devs",
    summary: "Specific issues encountered while migrating the Western Devs site from Jekyll to Hexo.",
    category: "Static Sites",
    isExternal: true
  },
  {
    title: "Migrating from Jekyll to Hexo",
    date: new Date(Date.UTC(2015, 11, 22)),
    url: "https://www.westerndevs.com/jekyll/hexo/Migrating-from-Jekyll-to-Hexo/",
    source: "Western Devs",
    summary: "The good and bad parts of moving the Western Devs website from Jekyll to Hexo.",
    category: "Static Sites",
    isExternal: true
  },
  {
    title: "Testing With Data",
    date: new Date(Date.UTC(2015, 10, 20)),
    url: "https://www.westerndevs.com/_/testing-with-data/",
    source: "Western Devs",
    summary: "A discussion of test data, databases, and the compromises hiding inside automated tests.",
    category: "Testing",
    isExternal: true
  },
  {
    title: "Running a .NET app against a Postgres database in Docker",
    date: new Date(Date.UTC(2015, 9, 25)),
    url: "https://www.westerndevs.com/_/running-a-net-app-against-postgres-database-in-docker/",
    source: "Western Devs",
    summary: "A .NET and Docker walkthrough using Postgres as the backing database.",
    category: "Docker",
    isExternal: true
  },
  {
    title: "Windows Server Containers Are Coming Whether You Like It or Not",
    date: new Date(Date.UTC(2015, 7, 31)),
    url: "https://www.westerndevs.com/_/windows-server-containers-are-coming-whether-you-like-it-or-not/",
    source: "Western Devs",
    summary: "An early look at Windows Server containers and where the ecosystem was headed.",
    category: "Containers",
    isExternal: true
  },
  {
    title: "Docker on Western Devs",
    date: new Date(Date.UTC(2015, 7, 24)),
    url: "https://www.westerndevs.com/_/docker-and-western-devs/",
    source: "Western Devs",
    summary: "How Docker was already being used in the process of publishing the Western Devs site.",
    category: "Docker",
    isExternal: true
  },
  {
    title: "PSA: Setting Up Containers in a VM in Windows Server 2016 Tech Preview 3",
    date: new Date(Date.UTC(2015, 7, 20)),
    url: "https://www.westerndevs.com/_/psa-setting-up-containers-in-a-vm-in-windows-server-2016-tech-preview-3/",
    source: "Western Devs",
    summary: "A practical note from setting up Windows Server containers inside a VM.",
    category: "Containers",
    isExternal: true
  },
  {
    title: "Docker Is Coming Whether You Like It or Not",
    date: new Date(Date.UTC(2015, 7, 4)),
    url: "https://www.westerndevs.com/_/docker-is-coming-whether-you-like-it-or-not/",
    source: "Western Devs",
    summary: "An early enthusiasm-fueled look at Docker's likely impact on .NET development.",
    category: "Docker",
    isExternal: true
  },
  {
    title: 'Microservices, or "How to spread the love"',
    date: new Date(Date.UTC(2015, 6, 15)),
    url: "https://www.westerndevs.com/_/microservices-or-how-to-spread-the-love/",
    source: "Western Devs",
    summary: "An early-stage exploration of microservices, architecture, and learning in public.",
    category: "Architecture",
    isExternal: true
  },
  {
    title: 'Outside the shack, or "How to be a technology gigolo"',
    date: new Date(Date.UTC(2015, 6, 6)),
    url: "https://www.westerndevs.com/_/outside-the-shack-or-how-to-be-a-gigolo/",
    source: "Western Devs",
    summary: "A reflection on broadening technical interests beyond one familiar stack.",
    category: "Career",
    isExternal: true
  },
  {
    title: "On UI Testing",
    date: new Date(Date.UTC(2015, 5, 30)),
    url: "https://www.westerndevs.com/_/on-ui-testing/",
    source: "Western Devs",
    summary: "A post drawn from a group conversation about UI testing tradeoffs.",
    category: "Testing",
    isExternal: true
  }
];

export function getCurrentWriting(localPosts: WritingItem[] = []) {
  return [...localPosts, ...westernDevsPosts.filter((post) => post.date.getUTCFullYear() >= 2024)].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
}

export function getFeaturedWriting(localPosts: WritingItem[] = [], limit = 3) {
  return getCurrentWriting(localPosts).slice(0, limit);
}

export function getArchiveSummary() {
  const posts = getArchivePosts();
  const oldest = posts.at(-1);
  const newest = posts[0];

  return {
    count: posts.length,
    oldestYear: oldest?.year,
    newestYear: newest?.year
  };
}
