import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const paths = ['/teste'];

export function middleware(request: NextRequest) {
  let intercept = false;
  
  paths.forEach(path => {
    if (request.nextUrl.pathname.startsWith(path)) {
      intercept = true;
    }
  });
  
  if (intercept) {
    return NextResponse.rewrite(new URL('/', request.url));
  }
  
  return NextResponse.next();
}
