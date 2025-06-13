export default function Page() {
    return (
        <main className="p-8 text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">
                🇸🇪 Sverige – Lagerinstruktion
            </h2>
            <p className="mb-6 text-gray-600">
                Lagerverksamheten i Sverige är uppdelad på våra anläggningar i
                Stockholm, Göteborg och Malmö. Här följer en översikt över
                grundrutiner och praktiska instruktioner för daglig drift.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Mottagning av gods
            </h3>
            <p>
                All inleverans sker genom port 1. Pallarna ställs upp i
                mottagningszonen märkt <strong>INLEV</strong>. Varje pall
                kontrolleras mot följesedel: antal kolli, artikelnummer och
                eventuell skada. Skadade enheter fotodokumenteras och
                rapporteras omedelbart till ansvarig.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Placering av pallar
            </h3>
            <p>
                Pallar ska placeras enligt platskartan. Zon A används för
                volymprodukter med hög omsättning. Zon B är för säsongsartiklar.
                Tunga varor ställs alltid på nedersta hyllplan. Inga pallar får
                sticka ut från sin hyllsektion.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Plock och utleverans
            </h3>
            <p>
                Plock sker enligt FIFO-principen (först in, först ut). Plockaren
                ansvarar för att rätt artikel och rätt antal plockas. Använd
                handdator för scanning och dubbelkontroll. Färdiga plockade
                ordrar ställs i <strong>UTLEV-ZON</strong> och märks med
                ordernummer och fraktsedel.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Pallhantering</h3>
            <p>
                Alla tomma EUR-pallar staplas i pallställ bakom port 3. Maxhöjd:
                15 pallar. Trasiga pallar placeras separat med märkning TRASIG.
                Inga pallar får blockera brandvägar eller nödutgångar.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Returer och avvikelser
            </h3>
            <p>
                Returer tas emot vid port 2 och märks med retur-ID. Avvikelser
                dokumenteras i avvikelsesystemet senast vid dagens slut. All
                personal ansvarar för att hålla ordning i arbetsområdet och
                följa säkerhetsrutiner.
            </p>

            <p className="mt-8 text-sm text-gray-500">
                Denna manual uppdaterades senast 2025-06-11. Kontakta
                lageransvarig för frågor.
            </p>
        </main>
    );
}
