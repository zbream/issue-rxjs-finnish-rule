# rxjs-finnish-rule-issue

1. `npm ci`
2. `npm run lint`

You will see the following:

```
The 'rxjs-finnish' rule threw an error in 'M:/Git/_public/rxjs-finnish-rule-issue/file.ts':
TypeError: Cannot read property 'name' of undefined
    at Walker.validateNode (M:\Git\_public\rxjs-finnish-rule-issue\node_modules\rxjs-tslint-rules\dist\rules\rxjsFinnishRule.js:169:49)
    at Walker.visitPropertyDeclaration (M:\Git\_public\rxjs-finnish-rule-issue\node_modules\rxjs-tslint-rules\dist\rules\rxjsFinnishRule.js:130:18)
    at Walker.SyntaxWalker.visitNode (M:\Git\_public\rxjs-finnish-rule-issue\node_modules\tslint\lib\language\walker\syntaxWalker.js:467:22)
    at M:\Git\_public\rxjs-finnish-rule-issue\node_modules\tslint\lib\language\walker\syntaxWalker.js:535:63
    at visitNodes (M:\Git\_public\rxjs-finnish-rule-issue\node_modules\typescript\lib\typescript.js:14006:30)
    at Object.forEachChild (M:\Git\_public\rxjs-finnish-rule-issue\node_modules\typescript\lib\typescript.js:14293:21)
    at Walker.SyntaxWalker.walkChildren (M:\Git\_public\rxjs-finnish-rule-issue\node_modules\tslint\lib\language\walker\syntaxWalker.js:535:12)
    at Walker.SyntaxWalker.visitClassDeclaration (M:\Git\_public\rxjs-finnish-rule-issue\node_modules\tslint\lib\language\walker\syntaxWalker.js:63:14)
    at Walker.SyntaxWalker.visitNode (M:\Git\_public\rxjs-finnish-rule-issue\node_modules\tslint\lib\language\walker\syntaxWalker.js:314:22)
    at M:\Git\_public\rxjs-finnish-rule-issue\node_modules\tslint\lib\language\walker\syntaxWalker.js:535:63
```