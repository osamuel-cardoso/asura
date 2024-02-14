export function IconTime({ Hour }: { Hour: number }) {
    return (
        <>
            {Hour <= 5 ? (
                <span>☾</span>
            ) : Hour >= 6 && Hour <= 18 ? (
                <span>☼</span>
            ) : (
                <span>☾</span>
            )}
        </>
    )
}
