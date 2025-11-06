import {About} from "@/components/About/About"
import {Services} from "@/components/Services/Services"
import {Reviews} from "@/components/Reviews/Reviews"
import Header from "@/components/Header/Header"
import {Footer} from "@/components/Footer/Footer"
import {HeroSection} from "@/components/HeroSection/HeroSection"
import {Contact} from "@/components/Contact/Contact"
import {Articles} from "@/components/Articles";
import {PhotoGallery} from "@/components/PhotoGallery";
import {StickyButtons} from "@/components/StickyButtons";

export default function Home() {

    return (
        <>
            <Header lang="he"/>
            <HeroSection lang="he"/>
            <About lang="he"/>
            <Services lang="he"/>
            <Reviews lang="he"/>
            <PhotoGallery lang="he"/>
            <Articles lang="he"/>
            <Contact lang="he"/>
            <Footer lang="he"/>
            <StickyButtons lang="he"/>
        </>
    )
}