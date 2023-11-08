import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <div class="prose">
            <h1>Impressum</h1>
            <p class="mb-2">Angaben gemäß § 5 TMG</p>
            <div>Rico Herwig</div>
            <div>rico@hrwg.de</div>
            <p class="font-bold">Vertreten durch</p>
            <div>Rico Herwig</div>
            <p class="font-bold">Kontakt</p>
            <div>E-Mail: hello@hrwg.de</div>
            <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
            <div>Rico Herwig</div>
            <h2>Haftungsausschluss</h2>
            <h3>Haftung für Links</h3>
            <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Links umgehend entfernen.
            </p>
            <h3>Google Analytics</h3>
            <p>
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc.
                (&quot;Google&quot;). Google Analytics verwendet sog. &quot;Cookies&quot;,
                Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der
                Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten
                Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse)
                wird an einen Server von Google in den USA übertragen und dort gespeichert. Google
                wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
                Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und
                um weitere mit der Websitenutzung und der Internetnutzung verbundene
                Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls
                an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese
                Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse
                mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der
                Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir
                weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
                Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser
                Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch
                Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck
                einverstanden.
            </p>
            <h3>Google AdSense</h3>
            <p>
                Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA
                (&quot;Google&quot;). Google Adsense verwendet sog. &quot;Cookies&quot;
                (Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der
                Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch sog.
                &quot;Web Beacons&quot; (kleine unsichtbare Grafiken) zur Sammlung von
                Informationen. Durch die Verwendung des Web Beacons können einfache Aktionen wie der
                Besucherverkehr auf der Webseite aufgezeichnet und gesammelt werden. Die durch den
                Cookie und/oder Web Beacon erzeugten Informationen über Ihre Benutzung dieser
                Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den
                USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um
                Ihre Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über
                die Websiteaktivitäten und Anzeigen für die Websitebetreiber zusammenzustellen und
                um weitere mit der Websitenutzung und der Internetnutzung verbundene
                Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls
                an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese
                Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse
                mit anderen Daten der Google in Verbindung bringen. Das Speichern von Cookies auf
                Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern, indem Sie in
                Ihren Browser-Einstellungen &quot;keine Cookies akzeptieren&quot; wählen (Im MS
                Internet-Explorer unter &quot;Extras &gt; Internetoptionen &gt; Datenschutz &gt;
                Einstellung&quot;; im Firefox unter &quot;Extras &gt; Einstellungen &gt; Datenschutz
                &gt; Cookies&quot;); wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen
                können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der
                über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und
                zu dem zuvor benannten Zweck einverstanden.
            </p>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Welcome',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
};
