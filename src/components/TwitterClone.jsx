import { ssrImportKey } from "vite/runtime"
import LeftMenu from "./TwitterClone/LeftMenu"
import MiddleWall from "./TwitterClone/MiddleWall"
import RightMenu from "./TwitterClone/RightMenu"

export default function TwitterClone(){
    return(
        <div className="flex">
            <LeftMenu />
            <MiddleWall />
            <RightMenu />
        </div>
        )
}

