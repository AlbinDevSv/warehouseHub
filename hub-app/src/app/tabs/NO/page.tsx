export default function Page() {
    return (
        <main className="p-8 text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">
                🇳🇴 Norge – Lagerinstruktion
            </h2>
            <p className="mb-6 text-gray-600">
                Vårt norska lager är beläget i utkanten av Oslo och hanterar
                både inrikes och internationella försändelser. Här följer
                riktlinjer för den dagliga driften och hanteringen av gods.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Godsmottagning</h3>
            <p>
                All inleverans sker via port 2. Pallar kontrolleras vid ankomst
                mot beställning. Eventuella skador dokumenteras med foto och
                rapporteras i systemet. Ankommande varor placeras i zon{" "}
                <strong>MOTTAK</strong> tills de är bokförda och etiketterade.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Lagring och zonindelning
            </h3>
            <p>
                Zon 1 är reserverad för snabbroterande varor, medan Zon 2
                används för långtidsförvaring. Kylvaror hanteras separat i
                kylzon 3. Tunga enheter förvaras längst ned i hyllsystemet,
                märkta med lastgräns.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Plockrutiner</h3>
            <p>
                Plock sker digitalt via handterminal. Plockare följer
                ruttoptimering i systemet. FIFO tillämpas där det är relevant.
                Varje order verifieras med dubbel scanning innan den flyttas
                till <strong>UTSENDING</strong>-zonen.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Pallhantering</h3>
            <p>
                Tomma pallar förvaras på angiven plats i pallstativet vid port
                4. Trasiga eller icke-godkända pallar märks och placeras i
                området för returträ. Det är viktigt att hålla fria
                utrymningsvägar i hela lagret.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Returer och avvikelser
            </h3>
            <p>
                Returvaror lämnas in genom kundtjänstzonen och registreras i
                retursystemet. Alla avvikelser rapporteras via digitalt formulär
                och bekräftas av lageransvarig innan dagen är slut.
            </p>

            <p className="mt-8 text-sm text-gray-500">
                Denna manual uppdaterades senast 2025-06-11. Kontakta norsk
                lageransvarig vid frågor.
            </p>
        </main>
    );
}
