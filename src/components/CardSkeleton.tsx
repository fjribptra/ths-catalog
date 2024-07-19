import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CardSekelton() {
    return (
        <Skeleton className="w-5 h-5" count={5}/>
    )
}