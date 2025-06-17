export type NewsItem = {
  title: string;
  description: string;
  publishedAt: string; // ISO 날짜 형식
};

type Pagination = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
};

export type ICategoryIssueList = {
  pagination: Pagination;
  data: Issue[];
};
export type Issue = {
  issueId: number;
  issueName: string;
  category: string;

  newsList: string[];
  thumbnail: string | null;
};

export type IssueDetail = {
  issueId: number;
  issueName: string;
  category: string;

  newsList: News[];
  thumbnail: string | null;
};

export type News = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  sentimentScore: number;
};

export type BookmarkedIssue = Issue & {
  bookmarkId: number;
};
