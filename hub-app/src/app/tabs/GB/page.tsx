export default function Page() {
    return (
        <main className="p-8 text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">
                🇬🇧 Storbritannien – Lagerinstruktion
            </h2>
            <p className="mb-6 text-gray-600">
                Det brittiska lagret är placerat i Manchester och fungerar som
                nav för distribution inom UK och Irland. Fokus ligger på snabba
                utleveranser, effektiv plockning och exakt lagerhållning. Nedan
                följer riktlinjer för den dagliga driften.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Goods-in / mottagning
            </h3>
            <p>
                Alla leveranser ankommer via port 5. Mottagningsteamet ansvarar
                för att varje pall kontrolleras mot inköpsorder. Skador
                dokumenteras direkt och rapporteras till HQ. Inleveranser
                sorteras i zon <strong>RECEIVING</strong> innan vidare
                bearbetning.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Storage / lagring
            </h3>
            <p>
                Produkter förvaras i enligt ABC-klassificering: A för
                snabbrörliga, B för medelfrekventa och C för långsam rotation.
                Låg- och höglager används beroende på artikelstorlek. Säkerställ
                att varje pall är skannad och korrekt placerad.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Order picking</h3>
            <p>
                Plock sker via mobila plockvagnar utrustade med skannrar och
                realtidsdata. Prioriterade ordrar markeras i systemet. Ordern
                verifieras alltid av en andra medarbetare vid{" "}
                <strong>PACKING STATION</strong> innan utleverans.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Pallhantering och säkerhet
            </h3>
            <p>
                Alla tompallar returneras till märkt yta vid port 7. Skadade
                pallar märks med röd etikett och separeras för återvinning.
                Brandutgångar får aldrig blockeras, och alla truckförare måste
                följa gångvägar enligt skyltning.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Returns & discrepancies
            </h3>
            <p>
                Returer hanteras av specialteam och placeras i zon{" "}
                <strong>RETURNS</strong>. Avvikelser registreras i det interna
                rapportverktyget och följs upp dagligen av teamledare. Personal
                ska alltid bära hi-vis väst och ID-bricka.
            </p>

            <p className="mt-8 text-sm text-gray-500">
                Denna manual uppdaterades senast 2025-06-11. Frågor besvaras av
                lokal team leader i Manchester.
            </p>
        </main>
    );
}
