let request=require('request')
console.log(process.argv)
if(process.argv.length<4){
    console.log('至少要有两个参数 用户名和仓库名')
}
let users=process.argv[2]
let repo=process.argv[3]
let url=`https://gdmec:gdmectw401@api.github.com/repos/${users}/${repo}/commits`
const options={
    url,
    headers:{
        'User-Agent':'request'
    }
};
request(options,function(err,response,body){
    if(err){
        console.log(err)
        process.exit(0)
    }
    if(response.statusCode!=200){
        process.exit(0)
    }
    let result=JSON.parse(body)
    console.log(result.length)
    let res=result.reduce((sum,v)=>{
        sum+=v.commit.author.name+' '+v.commit.author.date+'\n'
        return sum
    },'')
    console.log(res)
})








