import {AccessibilitySettings} from "@/components/Header/model/types";

export const applyAccessibilitySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement
    const body = document.body

    if (settings.highContrast) {
        root.style.setProperty('--primary-color', '#000000')
        root.style.setProperty('--background-color', '#FFFFFF')
        root.style.setProperty('--text-color', '#000000')
        body.style.filter = 'contrast(150%)'
    } else {
        root.style.removeProperty('--primary-color')
        root.style.removeProperty('--background-color')
        root.style.removeProperty('--text-color')
        body.style.filter = 'none'
    }

    if (settings.grayscale) {
        body.style.filter = settings.highContrast
            ? 'contrast(130%) grayscale(100%)'
            : 'grayscale(100%)'
    } else if (!settings.grayscale && settings.highContrast) {
        body.style.filter = 'contrast(130%)'
    }
}