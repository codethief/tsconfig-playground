A playground where I test configurations for the TypeScript type checker / compiler.

# Background
TSC is [notoriously difficult to configure
correctly](https://github.com/microsoft/TypeScript/issues/29118#issuecomment-991763427)
and I have seen things get messed up in lots of projects. So hopefully some of
my test configs will actually work and I can use them as a reference in future
projects.

To be fair, TSC is by far not the worst offender. If I *only* had to configure
TSC I'd be happy but instead we end up piling build tools upon bundlers upon
transpilers upon custom file formats (`*.vue*`, `*.astro` – I'm looking at you!)
together with buggy LSPs & IDE plugins, and then we pray everything still works,
i.e. builds and type-checks and doesn't produce squiggly lines in our editor.


# Repo structure
Since I will likely not spend a long time working on each experiment, let alone
keep it updated in the future, dependencies will probably become outdated after
a while. For this reason, each experiment is tagged with the (approximate) date
of when I worked on it to provide an indicator of how up-to-date it is.
