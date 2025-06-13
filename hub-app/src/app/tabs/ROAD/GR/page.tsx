export default function Page() {
    return (
        <main className="p-8 text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">
                🇬🇷 Grekland – Lagerinstruktion
            </h2>
            <p className="mb-6 text-gray-600">
                Lagret i Grekland drivs i samarbete med en
                tredjepartslogistikpartner i Aten. Anläggningen hanterar
                huvudsakligen e-handelsdistribution inom södra Europa. Nedan
                följer generella riktlinjer för godshantering.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Inkommande leveranser
            </h3>
            <p>
                Allt inkommande gods passerar genom centralporten och placeras
                temporärt i zon <strong>ΠΑΡΑΛΑΒΗ</strong> (mottagning). Varorna
                kontrolleras mot leveranslista innan de godkänns. Avvikelser
                noteras i det digitala mottagningssystemet.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Lagring</h3>
            <p>
                Varor sorteras efter typ och omsättningshastighet. Zon A
                hanterar snabbrotation, medan Zon C används för långsiktig
                lagring. Palldimensioner och vikt beaktas vid placering. Skyltar
                och färgkoder hjälper till att identifiera hyllrader.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Orderplock</h3>
            <p>
                Plockning sker med hjälp av skanningsutrustning kopplad till
                WMS-systemet. FIFO används där batchhantering är relevant.
                Färdigplockade ordrar lämnas i zon <strong>ΑΠΟΣΤΟΛΗ</strong>{" "}
                (utleverans), där etiketter och fraktsedlar kontrolleras.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Pall- och godshantering
            </h3>
            <p>
                Tomma pallar återlämnas till plats märkt EUROPALETTES. Trasiga
                pallar flyttas till reparation eller destruktion. Ingenting får
                blockera brandskyddszoner eller gångar enligt lokala
                föreskrifter.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Returer & avvikelser
            </h3>
            <p>
                Alla returer hanteras manuellt och kräver godkännande från
                kundtjänst. Avvikelser dokumenteras i systemet med tydlig orsak
                och ansvarig person. Kommunikation sker på både grekiska och
                engelska beroende på teamets sammansättning.
            </p>

            <p className="mt-8 text-sm text-gray-500">
                Denna manual uppdaterades senast 2025-06-11. För frågor kontakta
                lokal driftansvarig i Aten.
            </p>
        </main>
    );
}
