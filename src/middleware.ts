import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const paths = ['/teste'];

export function middleware(request: NextRequest) {
  let intercept = false;
  const { pathname } = request.nextUrl;
  
  paths.forEach(path => {
    if (pathname.startsWith(path)) {
      intercept = true;
    }
  });
  
  if (intercept) {
    return NextResponse.rewrite(new URL('/', request.nextUrl));
  }
  
  return NextResponse.next();
}
