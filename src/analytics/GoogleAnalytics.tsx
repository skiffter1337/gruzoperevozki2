'use client'

import Script from 'next/script'

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-17708877266"
            />
            <Script
                id="google-analytics-config"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17708877266');
            
            gtag('event', 'conversion', {
                'send_to': 'AW-17708877266/AvHVCPHSi7sbENKLoPxB',
                'value': 1.0,
                'currency': 'ILS'
            });
          `,
                }}
            />
        </>
    )
}

export default GoogleAnalytics