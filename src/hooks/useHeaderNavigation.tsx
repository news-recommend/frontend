"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";

const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: {
    EMAIL: "/register/email",
    PASSWORD: "/register/password",
    NAME: "/register/name",
    INFO: "/register/info",
  },
  PROFILE: {
    EDIT: "/profile",
  },
  ISSUE: {
    SEARCH: "/issue/search",
  },
  BOOKMARK: "/bookmark",
};

export default function useHeaderNavigation() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const pathToRegex = (path: string) => new RegExp("^" + path.replace(/:[^/]+/g, "[^/]+") + "$");

  const checkRoute = {
    startsWith: (route: string) => pathname?.startsWith(route),
    exact: (route: string) => {
      if (route.includes(":")) {
        // 동적 파라미터가 있을 때

        const regex = pathToRegex(route);
        console.log("regex", regex);
        return regex.test(pathname);
      }
      // 일반 라우트는 기존대로
      return pathname === route;
    },
  };
  const headerTitle = useMemo(() => {
    const travelMap = {
      [ROUTES.LOGIN]: "로그인",
      [ROUTES.REGISTER.EMAIL]: "회원가입",
      [ROUTES.REGISTER.PASSWORD]: "회원가입",
      [ROUTES.REGISTER.NAME]: "회원가입",
      [ROUTES.REGISTER.INFO]: "회원가입",
      [ROUTES.PROFILE.EDIT]: "프로필수정",
      [ROUTES.BOOKMARK]: "이슈수정",
      [ROUTES.ISSUE.SEARCH]: "이슈검색",
    };
    for (const [route, title] of Object.entries(travelMap)) {
      if (checkRoute.startsWith(route)) return title;
    }

    return "";
  }, [pathname]);

  return {
    checkRoute,
    headerTitle,
  };
}
