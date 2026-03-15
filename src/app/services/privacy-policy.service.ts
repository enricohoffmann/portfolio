import { Injectable } from "@angular/core";
import { PageTextContent } from "../interfaces/pageTextContent.interface";

@Injectable({ providedIn: 'root' })
export class PrivacyPolicyService {
    private readonly privacyPolicyDe: PageTextContent = {
        pageTitle: 'Datenschutzerklärung',
        sections: [
            {
                sectionH2: '1. Datenschutz auf einen Blick',
                sectionH3: 'Allgemeine Hinweise',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                                Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Datenerfassung auf dieser Website',
                title: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.`}
                        ]
                    }
                ]
            },
            {
                title: 'Wie erfassen wir Ihre Daten?',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                                Daten handeln, die Sie in ein Kontaktformular eingeben.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere ITSysteme
                                erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
                                des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.`}
                        ]
                    }
                ]
            },
            {
                title: 'Wofür nutzen wir Ihre Daten?',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
                                Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
                                geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote,
                                Bestellungen oder sonstige Auftragsanfragen verarbeitet.`}
                        ]
                    }
                ]
            },
            {
                title: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                                Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                                können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.`}
                        ]
                    },
                    {
                        runs: [
                            { text: `Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.` }
                        ]
                    }
                ]
            },
            {
                sectionH2: '2. Hosting',
                paragraphs: [
                    { runs: [{ text: `Wir hosten die Inhalte unserer Website bei folgendem Anbieter:` }] }
                ]
            },
            {
                sectionH3: 'All-Inkl',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Anbieter ist die ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742
                                Friedersdorf (nachfolgend All-Inkl). Details entnehmen Sie der Datenschutzerklärung von All-Inkl: `},
                            {
                                text: 'https://all-inkl.com/datenschutzinformationen/ ', style: 'link', link: {
                                    linkTarget: 'https://all-inkl.com/datenschutzinformationen/', linkTargetPlace: '_blank'
                                }
                            },
                            { text: '.' }
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
                                berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine
                                entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art.
                                6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den
                                Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG
                                umfasst. Die Einwilligung ist jederzeit widerrufbar.`}
                        ]
                    }

                ]

            },
            {
                sectionH2: '3. Allgemeine Hinweise und Pflichtinformationen',
                sectionH3: 'Datenschutz',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                                dieser Datenschutzerklärung.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                                Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                                und zu welchem Zweck das geschieht.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                                möglich.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Hinweis zur verantwortlichen Stelle',
                paragraphs: [
                    { runs: [{ text: 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:' }] },
                    { runs: [{ text: 'Enrico Hoffmann, Neckar-Alb-Str. 9/1, 72127 Kusterdingen' }] },
                    {
                        runs: [
                            { text: 'Telefon: 070715667664' },
                            { text: '', style: 'lineBreak' },
                            { text: 'E-Mail: ' },
                            {
                                text: 'enrico@enrico-hoffmann.de', style: 'link', link: {
                                    linkTarget: 'mailto:enrico@enrico-hoffmann.de'
                                }
                            }
                        ]
                    },
                    {
                        runs: [{
                            text: `Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
                        die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
                        entscheidet.`}]
                    }
                ]
            },
            {
                sectionH3: 'Speicherdauer',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                            Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                            berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                            werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                            personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                            letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: `Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
                    Website`,
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
                            Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
                            nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
                            personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                            49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
                            Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
                            auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                            Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                            Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
                            zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
                            Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
                            DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
                            Absätzen dieser Datenschutzerklärung informiert.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Empfänger von personenbezogenen Daten',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
                            ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
                            Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
                            Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
                            an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
                            haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
                            Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
                            Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
                            gemeinsame Verarbeitung geschlossen.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
                            bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                            Datenverarbeitung bleibt vom Widerruf unberührt.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: `Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
                    Direktwerbung (Art. 21 DSGVO)`,
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
                            ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                            SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
                            WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
                            PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
                            ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
                            WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
                            SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
                            NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE 
                            VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                            RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
                            SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                            BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                            EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
                            VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
                            ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                            NACH ART. 21 ABS. 2 DSGVO).`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                            oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                            verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Recht auf Datenübertragbarkeit',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                            automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                            aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
                            verlangen, erfolgt dies nur, soweit es technisch machbar ist.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Auskunft, Berichtigung und Löschung',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                            Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                            Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
                            zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Recht auf Einschränkung der Verarbeitung',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                            Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                            folgenden Fällen:`}
                        ]
                    },
                    {
                        runs: [
                            { text: '', style: 'dot' },
                            {
                                text: `Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
                            in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.`
                            },
                            { text: '', style: 'lineBreak' },
                            { text: '', style: 'dot' },
                            {
                                text: `Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
                                statt der Löschung die Einschränkung der Datenverarbeitung verlangen.`
                            },
                            { text: '', style: 'lineBreak' },
                            { text: '', style: 'dot' },
                            {
                                text: `Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                                Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                                Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.`
                            },
                            { text: '', style: 'lineBreak' },
                            { text: '', style: 'dot' },
                            {
                                text: `Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
                                Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                                überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                                zu verlangen.`
                            }

                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
                                ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
                                Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
                                eines Mitgliedstaats verarbeitet werden.`
                            }
                        ]
                    }
                ]

            },
            {
                sectionH2: '4. Datenerfassung auf dieser Website',
                sectionH3: 'Cookies',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf
                                Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
                                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
                                werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
                                gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-
                                Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von
                                Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
                                Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
                                von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken
                                verwendet werden.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
                                bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der
                                Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf
                                Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
                                Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur
                                technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
                                Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die
                                Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                                TDDDG); die Einwilligung ist jederzeit widerrufbar.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                                Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
                                sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
                                Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Sofern weitere Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dies dieser
                                Datenschutzerklärung entnehmen.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Kontaktformular',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
                                und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
                                Einwilligung weiter.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
                                der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
                                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
                                widerrufbar.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
                                (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                                insbesondere Aufbewahrungsfristen – bleiben unberührt.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Anfrage per E-Mail, Telefon oder Telefax',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
                            hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
                            bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
                            der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
                            effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
                            widerrufbar.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
                            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
                            (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
                            insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.`}
                        ]
                    },
                    {
                        runs: [
                            { text: 'Quelle:' },
                            { text: '', style: 'lineBreak' },
                            {
                                text: 'https://www.e-recht24.de', style: 'link', link: {
                                    linkTarget: 'https://www.e-recht24.de',
                                    linkTargetPlace: '_blank'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    };


    private readonly privacyPolicyEn: PageTextContent = {
        pageTitle: 'Privacy Policy',
        sections: [
            {
                sectionH2: '1. Data Protection at a Glance',
                sectionH3: 'General Information',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `The following information provides a brief overview of what happens to your personal data
                                    when you visit this website. Personal data refers to any information that can be used to
                                    identify you personally. For detailed information on data protection, please refer
                                    to our privacy policy, which is listed below this text.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Data collection on this website',
                title: 'Who is responsible for data collection on this website?',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Data processing on this website is carried out by the website operator. Their contact details
                                    can be found in the section ‘Information on the data controller’ in this privacy policy.`}
                        ]
                    }
                ]
            },
            {
                title: 'How do we collect your data?',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Your data is collected, on the one hand, when you provide it to us. This may include, for example,
                                    data that you enter into a contact form.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Other data is collected automatically or with your consent when you visit the website via our IT systems.
                                    This consists primarily of technical data (e.g. internet browser, operating system or time
                                    of page view). This data is collected automatically as soon as you enter this website.`}
                        ]
                    }
                ]
            },
            {
                title: 'What do we use your data for?',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Some of the data is collected to ensure the website functions correctly. Other
                                    data may be used to analyse your user behaviour. Where contracts
                                    can be concluded or initiated via the website, the data provided is also processed for contractual offers,
                                    orders or other enquiry requests.`}
                        ]
                    }
                ]
            },
            {
                title: 'What rights do you have regarding your data?',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `You have the right at any time to obtain, free of charge, information about the source, recipients and purpose of your
                                    stored personal data. You also have the right to request the rectification or
                                    erasure of this data. If you have given your consent to data processing,
                                    you may withdraw this consent at any time with effect for the future. Furthermore, you have the right, under certain circumstances, to request the restriction of the processing of your personal data.
                                    You also have the right to lodge a complaint with the relevant supervisory authority.`}
                        ]
                    },
                    {
                        runs: [
                            { text: `You may contact us at any time regarding this matter or any other questions you may have about data protection.` }
                        ]
                    }
                ]
            },
            {
                sectionH2: '2. Hosting',
                paragraphs: [
                    { runs: [{ text: `We host the content of our website with the following provider:` }] }
                ]
            },
            {
                sectionH3: 'All-Inkl',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `The provider is ALL-INKL.COM - Neue Medien Münnich, owned by René Münnich, Hauptstraße 68, 02742
                                    Friedersdorf (hereinafter ‘All-Inkl’). For further details, please refer to All-Inkl’s privacy policy: `},
                            {
                                text: 'https://all-inkl.com/datenschutzinformationen/ ', style: 'link', link: {
                                    linkTarget: 'https://all-inkl.com/datenschutzinformationen/', linkTargetPlace: '_blank'
                                }
                            },
                            { text: '.' }
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `The use of All-Inkl is based on Article 6(1)(f) of the GDPR. We have a
                                    legitimate interest in ensuring our website is presented as reliably as possible. Where
                                    consent has been sought, processing is carried out exclusively on the basis of Article
                                    6(1)(a) GDPR and Section 25(1) TDDDG, insofar as the consent covers the storage of cookies or
                                    access to information on the user’s device (e.g. device fingerprinting) within the meaning of the TDDDG.
                                    Consent may be withdrawn at any time.`}
                        ]
                    }

                ]

            },
            {
                sectionH2: '3. General Information and Mandatory Information',
                sectionH3: 'Data Protection',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `The operators of this website take the protection of your personal data very seriously. We treat your
                                    personal data confidentially and in accordance with statutory data protection regulations as well as
                                    this privacy policy.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `When you use this website, various types of personal data are collected.
                                    Personal data is data that can be used to identify you personally. This
                                    privacy policy explains what data we collect and what we use it for. It also explains how
                                    and for what purpose this is done.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `We would like to point out that data transmission over the internet (e.g. when communicating by email)
                                    may be subject to security vulnerabilities. It is not
                                    possible to guarantee complete protection of data against access by third parties.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Information regarding the data controller',
                paragraphs: [
                    { runs: [{ text: 'The data controller responsible for data processing on this website is:' }] },
                    { runs: [{ text: 'Enrico Hoffmann, Neckar-Alb-Str. 9/1, 72127 Kusterdingen' }] },
                    {
                        runs: [
                            { text: 'Telefon: 070715667664' },
                            { text: '', style: 'lineBreak' },
                            { text: 'E-Mail: ' },
                            {
                                text: 'enrico@enrico-hoffmann.de', style: 'link', link: {
                                    linkTarget: 'mailto:enrico@enrico-hoffmann.de'
                                }
                            }
                        ]
                    },
                    {
                        runs: [{
                            text: `The controller is the natural or legal person who, alone or jointly with others, determines
                                the purposes and means of the processing of personal data (e.g. names, email addresses, etc.).`}]
                    }
                ]
            },
            {
                sectionH3: 'Retention period',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Unless a more specific retention period is stated in this privacy policy,
                                    we will retain your personal data until the purpose for which it is processed no longer applies. If you
                                    submit a valid request for erasure or withdraw your consent to data processing,
                                    your data will be erased, provided we have no other legally permissible grounds for storing your
                                    personal data (e.g. retention periods under tax or commercial law); in
                                    the latter case, erasure will take place once these grounds no longer apply.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: `General information on the legal basis for data processing on this website`,
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Where you have consented to the processing of your data, we process your personal data on
                                    the basis of Article 6(1)(a) of the GDPR or Article 9(2)(a) of the GDPR, where special categories of data
                                    as defined in Article 9(1) of the GDPR are processed. In the event of explicit consent to the transfer
                                    of personal data to third countries, data processing is also carried out on the basis of Article
                                    49(1)(a) GDPR. If you have consented to the storage of cookies or to access to information on
                                    your device (e.g. via device fingerprinting), data processing is additionally
                                    carried out on the basis of Section 25(1) TDDDG. Consent may be withdrawn at any time. If your data is required for
                                    the performance of a contract or for the implementation of pre-contractual measures, we process your
                                    data on the basis of Article 6(1)(b) of the GDPR. Furthermore, we process your data where this
                                    is necessary to comply with a legal obligation on the basis of Article 6(1)(c) of the GDPR.
                                    Data processing may also take place on the basis of our legitimate interest pursuant to Article 6(1)(f)
                                    of the GDPR. Information regarding the relevant legal bases in each individual case is provided in the following
                                    paragraphs of this privacy policy.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Recipients of personal data',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `As part of our business activities, we work with various external parties. In doing so,
                                    it is sometimes necessary to transfer personal data to these external parties.
                                    We only disclose personal data to external parties if this is necessary for the
                                    performance of a contract, if we are legally obliged to do so (e.g. disclosure of data
                                    to tax authorities), if we have a legitimate interest in the disclosure pursuant to Article 6(1)(f) of the GDPR,
                                    or if another legal basis permits the disclosure of data. When using
                                    data processors, we only pass on our customers’ personal data on the basis of a valid
                                    data processing agreement. In the case of joint processing, a joint processing agreement
                                    is concluded.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Withdrawal of your consent to data processing',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Many data processing operations are only possible with your explicit consent. You may
                                    withdraw any consent you have already given at any time. The lawfulness of the data processing carried out prior to the withdrawal
                                    remains unaffected by the withdrawal.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: `Right to object to data collection in specific cases and to
                    direct marketing (Art. 21 GDPR)`,
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `IF DATA PROCESSING HAS BEEN CARRIED OUT ON THE BASIS OF ARTICLE 6(1)(E) OR (F) OF THE GDPR, 
                                YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA; 
                                THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RELEVANT LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. 
                                IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA, UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING THAT OVERRIDE YOUR INTERESTS, 
                                RIGHTS AND FREEDOMS, OR THE PROCESSING SERVES TO ESTABLISH, EXERCISE OR DEFEND LEGAL CLAIMS (OBJECTION UNDER ARTICLE 21(1) OF THE GDPR).`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `IF YOUR PERSONAL DATA IS PROCESSED FOR THE PURPOSE OF DIRECT MARKETING, 
                                YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSES OF SUCH MARKETING; 
                                THIS ALSO APPLIES TO PROFILING, INSOFAR AS IT IS RELATED TO SUCH DIRECT MARKETING. 
                                IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Right to lodge a complaint with the competent supervisory authority',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `In the event of infringements of the GDPR, data subjects have the right to lodge a complaint with a
                                    supervisory authority, in particular in the Member State of their habitual residence, their place of work
                                    or the place where the alleged infringement occurred. This right to lodge a complaint is without prejudice to any other
                                    administrative or judicial remedies.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Right to data portability',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `You have the right to receive data that we process automatically on the basis of your consent or in fulfilment of a contract,
                                    either for yourself or for a third party, in a commonly used, machine-readable format.
                                    If you request the direct transfer of the data to another controller,
                                    this will only take place to the extent that it is technically feasible.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Access, rectification and erasure',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `In accordance with the applicable legal provisions, you have the right at any time to obtain, free of charge,
                                    information about your stored personal data, its source and recipients, and the
                                    purpose of the data processing, and, where applicable, the right to have this data rectified or erased. For this and
                                    any other questions regarding personal data, please feel free to contact us at any time.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Right to restriction of processing',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `You have the right to request that the processing of your personal data be restricted.
                                    You may contact us at any time to do so. The right to restriction of processing applies in
                                    the following cases:`}
                        ]
                    },
                    {
                        runs: [
                            { text: '', style: 'dot' },
                            {
                                text: `If you dispute the accuracy of your personal data held by us, we
                                    will usually need time to verify this. For the duration of this verification, you have the right to
                                    request that the processing of your personal data be restricted.`
                            },
                            { text: '', style: 'lineBreak' },
                            { text: '', style: 'dot' },
                            {
                                text: `If the processing of your personal data has been or is being carried out unlawfully, you may
                                    request that the processing of your data be restricted instead of it being erased.`
                            },
                            { text: '', style: 'lineBreak' },
                            { text: '', style: 'dot' },
                            {
                                text: `If we no longer require your personal data, but you need it to exercise,
                                    defend or assert legal claims, you have the right to request that the processing of your personal data be restricted
                                    rather than deleted.`
                            },
                            { text: '', style: 'lineBreak' },
                            { text: '', style: 'dot' },
                            {
                                text: `If you have lodged an objection under Article 21(1) of the GDPR, a balancing of
                                    your interests against ours must be carried out. Until it has been determined whose interests
                                    prevail, you have the right to request that the processing of your personal data
                                    be restricted.`
                            }

                        ]
                    },
                    {
                        runs: [
                            {
                                text: `If you have restricted the processing of your personal data, such data – apart from
                                    its storage – may only be processed with your consent or for the purpose of establishing, exercising or
                                    defending legal claims, or to protect the rights of another natural or
                                    legal person, or for reasons of an important public interest of the European Union or
                                    a Member State.`
                            }
                        ]
                    }
                ]

            },
            {
                sectionH2: '4. Data collection on this website',
                sectionH3: 'Cookies',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `Our website uses so-called ‘cookies’. Cookies are small data packets and do not cause
                                    any damage to your device. They are stored on your device either temporarily for the duration of a session
                                    (session cookies) or permanently (persistent cookies). Session cookies
                                    are automatically deleted at the end of your visit. Permanent cookies remain stored on your device
                                    until you delete them yourself or they are automatically deleted by your web browser.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Cookies may be set by us (first-party cookies) or by third-party companies (so-called third-party
                                cookies). Third-party cookies enable the integration of certain services provided by
                                third-party companies within websites (e.g. cookies used to process payment services).`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Cookies serve various purposes. Many cookies are technically necessary, as certain
                                website features would not work without them (e.g. the shopping basket function or the display
                                of videos). Other cookies may be used to analyse user behaviour or for advertising purposes`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `Cookies that are necessary for the execution of the electronic communication process, for the provision
                                of specific functions you have requested (e.g. the shopping basket function) or for the optimisation of the
                                website (e.g. cookies for measuring website traffic) (necessary cookies) are stored on
                                stored on the basis of Article 6(1)(f) of the GDPR, unless another legal basis is specified.
                                The website operator has a legitimate interest in storing necessary cookies to
                                ensure the technically flawless and optimised provision of its services. Where consent has been sought for the
                                storage of cookies and similar recognition technologies, processing takes place
                                exclusively on the basis of this consent (Article 6(1)(a) GDPR and Section 25(1)
                                TDDDG); consent may be withdrawn at any time.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `You can configure your browser to notify you when cookies are set and
                                to allow cookies only on a case-by-case basis, to block cookies in specific cases or generally,
                                and to enable the automatic deletion of cookies when you close your browser. If you
                                disable cookies, the functionality of this website may be limited.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `If any further cookies or services are used on this website, you can find details of these
                                in this privacy policy.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Contact form',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `If you send us enquiries via the contact form, the details you provide in the
                                    enquiry form, including the contact details you have entered there, will be stored by us for the purpose of processing your enquiry
                                    and in case we need to ask you any follow-up questions. We will not pass on this data without your
                                    consent.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `The processing of this data is based on Article 6(1)(b) of the GDPR, provided that your enquiry relates to
                                the performance of a contract or is necessary for the implementation of pre-contractual measures
                                . In all other cases, processing is based on our legitimate interest in the
                                effective handling of enquiries addressed to us (Article 6(1)(f) of the GDPR) or on your
                                consent (Article 6(1)(a) of the GDPR) where this has been requested; consent may be
                                withdrawn at any time.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `The data you enter in the contact form will be retained by us until you ask us to delete it,
                                withdraw your consent to its storage, or the purpose for storing the data no longer applies
                                (e.g. once your enquiry has been dealt with). Mandatory legal provisions –
                                in particular retention periods – remain unaffected.`}
                        ]
                    }
                ]
            },
            {
                sectionH3: 'Enquiries by email, telephone or fax',
                paragraphs: [
                    {
                        runs: [
                            {
                                text: `If you contact us by email, telephone or fax, your enquiry, including all personal data it contains
                                    (name, enquiry details), will be stored and processed by us for the purpose of dealing with your request.
                                    We will not pass on this data without your consent.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `The processing of this data is based on Article 6(1)(b) of the GDPR, provided that your enquiry relates to
                            the performance of a contract or is necessary for the implementation of pre-contractual measures
                            . In all other cases, processing is based on our legitimate interest in the
                            effective handling of enquiries addressed to us (Article 6(1)(f) of the GDPR) or on your
                            consent (Article 6(1)(a) of the GDPR) where this has been requested; consent may be
                            withdrawn at any time.`}
                        ]
                    },
                    {
                        runs: [
                            {
                                text: `The data you send to us via contact enquiries will be retained by us until you request its deletion,
                            withdraw your consent to its storage, or the purpose for storing the data no longer applies
                            (e.g. once your enquiry has been dealt with). Mandatory legal provisions –
                            in particular statutory retention periods – remain unaffected.`}
                        ]
                    },
                    {
                        runs: [
                            { text: 'Source:' },
                            { text: '', style: 'lineBreak' },
                            {
                                text: 'https://www.e-recht24.de', style: 'link', link: {
                                    linkTarget: 'https://www.e-recht24.de',
                                    linkTargetPlace: '_blank'
                                }
                            }
                        ]
                    }
                ]
            }
        ]

    };


    getPrivacyPolicy() {
        return this.privacyPolicyEn;
    }

}