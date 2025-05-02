import React, { Suspense } from "react";
import AuthHeader from "./auth-header";
import SearchInput from "./search-input";

const HeaderPage = async () => {
  // const session = await auth(); session.user accessing session in a server component auth from @/auth it stores cookies so it will make any page using this header as dynnamic like home page and all other pages
  // so make a client component within this component handling session else all pages with header will become dynamic and no caching
  // we try to keep as much page as static pages as possible so that caching can be implemented
  
};


