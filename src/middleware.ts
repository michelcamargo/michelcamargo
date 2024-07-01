import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const toIntercept = ['/teste'];
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) return;
  
  if (request.nextUrl.locale === 'default') {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'ptBR';
 
    const redirectUrl = `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`;
    
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  
  let intercept = false;
  const { pathname } = request.nextUrl;
  
  toIntercept.forEach(path => {
    if (pathname.startsWith(path)) {
      intercept = true;
    }
  });
  
  if (intercept) {
    return NextResponse.rewrite(new URL('/', request.nextUrl));
  }
  
  return NextResponse.next();
}
