import Advantages from "@/components/Advantages/Advantages"
import {Services} from "@/components/Services/Services"
import {Vehicles} from "@/components/Vehicles/Vehicles"
import {Reviews} from "@/components/Reviews/Reviews"
import Header from "@/components/Header/Header"
import {getServerTranslations} from "@/lib/server-translations";
import {Footer} from "@/components/Footer/Footer";
import {HeroSection} from "@/components/HeroSection/HeroSection";

type Props = {
    params: Promise<{ lang: string }>
}

export default async function Home({params}: Props) {
    const {lang} = await params;
    const translations = await getServerTranslations(lang)

    return (
        <div>
            <Header lang={lang}/>
            <div style={{marginBottom: 60}}/>
            <main>
                <HeroSection lang={lang as "ru" | "he" | 'en'} translations={translations}/>
                <Advantages lang={lang as "ru" | "he" | 'en'} translations={translations}/>
                <Services lang={lang as "ru" | "he" | 'en'} translations={translations}/>
                <Vehicles lang={lang as "ru" | "he" | 'en'} translations={translations}/>
                <Reviews lang={lang as "ru" | "he" | 'en'} translations={translations}/>
            </main>
            <Footer lang={lang as "ru" | "he" | 'en'} translations={translations}/>
        </div>
    )
}