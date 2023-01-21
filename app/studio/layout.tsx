import StyledComponentsRegistry from '@/components/SSRStyledComponentsRegistry'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
        </html>
    )
}
