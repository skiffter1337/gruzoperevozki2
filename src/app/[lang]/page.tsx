import { About } from "@/components/About/About"
import { Services } from "@/components/Services/Services"
import { Reviews } from "@/components/Reviews/Reviews"
import Header from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import { HeroSection } from "@/components/HeroSection/HeroSection"
import { Contact } from "@/components/Contact/Contact"
import {Articles} from "@/components/Articles";
import {PhotoGallery} from "@/components/PhotoGallery";
import {StickyButtons} from "@/components/StickyButtons";

type Props = {
    params: Promise<{ lang: string }>
}

export default async function Home({ params }: Props) {
    const { lang } = await params
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);
    }
    return (
        <>
            <Header lang={lang} />
            <HeroSection lang={lang} />
            <About lang={lang} />
            <Services lang={lang} />
            <Reviews lang={lang} />
            <PhotoGallery lang={lang} />
            <Articles lang={lang} />
            <Contact lang={lang} />
            <Footer lang={lang} />
            <StickyButtons lang={lang} />
        </>
    )
}