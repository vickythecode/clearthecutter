import fs from "fs/promises"
import fsn from "fs"
import path from "path"
let basePath="C:\\Users\\ABC\\Desktop\\clearthecutter"
let files =await fs.readdir(basePath)
for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    if(ext!="js" && ext!="json" && item.split(".").length>1){
        if(fsn.existsSync(path.join(basePath,ext))){
            fs.rename(path.join(basePath,item),path.join(basePath,ext,item))
        }
        else{
            fs.mkdir(ext)
        }
    }
}
