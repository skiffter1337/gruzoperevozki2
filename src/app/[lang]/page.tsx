import { About } from "@/components/About/About"
import { Services } from "@/components/Services/Services"
import { Reviews } from "@/components/Reviews/Reviews"
import Header from "@/components/Header/Header"
import { getServerTranslations } from "@/lib/server-translations"
import { Footer } from "@/components/Footer/Footer"
import { HeroSection } from "@/components/HeroSection/HeroSection"
import { Contact } from "@/components/Contact/Contact"
import {Articles} from "@/components/Articles";

type Props = {
    params: Promise<{ lang: string }>
}

export default async function Home({ params }: Props) {
    const { lang } = await params

    return (
        <div>
            <Header lang={lang} />
            <HeroSection lang={lang} />
            <About lang={lang} />
            <Services lang={lang} />
            <Reviews lang={lang} />
            <Articles />
            <Contact lang={lang} />
            <Footer lang={lang} />
        </div>
    )
}