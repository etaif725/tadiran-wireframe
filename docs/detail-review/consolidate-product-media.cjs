const fs=require('node:fs');
const postcss=require('postcss');
const file='src/styles/offering-details.css';
const root=postcss.parse(fs.readFileSync(file,'utf8'));
let removed=0;
root.walkRules(rule=>{
 const keep=rule.selectors.filter(selector=>!selector.includes('.offering-device')&&!selector.includes('.offering-mobile-scene')&&!selector.includes('.offering-workspace-scene')&&!selector.includes('.offering-enterprise-tools__scene')&&!/\.offering-hero--workspace .*\.(offering-photo|offering-caption|offering-hero__visual)/.test(selector));
 if(keep.length!==rule.selectors.length){removed+=rule.selectors.length-keep.length;if(keep.length)rule.selectors=keep;else rule.remove();}
});
fs.writeFileSync(file,root.toString());
console.log(`Removed ${removed} obsolete product-media selectors.`);
