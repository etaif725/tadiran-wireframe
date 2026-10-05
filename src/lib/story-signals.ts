// Authored Lottie paths in the source photographs' 1672 × 941 coordinates.
// Each path follows a visible light segment; gaps preserve foreground occlusion.
type Point = [number, number]
const paths: Point[][][] = [
 [[[0,780],[320,834],[660,822],[1068,722]],[[1390,320],[1558,365],[1510,427],[1400,470]]],
 [[[0,757],[330,835],[690,829],[1170,746],[1500,651],[1606,605]],[[1170,309],[1015,341],[918,411],[960,482]]],
 [[[0,766],[295,808],[590,784],[944,680]],[[1290,454],[1392,500],[1370,546],[1260,600]]],
]
export function storySignal(scene:number){
 const key=(t:number,s:number)=>({t,s:[s],i:{x:[.67],y:[1]},o:{x:[.33],y:[0]}})
 return {v:'5.12.2',fr:60,ip:0,op:180,w:1672,h:941,nm:`Tadiran scene ${scene+1} traced signal`,ddd:0,assets:[],layers:paths[scene].map((points,index)=>({
  ddd:0,ind:index+1,ty:4,nm:`Visible light segment ${index+1}`,sr:1,ip:0,op:180,st:0,bm:0,
  ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[0,0,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},
  shapes:[{ty:'sh',ks:{a:0,k:{c:false,v:points,i:points.map((p,i)=>i?[(points[Math.max(0,i-1)][0]-points[Math.min(points.length-1,i+1)][0])/6,(points[Math.max(0,i-1)][1]-points[Math.min(points.length-1,i+1)][1])/6]:[0,0]),o:points.map((p,i)=>i<points.length-1?[(points[Math.min(points.length-1,i+1)][0]-points[Math.max(0,i-1)][0])/6,(points[Math.min(points.length-1,i+1)][1]-points[Math.max(0,i-1)][1])/6]:[0,0])}}},
   {ty:'st',c:{a:0,k:[.82,1,1,1]},o:{a:0,k:100},w:{a:0,k:4},lc:2,lj:2},
   {ty:'tm',s:{a:1,k:[key(0,0),key(35,0),key(179,100)]},e:{a:1,k:[key(0,0),key(140,100),key(179,100)]},o:{a:0,k:0},m:1}],
 }))}
}
