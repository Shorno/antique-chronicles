import {useEffect} from "react";

export const SITE_TITLE = "The Antique Chronicles"

export default function useDynamicTitle(title: string) {
    useEffect(() => {
        document.title = title
    }, [title])

}