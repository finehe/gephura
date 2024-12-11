import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const handle = createMiddleware({
    // 支持的语言列表
    locales: ['en', 'zh'],
    // 默认语言
    defaultLocale: 'zh'
  });

  return handle(request);
}

export const config = {
  // 匹配所有路径
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
