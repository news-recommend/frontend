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
  sentimentTrend: number[];
  newsList: NewsItem[];
  thumbnail: string | null;
};

export type BookmarkedIssue = Issue & {
  bookmarkId: number;
};

export type IIssueDetailList = {
  pagination: Pagination;
  newsList: NewsItem[];
};
