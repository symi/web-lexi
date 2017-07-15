const testsContext = (<any>require).context(".", true, /.spec.ts$/);
testsContext.keys().forEach(testsContext);

// so that coverage picks up files (.ts not .d.ts) with no tests at all.
const sourceContext = (<any>require).context("../src", true, /(^.?|\.[^d]|[^.]d|[^.][^d])\.ts$/);
sourceContext.keys().forEach(sourceContext);