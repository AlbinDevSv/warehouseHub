export default function Home() {
    const avvikelser = [
        {
            id: 1,
            titel: "Trasig pall",
            beskrivning: "Pall skadad vid inleverans från leverantör X.",
        },
        {
            id: 2,
            titel: "Felplock",
            beskrivning:
                "Order 1234 innehöll fel artikel (SKU-456 istället för SKU-123).",
        },
        {
            id: 3,
            titel: "Saknad vara",
            beskrivning:
                "Artikel 789 saknas i hyllplats B23 trots systemmatchning.",
        },
    ];

    return (
        <main className="p-8 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">👋 Välkommen</h1>

            <section>
                <h2 className="text-xl font-semibold mb-3">📋 Avvikelser</h2>
                <ul className="space-y-3">
                    {avvikelser.map((a) => (
                        <li
                            key={a.id}
                            className="bg-white shadow-sm border border-gray-200 rounded-lg p-4">
                            <h3 className="text-md font-bold">{a.titel}</h3>
                            <p className="text-sm text-gray-600">
                                {a.beskrivning}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
