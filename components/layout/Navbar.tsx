12:14:30.213 Running build in Washington, D.C., USA (East) – iad1
12:14:30.213 Build machine configuration: 2 cores, 8 GB
12:14:30.326 Cloning github.com/iaruizh/Ivanruizholistico (Branch: main, Commit: 2c0911f)
12:14:30.932 Cloning completed: 605.000ms
12:14:31.762 Restored build cache from previous deployment (3M9xC2Fh7UCaW92zXAiWwwTHvtqs)
12:14:31.949 Running "vercel build"
12:14:31.965 Vercel CLI 54.9.0
12:14:32.186 Running "install" command: `npm install`...
12:14:58.042 
12:14:58.042 up to date, audited 370 packages in 26s
12:14:58.043 
12:14:58.043 153 packages are looking for funding
12:14:58.044   run `npm fund` for details
12:14:58.150 
12:14:58.151 3 vulnerabilities (2 moderate, 1 high)
12:14:58.151 
12:14:58.152 To address all issues (including breaking changes), run:
12:14:58.152   npm audit fix --force
12:14:58.153 
12:14:58.153 Run `npm audit` for details.
12:14:58.203 Detected Next.js version: 15.3.6
12:14:58.204 Running "next build"
12:14:59.064    ▲ Next.js 15.3.6
12:14:59.065 
12:14:59.077    Creating an optimized production build ...
12:15:02.069 Failed to compile.
12:15:02.070 
12:15:02.071 ./components/layout/Navbar.tsx
12:15:02.071 Error:   x Unexpected token `header`. Expected jsx identifier
12:15:02.071     ,-[/vercel/path0/components/layout/Navbar.tsx:42:1]
12:15:02.071  39 |   const altLocale = locale === 'es' ? 'EN' : 'ES'
12:15:02.071  40 | 
12:15:02.071  41 |   return (
12:15:02.071  42 |     <header
12:15:02.071     :      ^^^^^^
12:15:02.072  43 |       className={cn(
12:15:02.072  44 |         'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
12:15:02.072  45 |         scrolled
12:15:02.072     `----
12:15:02.072 
12:15:02.072 Caused by:
12:15:02.072     Syntax Error
12:15:02.072 
12:15:02.072 Import trace for requested module:
12:15:02.072 ./components/layout/Navbar.tsx
12:15:02.072 ./app/[locale]/layout.tsx
12:15:02.072 
12:15:02.074 
12:15:02.076 > Build failed because of webpack errors
12:15:02.112 Error: Command "next build" exited with 1
