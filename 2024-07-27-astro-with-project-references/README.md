This sample project is based on the example code generated by `npm create
astro@latest`, and has been modified to use TSC project references.

# Current status
- I added type & import errors to `some-library/foobar.ts` and `index.astro`
- `tsc --build --force` recognizes the errors in `some-library/foobar.ts` as
  expected
- `astro check --tsconfig tsconfig.json` does not recognize any of the errors,
  neither in `index.astro` nor in `some-library/foobar.ts`.
- `astro check --tsconfig tsconfig.astro.json` recognizes the errors in
  `index.astro` but complains about `foobar.ts` not being in the includes (even
  though `some-library` is referenced in `tsconfig.astro.json`)
- The Astro dev server (`npm run dev`) outputs `[object Object]` where it should
  output the imported string `foo`, so it is not just a type issue. The bundling
  does not seem to work as expected, either.
