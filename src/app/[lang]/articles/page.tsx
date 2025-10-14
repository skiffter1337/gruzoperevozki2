import Header from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import { AllArticles } from "@/components/AllArticles/AllArticles"
import { StickyButtons } from "@/components/StickyButtons"

type Props = {
    params: Promise<{ lang: string }>
}

export default async function ArticlesPage({ params }: Props) {
    const { lang } = await params

    return (
        <>
            <Header lang={lang} />
            <AllArticles lang={lang} />
            <Footer lang={lang} />
            <StickyButtons lang={lang} />
        </>
    )
}