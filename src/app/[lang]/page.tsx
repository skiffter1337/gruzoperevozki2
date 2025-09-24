import Advantages from "@/components/Advantages/Advantages"
import {Services} from "@/components/Services/Services"
import {Vehicles} from "@/components/Vehicles/Vehicles"
import {Reviews} from "@/components/Reviews/Reviews"
import Header from "@/components/Header/Header"
import {getServerTranslations} from "@/lib/server-translations";
import {Footer} from "@/components/Footer/Footer";
import {HeroSection} from "@/components/HeroSection/HeroSection";

export default async function Home(params: Promise<{ lang: string }>) {
    const { lang } = await params;
    const translations = await getServerTranslations(lang)

    return (
        <div>
            <Header lang={lang}/>

            <main>
                <HeroSection lang={lang as "ru" | "he"} translations={translations}/>
                <Advantages lang={lang as "ru" | "he"} translations={translations}/>
                <Services lang={lang as "ru" | "he"} translations={translations}/>
                <Vehicles lang={lang as "ru" | "he"} translations={translations}/>
                <Reviews lang={lang as "ru" | "he"} translations={translations}/>
            </main>
            <Footer lang={lang as "ru" | "he"} translations={translations}/>
        </div>
    )
}