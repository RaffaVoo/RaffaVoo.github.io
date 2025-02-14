// NOTE: The original — I removed projects and talks
//export type CollectionName = "blog" | "projects" | "talks";
export type CollectionName = "blog" | "projects";


export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  authorPhotoSrc: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "Raph's Test Website",
  description: "A test website to be submitted for Rosa's approval",
  author: "Raph",
  authorPhotoSrc: "/mango-sneeze.png"
};


type CollectionSite =  {
  pageSize: number;
};

type HomeSite =  {
  blogEntries?: number;
  projectEntries?: number;
}

export const HOME: HomeSite = {
  blogEntries: 5,
  projectEntries: 5,
};

type BlogSite = CollectionSite & {
  license: {
    name: string;
    href: string;
  }
};

export const BLOG: BlogSite = {
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const PROJECTS: CollectionSite = {
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  pageSize: 10,
};

export const TAGS: CollectionSite = {
  pageSize: 10,
};

type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
}

type ContactSite = ContactInfo[]

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:email@example.com",
    displayAs: "email@example.com",
  },
  {
    type: "X",
    href: "https://x.com/BillGates",
    displayAs: "@BillGates on X",
  },
  {
    type: "GitHub",
    href: "https://github.com/dotnet",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/williamhgates/",
  },
];
