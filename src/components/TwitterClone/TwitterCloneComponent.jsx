import { ssrImportKey } from "vite/runtime"
import LeftMenuComponent from "./Menu/LeftMenuComponent"
import RightMenuComponent from "./Menu/RightMenuComponent"
import MainContentComponent from "./MainContent/MainContentComponent"

export default function TwitterCloneComponent(){
    return(
        <div className="flex">
            <LeftMenuComponent />
            <MainContentComponent />
            <RightMenuComponent />
        </div>
        )
}

