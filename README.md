# How to reproduce

with ``"cjs": { "vars": true }`` turned on

```
npm i
node -r @std/esm index.js
```

## Expected Output

which is the same as raw node

```
evaluating top module
evaluating sub module
{ methodOfSub: [Function: methodOfSub] }
```

## Actual Output

```
evaluating top module
evaluating sub module
evaluating top module
{}
```

## Workarounds

- use ``exports.methodOfTop = methodOfTop`` instead of ``exports = module.exports = { methodOfTop }``
  + the name ``methodOfTop`` would be repeated twice, so when there are many names to export, ``export.name = name`` would be annoying 
- turn off "vars" option: removing ``"vars": true`` from ``package.json``
- install @std/esm@0.18.0 instead: ``npm i @std/esm@0.18.0``
- use repl: ``node -e 'console.log(require("./index").subModule)' -r @std/esm``

