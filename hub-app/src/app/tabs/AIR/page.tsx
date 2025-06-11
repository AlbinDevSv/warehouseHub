export default function Page() {
    return (
        <main className="p-8 text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">
                ✈️ Flyg – Terminalinstruktion
            </h2>
            <p className="mb-6 text-gray-600">
                Flygterminalen hanterar inkommande och utgående flygfrakt.
                Tidskritiska sändningar, specialgods och säkerhetsklassade varor
                kräver tydliga rutiner och strikt efterlevnad. Här följer en
                generell arbetsmanual för flyganknuten godshantering.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Ankomst och avlastning
            </h3>
            <p>
                Flygfrakt anländer via rampanslutning till lastportarna vid
                flygterminalen. Godset ska lossas inom 30 minuter från
                flygankomst. ULD-containrar (Unit Load Devices) töms i zon{" "}
                <strong>AIR INBOUND</strong>, där gods sorteras och skannas.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Säkerhetskontroll
            </h3>
            <p>
                Allt flyggods måste genomgå säkerhetskontroll enligt TAPA och
                TSA-standard. Gods med okänd avsändare screenas via röntgen
                eller manuell kontroll. Säkerhetsavvikelser rapporteras
                omedelbart till säkerhetschef.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Sortering och temporär lagring
            </h3>
            <p>
                Efter kontroll sorteras godset efter destination eller
                transportör och placeras i <strong>AIR SORT</strong>. Brådskande
                försändelser (Priority) märks med röd etikett. Gods som väntar
                på tullklarering förvaras i karantänzon.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Utleverans till flyg
            </h3>
            <p>
                Avgående flygfrakt packas i ULD-containrar enligt lastschema.
                Kontrollera viktbalans, märkning och lastsäkring. Allt gods ska
                vara lastklart senast 90 minuter före avgång. Scanna varje
                försändelse före inlastning.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Tullhantering</h3>
            <p>
                Importerat gods får inte lämna tullzon innan det är förtullat.
                Använd systemet för att kontrollera tulldeklarationer.
                Tullpersonal har företräde i alla zoner. All kommunikation
                dokumenteras.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
                Säkerhetszoner och åtkomst
            </h3>
            <p>
                Endast behörig personal får vistas i{" "}
                <strong>AIR SECURITY ZONE</strong>. Alla måste bära synlig
                ID-bricka och reflexväst. Dörrar och portar till flygplansnära
                områden får aldrig lämnas olåsta eller obevakade.
            </p>

            <p className="mt-8 text-sm text-gray-500">
                Denna manual uppdaterades senast 2025-06-11. Frågor hänvisas
                till operativ chef för flygterminal.
            </p>
        </main>
    );
}
