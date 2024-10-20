export default function DriversDashBoardLayout(
    {children,} : {children: React.ReactNode}
) {
    return(
        <section>
            {/* Include shared UI here e.g. Header or sidebar */}
            <nav></nav>
            {children}
        </section>
    )
}