import Hero from "@/components/Hero.tsx";
import FeaturedArtifacts from "@/components/FeaturedArtifacts.tsx";
import useDynamicTitle, {SITE_TITLE} from "@/lib/dynamicTitle.tsx";
import {ExploreCollection} from "@/components/ExploreCollection.tsx";
import {ExhibitionsAndEvents} from "@/components/ExhibitionsAndEvents.tsx";

export default function Home() {
    useDynamicTitle(SITE_TITLE)
    return (
        <>
            <Hero/>
            <FeaturedArtifacts/>
            <ExploreCollection/>
            <ExhibitionsAndEvents/>
        </>
    )
}